const fs = require('fs');
const _ = require('lodash');
const rimraf = require("rimraf");
const chalk = require('chalk');
const path = require('path');

// Format TypeScript code:
//----------------------------------------

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function formatTs(filePath) {
  const { stderr } = await exec(`./node_modules/typescript-formatter/bin/tsfmt -r ${filePath}`);
  if (stderr) {
    console.log(`Failed to format TypeScript file: ${filePath}. Error:`, stderr);
  }
}

// Global vars:
//----------------------------------------

const schemasDir = `../schemas`;
const outDir = `./out`;

const folderToFileNamesMap = {};
const classNameToFolderMap = {};

//----------------------------------------

function toTsClassName (str) {
  const name = toTsFieldName(str);
  return name.charAt(0).toUpperCase() + name.substring(1);
}

function toTsFieldName (str) {
  return _.camelCase(str);
}

function primitiveSubTypeToTsType (subType, internalClassName) {
  switch (subType) {
    // Primitives:

    case 'None':        return 'undefined';
    case 'Bool':        return 'boolean';
    case 'Uint16':      return 'number';
    case 'Uint32':      return 'number';
    case 'Uint64':      return 'number';
    case 'Int16':       return 'number';
    case 'Int32':       return 'number';
    case 'Int64':       return 'number';
    case 'Text':        return 'string';
    
    case 'Internal':    return internalClassName + 'Type';

    default: throw new Error(`Unexpected Substrate type name: ${subType}`);
  }
}

function vectorSubTypeToTsType (subVecType, internalClassName) {
  const subType = subVecType.replace(/Vec$/, '');
  return primitiveSubTypeToTsType(subType, internalClassName) + '[]';
}

function subTypeNameToTsType (subType, internalClassName) {
  switch (subType) {
    // Vectors:

    case 'BoolVec':
    case 'Uint16Vec':
    case 'Uint32Vec':
    case 'Uint64Vec':
    case 'Int16Vec':
    case 'Int32Vec':
    case 'Int64Vec':
    case 'TextVec':
    case 'InternalVec':
      return vectorSubTypeToTsType(subType, internalClassName);

    // Primitives or error:
    default:
      return primitiveSubTypeToTsType(subType, internalClassName);
  }
}

function generateFieldMeta (field) {
  const id = toTsFieldName(field.name);
  return (`${id}: ${JSON.stringify({ id, ...field }, null , 2)}`);
}

function generateTsClass (folder, fileName) {
  const schema = JSON.parse(fs.readFileSync(`${schemasDir}/${folder}/${fileName}`, 'utf8'));
  const className = toTsClassName(schema.classId);

  const propIds = [];
  const formValuesStrs = [];
  const typeFieldStrs = [];
  const metaFieldsStrs = [];
  const validations = [];

  const usedInternalClasses = new Set();

  schema.newProperties.forEach(field => {
    const tsName = toTsFieldName(field.name);

    const internalClassName = field.classId && toTsClassName(field.classId);
    if (internalClassName) {
      usedInternalClasses.add(internalClassName);
    }

    const tsType = subTypeNameToTsType(field.type, internalClassName);

    propIds.push(tsName);
    formValuesStrs.push(`${tsName}: string`);
    typeFieldStrs.push(`${tsName}${field.required ? '' : '?'}: ${tsType}`);
    metaFieldsStrs.push(generateFieldMeta(field));

    if (field.type === 'Text') {
      const { maxTextLength } = field;
      const indent = `\n    `
      const requiredStr = field.required ? `${indent}.required('This field is required')` : '';
      const maxLenStr = field.maxTextLength ? `${indent}.max(${maxTextLength}, 'Text is too long. Maximum length is ${maxTextLength} chars.')` : '';
      validations.push(`${tsName}: Yup.string()${requiredStr}${maxLenStr}`)
    }
  });

  const internalClassImports = [];
  Array.from(usedInternalClasses).map(className => {
    const internalFolder = classNameToFolderMap[className];
    const basePath = internalFolder === folder ? '.' : `../${internalFolder}`
    const str = `import { ${className}Type } from '${basePath}/${className}';`
    internalClassImports.push(str);
  });

  const tsContent = (`
/** This file is generated based on JSON schema. Do not modify. */

import * as Yup from 'yup';
import { EntityCodec } from '@joystream/types/versioned-store/EntityCodec';
${internalClassImports.join('\n')}

export const ${className}ValidationSchema = Yup.object().shape({
  ${validations.length ? validations.join(',\n') : '// No validation rules.'}
});

export type ${className}FormValues = {
  ${formValuesStrs.join('\n')}
};

export type ${className}Type = {
  ${typeFieldStrs.join('\n')}
};

export const ${className}Codec = new EntityCodec<${className}Type>();

export type ${className}PropId =
  ${propIds.map(id => `'${id}'`).join(' |\n  ')}
;

export type ${className}GenericProp = {
  id: ${className}PropId,
  type: string,
  name: string,
  description?: string,
  required?: boolean,
  maxItems?: number,
  maxTextLength?: number,
  classId?: any
};

type ${className}ClassType = {
  [id in ${className}PropId]: ${className}GenericProp
};

export const ${className}Class: ${className}ClassType = {
  ${metaFieldsStrs.join(',\n')}
};
`).replace(/(\n){2,}/g, '\n\n');

  const outFolder = `${outDir}/${folder}`;

  if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder, { recursive: true });
  }

  console.log(`Generating a file: ${outFolder}/${chalk.green(className)}.ts`);
  
  const outTsFile = `${outFolder}/${className}.ts`;
  fs.writeFileSync(
    outTsFile,
    tsContent
  )
  
  return outTsFile;
}

// Generate TS files:
//----------------------------------------

async function generateTsFiles () {
  const getFileOrDirNames = (directory, isDir) =>
    fs.readdirSync(directory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() === isDir)
      .map(dirent => dirent.name)

  const schemaFolders = getFileOrDirNames(schemasDir, true);
  schemaFolders.map(folder => {
    const folderFileNames = getFileOrDirNames(`${schemasDir}/${folder}`, false);

    const jsonFileNames = []
    for (fileName of folderFileNames) {
      if (path.extname(fileName) === ".json") {
        jsonFileNames.push(fileName);

        let className = fileName.replace(/[\d]*.json$/, '');
        className = _.upperFirst(className);
        classNameToFolderMap[className] = folder;
      }
    }
    folderToFileNamesMap[folder] = jsonFileNames;
  });

  // console.log(schemaFolders);
  // console.log(folderToFileNamesMap);
  // console.log(classNameToFolderMap);

  schemaFolders.map(async folder => {
    const outFolder = `${outDir}/${folder}`;
    if (fs.existsSync(outFolder)) {
      rimraf.sync(outFolder);
    }

    const fileNames = folderToFileNamesMap[folder];
    await Promise.all(fileNames.map(fileName => {
      const outTsFile = generateTsClass(folder, fileName);
      return formatTs(outTsFile);
    }));
  });
}

generateTsFiles();

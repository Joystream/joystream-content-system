Language JSON Schemas
====================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Classes](#classes)
  - [Main Class](#main-class)
  - [Internal Classes](#internal-classes)
- [Versions](#versions)
  - [v1 JSON](#v1-json)
- [Properties](#properties)
  - [v1](#v1)
    - [Object](#object)
  - [Possible Future Properties](#possible-future-properties)
    - [Country code](#country-code)
<!-- TOC END -->

# Classes

## Main Class
- [language](/joystream-content-system/classes/general/language.md)

## Internal Classes
In order of appearance:

# Versions

## v1 JSON

```json
{
  "classId": 1,
  // Id of language class
  "newProperties": [
    {
      "name": "Language",
      "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English.",
      "type": "Text",
      "required": true,
      "maxTextLength": 2
    },
  ]
}
```

# Properties

## v1

### Object
```json
{
  "name": "Language",
  "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English.",
  "type": "Text",
  "required": true,
  "maxTextLength": 5
},
```

## Possible Future Properties

### Country code
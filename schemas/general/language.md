Language JSON Schemas
====================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Classes](#classes)
  - [Main Class](#main-class)
  - [Internal Classes](#internal-classes)
- [Versions](#versions)
  - [v0 JSON](#v0-json)
- [Properties](#properties)
  - [v0](#v0)
    - [Object](#object)
  - [Possible Future Properties](#possible-future-properties)
    - [Link](#link)
<!-- TOC END -->

# Classes

## Main Class
- [language](/joystream-content-system/classes/general/language.md)

## Internal Classes
In order of appearance:

# Versions

## v0 JSON

```json
{
  "classId": 1,
  // Id of data-directory-object class
  "newProperties": [
    {
      "name": "Language",
      "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English. Also allows subtags, eg 'en-US' for US english.",
      "type": "Text",
      "required": true,
      "maxTextLength": 5
    },
  ]
}
```

# Properties

## v0

### Object
```json
{
  "name": "Language",
  "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English. Also allows subtags, eg 'en-US' for US english.",
  "type": "Text",
  "required": true,
  "maxTextLength": 5
},
```

## Possible Future Properties

### Link

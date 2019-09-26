Data Directory Object JSON Schemas
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
- [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)

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
      "name": "Object",
      "description": "Object in the data directory",
      "type": "Text",
      "required": true,
      "maxTextLength": 68
    },
  ]
}
```

# Properties

## v0

### Object
```json
{
  "name": "Object",
  "description": "Object in the data directory",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
},
```

## Possible Future Properties

### Link

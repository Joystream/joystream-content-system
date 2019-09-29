Data Directory Object JSON Schemas
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
    - [External](#external)
    - [Link](#link)
<!-- TOC END -->

# Classes

## Main Class
- [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)

## Internal Classes
In order of appearance:

# Versions

## v1 JSON

```json
{
  "classId": 1,
  // Id of data-directory-object class
  "newProperties": [
    {
      "name": "ContentId",
      "description": "ContentId of object in the data directory",
      "type": "Text",
      "required": true,
      "maxTextLength": 68
    },
  ]
}
```

# Properties

## v1

### Object
```json
{
  "name": "ContentId",
  "description": "ContentId of object in the data directory",
  "type": "Text",
  "required": true,
  "maxTextLength": 68
},
```

## Possible Future Properties

### External

### Link

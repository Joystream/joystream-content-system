Data Directory Object - Class Schemas
=====================================

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
    - [External](#external)
    - [Link](#link)
<!-- TOC END -->

# Classes

## Main Class
- [data-directory-object](/classes/general/data-directory-object.md)

## Internal Classes
In order of appearance:

# Versions

## v0 JSON

```json
{
  "classId": <input>,
  // Id of data-directory-object class
  "newProperties": [
    {
      "name": "Object",
      "description": "ContentId of object in the data directory",
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
  "description": "ContentId of object in the data directory",
  "type": "Text",
  "required": true,
  "maxTextLength": 68
},
```

## Possible Future Properties

### External

### Link

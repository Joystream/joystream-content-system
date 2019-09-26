Podcast Category itunes JSON Schemas
====================================

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
    - [Podcast category](#podcast-category)
  - [Possible Future Properties](#possible-future-properties)
<!-- TOC END -->

# Classes

## Main Class
- [podcast](/joystream-content-system/classes/podcast/podcast-category-itunes.md)

## Internal Classes
In order of appearance:

# Versions

## v0 JSON

```json
{
  "classId": 1,
  // Id of podcast-category-itunes class
  "newProperties": [
    {
      "name": "Podcast category",
      "description": "Categories as defined for podcasts published in itunes. RSS: <channel><itunes:category>",
      "type": "Text",
      "required": true,
      "maxTextLength": 255
    },
  ]
}
```

# Properties

## v0

### Podcast category
```json
{
  "name": "Podcast category",
  "description": "Categories as defined for podcasts published in itunes. RSS: <channel><itunes:category>",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

## Possible Future Properties

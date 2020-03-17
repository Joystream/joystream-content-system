Video Category - Class
=====================

Table of Contents
----------------
<!-- TOC START min:1 max:4 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [Properties](#properties)
    - [Rome](#rome)
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`8`

## Explanation
To enforce a specific standard of tagging categories for the `video` content type.

### Protection


## CreateClass JSON-schema
```json
{
  "name": "Video Category",
  "description": "Class for setting the category for videos in the Video class."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active |
|:---------------------------------------------------------:|------------------|:-----:|
| [v0](../../schemas/video/videoCategory0.json)             | `Rome`           |`true` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Value",
  "description": "Categories for videos.",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```


## Entities
If applicable:
[Link](../../entities/general/name-of-class.md)

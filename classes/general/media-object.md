Language
========

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
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
`NA`

## Explanation
Entities in this Class

### Protection

In the current implementation, there are no restrictions as to what can be passed as values for an `entity` when populating the one property in this `class`.

## CreateClass JSON-schema
```json
{
  "name": "Media Object",
  "description": "Class for resolving a content entity to an actual media file or link."
}
```

## Schemas
|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/mediaObject0.json)             | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Object",
  "description": "ContentId of object in the data directory",
  "type": "Text",
  "required": true,
  "maxTextLength": 68
}
```

## Entities
NA

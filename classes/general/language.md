Language - Class
================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [In Class Properties](#in-class-properties)
    - [Rome](#rome)
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`NA`

## Explanation
To enforce a specific standard of tagging languages across all content types.

Future schemas could include additional properties such as `for hearing impaired` for subtitles, although that may be a new `Class` of its own.

### Protection

The concept needs to a follow strict standard. If all content creators could create a new `entity` in this `Class`, one would expect `n` ways of defining (British) English:
- `en`
- `en-BR`
- `eng`
- `english`
- `English`
- `british`
- `British`
- ...

This would make discovery more difficult, and would lead to thousands of entities.

## CreateClass JSON-schema
```json
{
  "name": "Language",
  "description": "Class for setting language."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/language0.json)                | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Language code",
  "description": "Language code following the ISO 639-1 two letter standard.",
  "type": "Text",
  "required": true,
  "maxTextLength": 2
}
```

## Entities

[Link](../../entities/general/language.md)

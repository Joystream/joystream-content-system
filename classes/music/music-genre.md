Music Genre - Class
=====================

Table of Contents
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [Properties](#properties)
    - [Rome](#rome)
<!-- TOC END -->

## ClassID
`NA`

## Explanation
To enforce a specific standard of tagging genres for the `music` content type.

### Protection


## CreateClass JSON-schema
```json
{
  "name": "Music Genre",
  "description": "Class for setting the genre for music."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/music/musicGenre0.json)                | `Rome`           | `yes`|

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Genre",
  "description": "Genres for music.",
  "required": true,
  "type": "Text",
  "maxTextLength": 100
}
```
<!--
## Entities
If applicable:
[Link](../../entities/general/name-of-class.md)
-->

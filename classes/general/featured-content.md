Featured Content - Class
==========================

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
      - [In Class index 0](#in-class-index-0)
      - [In Class index 1](#in-class-index-1)
      - [In Class index 2](#in-class-index-2)
<!-- TOC END -->

## ClassID
`6`

## Explanation
To enforce a specific standard of tagging whether or not the content is `featured` or not across all content types.

### Protection

It needs to be clear for the `publisher` whether their content is `featured` or not.

## CreateClass JSON-schema
```json
{
  "name": "Featured Content",
  "description": "Class for featuring content on the platform."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active |
|:---------------------------------------------------------:|------------------|:-----:|
| [v0](../../schemas/general/featuredContent0.json)         | `Rome`           |`true` |

## Properties
### Rome
#### In Class index 0
```json
{
  "name": "Top Video",
  "description": "The video that has the most prominent position(s) on the platform.",
  "type": "Internal",
  "classId": "Video"
  }
```
#### In Class index 1
```json
{
  "name": "Featured Videos",
  "description": "Videos featured in the Video tab.",
  "type": "InternalVec",
  "maxItems": 12,
  "classId": "Video"
}
```
#### In Class index 2
```json
{
  "name": "Featured Albums",
  "description": "Music albums featured in the Music tab.",
  "type": "InternalVec",
  "maxItems": 12,
  "classId": "Music Album"
}

```

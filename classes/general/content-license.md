Content License - Class
=======================

Table of Content
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
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`3`

## Explanation
To enforce a specific standard of licenses to be applied to each content added to the content directory.

### Protection

The concept needs to a follow strict standard. If all content creators could create a new `entity` in this `Class`, it could result in both duplicates, and licenses that doesn't allow for sharing, regardless of attribution.

## CreateClass JSON-schema
```json
{
  "name": "Content License",
  "description": "Class for specifying the license under which content is published."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active |
|:---------------------------------------------------------:|------------------|:-----:|
| [v0](../../schemas/general/contentLicense0.json)          | `Rome`           |`true` |

## Properties
### Rome
#### In Class index 0
```json
{
  "name": "Value",
  "description": "The license of which the content is originally published under.",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

## Entities

[Link](../../entities/general/content-license.md)

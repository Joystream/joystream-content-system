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
To enforce a specific standard of tagging whether or not the `publisher` of the content want to content to be accessible or not across all content types.

### Protection

It needs to be clear for the `publisher` whether or not their content is available for discovery, and by implication, consumption or to download.

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
  "name": "License",
  "description": "The license of which the content is originally published under.",
  "type": "Text",
  "required": true,
  "maxTextLength": 200
}
```

## Entities

[Link](../../entities/general/content-license.md)

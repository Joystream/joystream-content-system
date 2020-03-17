Publication Status - Class
==========================

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
`4`

## Explanation
To enforce a specific standard of tagging whether or not the `publisher` of the content want to content to be accessible or not across all content types.

### Protection

It needs to be clear for the `publisher` whether or not their content is available for discovery, and by implication, consumption or to download.

## CreateClass JSON-schema
```json
{
  "name": "Publication Status",
  "description": "Class for setting the publication status of a content entity."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active |
|:---------------------------------------------------------:|------------------|:-----:|
| [v0](../../schemas/general/publicationStatus0.json)       | `Rome`           |`true` |

## Properties
### Rome
#### In Class index 0
```json
{
  "name": "Status",
  "description": "The publication status of the content in the content directory.",
  "required": true,
  "type": "Text",
  "maxTextLength": 50
}
```

## Entities

[Link](../../entities/general/publication-status.md)

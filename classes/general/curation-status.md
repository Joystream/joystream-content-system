Curation Status - Class
=======================

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
To enforce a specific standard of tagging content where a `Content Curator` has performed an action.

### Protection

It needs to be clear for the `publisher` why a `Content Curator` has made performed an action on an entity they published.

## CreateClass JSON-schema
```json
{
  "name": "Curation Status",
  "description": "Class for curators to set the publication status of a content entity."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/curationStatus0.json)          | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Status",
  "description": "The curator publication status of the content in the content directory.",
  "required": true,
  "type": "Text",
  "maxTextLength": 50
}
```

## Entities
[Link](../../entities/general/curation-status.md)

Featured Content - Class
==========================

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
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`NA`

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

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/featuredContent0.json)         | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
    {
      "name": "Top Video",
      "description": "The video that has the most prominent position(s) on the platform.",
      "type": "Internal",
      "classId": "Video"
    },
    {
      "name": "Featured Videos",
      "description": "Videos featured in the Video tab.",
      "type": "InternalVec",
      "maxItems": 6,
      "classId": "Video"
    },
    {
      "name": "Featured Albums",
      "description": "Music albums featured in the Music tab.",
      "type": "InternalVec",
      "maxItems": 6,
      "classId": "Music Album"
    }

```

## Entities

[Link](../../entities/general/featured-content.md)

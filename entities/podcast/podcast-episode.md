Podcast Episodes Entities
================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [Class and Schema](#class-and-schema)
  - [CreateEntity JSON-schema](#createentity-json-schema)
  - [Entities](#entities)
  - [AddSchemaSupportToEntity JSON-schema](#addschemasupporttoentity-json-schema)
<!-- TOC END -->

## Class and Schema

- [class](/joystream-content-system/classes/podcast/podcast-episode.md)
- Class Id : `NA`
- [schema](/joystream-content-system/schemas/podcast/podcast-episode.md)
- Supported schema Id(s): `1`

## CreateEntity JSON-schema
```json
{
  "classId": 1,
  // Id of podcast class
}
```

## Entities

Not protected.

## AddSchemaSupportToEntity JSON-schema
Example below for `entityId 1`

```json
{
  "entityId": 1,
  "schemaId": 1,
     "propertyValues": [
    {
      "name": "Title",
      "value": "Staked",
    },
    {
      "name": "Description",
      "value": "Staked is a new podcast exploring crypto and blockchain governance.",
    },
    {
      "name": "Image",
      "value": "https://ssl-static.libsyn.com/p/assets/2/d/2/5/2d25eb5fa72739f7/iTunes_Cover.png",
    },
    {
      "name": "Language",
      "value": 43
    },
    {
      "name": "Podcast episodes",
      "value": "0xf8a54ce6feb08c0d0cf26b426b553a531afa5cfb609cea693ca520fef034ad60"
    },
    {
      "name": "Author",
      "value": "Staked"
    },
    {
      "name": "Subtitle",
      "value": "First episode of Staked - presented by Joystream"
    },
    {
      "name": "Season",
      "value": 1
    },
    {
      "name": "Episode",
      "value": 1
    },
    {
      "name": "Explicit",
      "value": false
    },
  ]
}
```

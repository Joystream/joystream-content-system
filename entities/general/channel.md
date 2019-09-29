Channel Entities
==============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [Class and Schema](#class-and-schema)
  - [CreateEntity JSON-schema](#createentity-json-schema)
  - [Entities](#entities)
  - [AddSchemaSupportToEntity JSON-schema](#addschemasupporttoentity-json-schema)
<!-- TOC END -->

## Class and Schema

- [class](/joystream-content-system/classes/general/channel.md)
- Class Id : `NA`
- [schema](/joystream-content-system/schemas/general/channel.md)
- Supported schema Id(s): `1`

## CreateEntity JSON-schema
```json
{
  "classId": 1,
  // Id of channel class
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
      "name": "Channel Name",
      "value": "Joystream Explainer Videos",
    },
    {
      "name": "Description",
      "value": "A channel with that publishes official Joystream content!",
    },
    {
      "name": "Image",
      "value": "https://avatars0.githubusercontent.com/u/45568317?s=400&v=4",
    },
    {
      "name": "Language",
      "value": [43,55,149]
    },
    {
      "name": "Owner name",
      "value": "Joystream"
    },
    {
      "name": "Contributors",
      "value": ["5DaDUnNVzZPwK9KLwyPFgeSbc9Xeh6G39A2oq36tiV9aEzcx","5Gn9n7SDJ7VgHqHQWYzkSA4vX6DCmS5TFWdHxikTXp9b4L32"]
    },
    {
      "name": "Explicit",
      "value": false
    },
  ]
}
```

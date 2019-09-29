Data Directory Object Entities
==============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [SchemaID](#schemaid)
  - [CreateEntity JSON-schema](#createentity-json-schema)
  - [Entities](#entities)
  - [AddSchemaSupportToEntity JSON-schema](#addschemasupporttoentity-json-schema)
<!-- TOC END -->

## Class and Schema

- [class](/joystream-content-system/classes/general/data-directory-object.md)
- Class Id : `NA`
- [schema](/joystream-content-system/schemas/general/data-directory-object.md)
- Supported schema Id(s): `1`

## CreateEntity JSON-schema
```json
{
  "classId": 1,
  // Id of data-directoy-object class
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
      "name": "ContentId",
      "value": "0xf8a54ce6feb08c0d0cf26b426b553a531afa5cfb609cea693ca520fef034ad60",
    },
  ]
}
```
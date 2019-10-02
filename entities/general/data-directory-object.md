Data Directory Object Entities
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

- [class](/classes/general/data-directory-object.md)
- Class Id : `1`
- [schema](/schemas/general/data-directory-object.md)
- Supported schema Id(s): `0`

## CreateEntity JSON-schema
```json
{
  "classId": <input>,
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
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "ContentId",
      "value": "0xf8a54ce6feb08c0d0cf26b426b553a531afa5cfb609cea693ca520fef034ad60",
    },
  ]
}
```

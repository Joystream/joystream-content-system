Data Directory Object - Class
=============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Properties](#properties)
    - [v0](#v0)
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`1`

## Explanation
Enforces all content to include an entry from the `dataDirectory`.

### Protection

In the current implementation, there are no restrictions as to what can be passed as values for an `entity` when populating the one property in this `class`.

## CreateClass JSON-schema
```json
{
  "name": "Data Directory Object",
  "description": "Points to a hex encoded ContentId in the data directory.",
}
```

## Properties
List of all properties available for this class, for each [schema](/schemas/general/data-directory-object.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules   |
|-------------------------|--------------------------------------------------|:------:|:-:|----------|
|`Object`                 |`Text`                                            | `true` | y |`cl,m,c`  |

## Entities

How to create new entities can be found [here](/entities/general/data-directory-object.md).

Data Directory Object - Class
=============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Properties](#properties)
    - [v1](#v1)
<!-- TOC END -->

## ClassID
NA

## Explanation
Enforces all content to include an entry from the Data Directory.

## CreateClass JSON-schema
```json
{
  "name": "Data Directory Object",
  "description": "Points to a hex encoded `contentId` in the `dataDirectory`.",
}
```

## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/general/data-directory-object.md).

### v1

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Object`                 |`Text`                                            | `true` | y |         |

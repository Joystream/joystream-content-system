Video Category - Class
========================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Properties](#properties)
    - [v0](#v0)
<!-- TOC END -->

## ClassID
`8`

## Explanation
General purpose categories, that can be used cross content.

### Protection

The concept of categories is protected, to avoid endless entities. If content creators could create a new `entity` in this `class`, one would expect `n` ways of defining a category such as technology:
- `tech`
- `Tech`
- `technology`
- `Technology`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md).

## CreateClass JSON-schema
```json
{
  "name": "Video category",
  "description": "Cross content type categories",
}
```
## Properties
List of all properties available for this class, for each [schema](/schemas/general/category.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules   |
|-------------------------|--------------------------------------------------|:------:|:-:|----------|
|`Category`               |`Text`                                            | `true` | y |`cl,m,c`  |

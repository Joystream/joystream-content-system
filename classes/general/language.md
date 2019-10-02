Language - Class
================

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
`2`

## Explanation
To enforce a specific standard of tagging languages for all content types. Schema `v0` could be restricted to just the two letter code, whereas future schemas could include subtags, (if the user opts for a subtag, eg. `en-US`, `en` should also be populated automagically), and additional properties such as `for hearing impaired`.

### Protection

The concept of language follows a strict standard. If content creators could create a new `entity` in this `class`, one would expect `n` ways of defining (British) English:
- `en`
- `en-BR`
- `eng`
- `english`
- `English`
- `british`
- `British`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders can/must instead choose from a list.

## CreateClass JSON-schema
```json
{
  "name": "Language",
  "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English.",
}
```

## Properties
List of all properties available for this class, for each [schema](/schemas/general/language.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules   |
|-------------------------|--------------------------------------------------|:------:|:-:|----------|
|`Language`               |`Text`                                            | `true` | y |`cl,m,c`  |

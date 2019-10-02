Podcast Category itunes Class
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
<!-- TOC END -->

## ClassID
`6`

## Explanation
Categories as defined for podcasts published in itunes.

### Protection

The concept of podcast categories follows a strict standard, namely the one used by itunes. If content creators could create a new `entity` in this `class`, one would expect `n` ways of defining a category such as a podcast about blockchain technology:
- `tech`
- `Tech`
- `technology`
- `Technology`
- `Blockchain tech`
- `Blockchain Technology`
- `Crypto`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders must instead follow the itunes standard, and select up to three categories from the current [itunes accepted categories](https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12)

## CreateClass JSON-schema
```json
{
  "name": "Podcast Category itunes",
  "description": "For podcasts only. Equivalent to <itunes:category> from an RSS feed. Up to three can be selected, see: https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12",
}
```
## Properties
List of all properties available for this class, for each [schema](/schemas/podcast/podcast-category-itunes.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules   |
|-------------------------|--------------------------------------------------|:------:|:-:|----------|
|`Podcast category`       |`Text`                                            | `true` | y |`cl,m,c`  |

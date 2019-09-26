Podcast Category itunes Class
=============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Properties](#properties)
    - [v0](#v0)
<!-- TOC END -->

## ClassID
NA

## Explanation
Categories as defined for podcasts published in itunes.

## CreateClass JSON-schema
```json
{
  "name": "Podcast Category itunes",
  "description": "For podcasts only. Equivalent to <itunes:category> from an RSS feed. Up to three can be selected, see: https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12",
}
```
## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/podcast/podcast-category-itunes.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Podcast category`       |`Text`                                            | `true` | y |         |

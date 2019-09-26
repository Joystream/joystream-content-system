Podcast Episode Class
=====================

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
Podcast episodes are entities tied to a specific [podcast](#podcast). These must follow the itunes standard for metadata.

## CreateClass JSON-schema
```json
{
  "name": "Podcast Episode",
  "description": "A single episode of a podcast",
}
```

## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/podcast/podcast-episode.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Title`                  |`Text`                                            | `true` | y |         |
|`Description`            |`Text`                                            | `true` | y |         |
|`Image`                  |`Text`                                            | `true` | y |         |
|`Language`               |[Internal](../general/language.md)                | `true` | y |         |
|`Object`                 |[Internal](../general/data-directory-object.md)   |   -    | y |         |
|`Author`                 |`Text`                                            |   -    | y |         |
|`Subtitle`               |`Text`                                            |   -    | y |         |
|`Season`                 |`Uint16`                                          |   -    | y |         |
|`Episode`                |`Uint16`                                          |   -    | y |         |
|`Subtitle`               |`Text`                                            |   -    | y |         |

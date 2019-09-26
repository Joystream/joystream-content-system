Channel Class
=============

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
Allows members to create channels under which they can publish content with specific ownership, set rules for contributors, and collect revenue.

## CreateClass JSON-schema
```json
{
  "name": "Channel",
  "description": "The channel under which content is published and grouped.",
}
```

## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/general/channel.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Channel name`           |`Text`                                            | `true` | y |         |
|`Description`            |`Text`                                            | `true` | y |         |
|`Image`                  |`Text`                                            | `true` | y |         |
|`Language`               |[Internal](../general/language.md)                | `true` | y |         |
|`Link`                   |`Text`                                            |   -    | y |         |
|`Owner name`             |`Text`                                            |   -    | y |         |
|`Owner email`            |`Text`                                            |   -    | y |         |
|`Contributors`           |`TextVec`                                         |   -    | y |         |
|`Revenue sink`           |`TextVec`                                         |   -    | y |         |
|`Explicit`               |`bool`                                            |   -    | y |         |
|`Subtitle`               |`Text`                                            |   -    | y |         |

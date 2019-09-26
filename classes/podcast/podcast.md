Podcast Class
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
Podcast entities are [episodic](#podcast-episodes) series that must follow the itunes standard for metadata.

## CreateClass JSON-schema
```json
{
  "name": "Podcast",
  "description": "A podcast is an episodic series of digital audio or video files which a user can download in order to listen.",
}
```

## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/podcast/podcast.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Title`                  |`Text`                                            | `true` | y |         |
|`Description`            |`Text`                                            | `true` | y |         |
|`Image`                  |`Text`                                            | `true` | y |         |
|`Language`               |[Internal](../general/language.md)                | `true` | y |         |
|`Podcast episodes`       |[InternalVec](podcast-episodes.md)                |   -    | y |         |
|`Link`                   |`Text`                                            |   -    | y |         |
|`Author`                 |`Text`                                            |   -    | y |         |
|`Owner name`             |`Text`                                            |   -    | y |         |
|`Owner email`            |`Text`                                            |   -    | y |         |
|`Subtitle`               |`Text`                                            |   -    | y |         |
|`Podcast category`       |[InternalVec](podcast-categories-itunes.md)       |   -    | y |         |
|`Explicit`               |`bool`                                            |   -    | y |         |
|`Subtitle`               |`Text`                                            |   -    | y |         |

Language Class
==============

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [Properties](#properties)
    - [v0](#v0)
<!-- TOC END -->

#### ClassID
NA

#### Explanation
To enforce a specific standard of tagging languages for all content types. Schema `v0` could be restricted to just the two letter code, whereas future schemas could include subtags, (if the user opts for a subtag, eg. `en-US`, `en` should also be populated automagically), and additional properties such as `for hearing impaired`.

#### CreateClass JSON-schema
```json
{
  "name": "Language",
  "description": "Language code following the ISO 639-1 two letter standard, eg. 'en' for English. Also allows subtags, eg 'en-US' for US english.",
}
```


## Properties
List of all properties available for this class, for each [schema](/joystream-content-system/schemas/general/language.md).

### v0

|     Property Name       | Property Type (links to internal class)          |Required|New|  Rules  |
|-------------------------|--------------------------------------------------|:------:|:-:|---------|
|`Language`               |`Text`                                            | `true` | y |         |

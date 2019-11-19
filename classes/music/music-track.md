Music Track - Class
=====================

Table of Contents
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [Properties](#properties)
    - [Rome](#rome)
<!-- TOC END -->

## ClassID
`NA`

## Explanation
To enforce a specific standard of tagging tracks for the `music` content type.

### Protection


## CreateClass JSON-schema
```json
{
  "name": "Music Track",
  "description": "A track is an individual song or instrumental recording."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/music/musicTrack0.json)                | `Rome`           | `yes`|

## Properties
### Rome

##### In Class index 0
```json
{
  "name": "Track Title",
  "description": "The title of the track",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

##### In Class index 1
```json
{
  "name": "Track Artist",
  "description": "The artist, composer, band or group that published the track.",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

##### In Class index 2
```json
{
  "name": "Track Thumbnail",
  "description": "URL to track cover art: NOTE: Should be an https link to a square image, between 1400x1400 and 3000x3000 pixels, in JPEG or PNG format.",
  "required": true,
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 3
```json
{
  "name": "About the Track",
  "description": "Information about the track.",
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 4
```json
{
  "name": "Language",
  "description": "The language of the lyrics in the track.",
  "type": "Internal",
  "classId": "Language"
}
```

##### In Class index 5
```json
{
  "name": "First Released",
  "description": "When the track was first released",
  "required": true,
  "type": "Int64"
}
```

##### In Class index 6
```json
{
  "name": "Genre",
  "description": "The genre of the track.",
  "type": "Internal",
  "classId": "Music Genre"
}
```

##### In Class index 7
```json
{
  "name": "Mood",
  "description": "The mood of the track.",
  "type": "Internal",
  "classId": "Music Mood"
}
```

##### In Class index 8
```json
{
  "name": "Theme",
  "description": "The theme of the track.",
  "type": "Internal",
  "classId": "Music Theme"
}
```

##### In Class index 9
```json
{
  "name": "Link",
  "description": "A link to the artist page.",
  "type": "TextVec",
  "maxItems": 5,
  "maxTextLength": 255
}
```

##### In Class index 10
```json
{
  "name": "Composer or songwriter",
  "description": "The composer(s) and/or songwriter(s) of the track.",
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 11
```json
{
  "name": "Lyrics",
  "description": "Link to the track lyrics.",
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 12
```json
{
  "name": "Object",
  "description": "The entityId of the object in the data directory.",
  "type": "Internal",
  "classId": "Media Object"
}
```

##### In Class index 13
```json
{
  "name": "Publication Status",
  "description": "The publication status of the album.",
  "required": true,
  "type": "Internal",
  "classId": "Publication Status"
}
```

##### In Class index 14
```json
{
  "name": "Curation Status",
  "description": "The publication status of the album set by the a content curator on the platform.",
  "type": "Internal",
  "classId": "Curation Status"
}
```

##### In Class index 15
```json
{
  "name": "License",
  "description": "The license of which the track is released under.",
  "required": true,
  "type": "Internal",
  "classId": "Content License"
}
```

##### In Class index 16
```json
{
  "name": "Attribution",
  "description": "If the License requires attribution, add this here.",
  "type": "Text",
  "maxTextLength": 255
}
```

<!--
## Entities
If applicable:
[Link](../../entities/general/name-of-class.md)
-->

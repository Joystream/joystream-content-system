Music Album - Class
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
To enforce a specific standard of tagging albums for the music content type.

### Protection


## CreateClass JSON-schema
```json
{
  "name": "Music Album",
  "description": "An album is a collection of tracks or audio recordings. Usually by a single artist or group."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/music/musicAlbum0.json)                | `Rome`           | `yes`|

## Properties
### Rome

##### In Class index 0
```json
{
  "name": "Album Title",
  "description": "The title of the album",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

##### In Class index 1
```json
{
  "name": "Album Artist",
  "description": "The artist, composer, band or group that published the album.",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

##### In Class index 2
```json
{
  "name": "Album Cover",
  "description": "URL to album cover art thumbnail: NOTE: Should be an https link to a square image, between 1400x1400 and 3000x3000 pixels, in JPEG or PNG format.",
  "required": true,
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 3
```json
{
  "name": "About the Album",
  "description": "Information about the album and artist.",
  "required": true,
  "type": "Text",
  "maxTextLength": 4000
}
```

##### In Class index 4
```json
{
  "name": "First Released",
  "description": "When the track was first released",
  "required": true,
  "type": "Int64"
}
```

##### In Class index 5
```json
{
  "name": "Genre",
  "description": "The genre(s) of the album.",
  "type": "InternalVec",
  "maxItems": 3,
  "classId": "Music Genre"
}
```

##### In Class index 6
```json
{
  "name": "Mood",
  "description": "The mood(s) of the album.",
  "type": "InternalVec",
  "maxItems": 3,
  "classId": "Music Mood"
    }
```

##### In Class index 7
```json
{
  "name": "Theme",
  "description": "The theme(s) of the album.",
  "type": "InternalVec",
  "maxItems": 3,
  "classId": "Music Theme"
}
```

##### In Class index 8
```json
{
  "name": "Tracks",
  "description": "The tracks of the album.",
  "type": "InternalVec",
  "maxItems": 100,
  "classId": "Music Track"
}
```

##### In Class index 9
```json
{
  "name": "Language",
  "description": "The language of the song lyrics in the album.",
  "required": false,
  "type": "InternalVec",
  "maxItems": 5,
  "classId": "Language"
}
```

##### In Class index 10
```json
{
  "name": "Link",
  "description": "Links to the artist or album site or social media pages.",
  "type": "TextVec",
  "maxItems": 5,
  "maxTextLength": 255
}
```

##### In Class index 11
```json
{
  "name": "Lyrics",
  "description": "Link to the album tracks lyrics.",
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 12
```json
{
  "name": "Composer or songwriter",
  "description": "The composer(s) and/or songwriter(s) of the album.",
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 13
```json
{
  "name": "Reviews",
  "description": "Links to reviews of the album.",
  "type": "TextVec",
  "maxItems": 5,
  "maxTextLength": 255
}
```

##### In Class index 14
```json
{
  "name": "Publication Status",
  "description": "The publication status of the album.",
  "required": true,
  "type": "Internal",
  "classId": "Publication Status"
}
```

##### In Class index 15
```json
{
  "name": "Curation Status",
  "description": "The publication status of the album set by the a content curator on the platform.",
  "type": "Internal",
  "classId": "Curation Status"
}
```

##### In Class index 16
```json
{
  "name": "Explicit",
  "description": "Indicates whether the track contains explicit material.",
  "required": true,
  "type": "Bool"
}
```

##### In Class index 17
```json
{
  "name": "License",
  "description": "The license of which the album is released under.",
  "required": true,
  "type": "Internal",
  "classId": "Content License"
}
```

##### In Class index 18
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

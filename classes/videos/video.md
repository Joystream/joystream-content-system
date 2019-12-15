Video - Class
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
To enforce a specific standard of tagging general videos for the `video` content type.

### Protection


## CreateClass JSON-schema
```json
{
  "name": "Video",
  "description": "Class for general videos not assignable to a more specific video content type."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/video/video0.json)                     | `Rome`           | `yes`|

## Properties
### Rome

##### In Class index 0
```json
{
  "name": "Title",
  "description": "The title of the video",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

##### In Class index 1
```json
{
  "name": "Video Thumbnail",
  "description": "URL to video thumbnail: NOTE: Should be an https link to an image of ratio 16:9, ideally 1280 pixels wide by 720 pixels tall, with a minimum width of 640 pixels, in JPEG or PNG format.",
  "required": true,
  "type": "Text",
  "maxTextLength": 255
}
```

##### In Class index 2
```json
{
  "name": "Description",
  "description": "Information about the video.",
  "required": true,
  "type": "Text",
  "maxTextLength": 4000
}
```

##### In Class index 3
```json
{
  "name": "Language",
  "description": "The main language used in the video.",
  "required": true,
  "type": "Internal",
  "classId": "Language"
}
```

##### In Class index 4
```json
{
  "name": "First Released",
  "description": "When the video was first released",
  "required": true,
  "type": "Int64"
}
```

##### In Class index 5
```json
{
  "name": "Category",
  "description": "The category of the video.",
  "type": "Internal",
  "classId": "Video Category"
}
```

##### In Class index 6
```json
{
  "name": "Link",
  "description": "A link to the creators page.",
  "type": "TextVec",
  "maxItems": 5,
  "maxTextLength": 255
}
```

##### In Class index 7
```json
{
  "name": "Object",
  "description": "The entityId of the object in the data directory.",
  "type": "Internal",
  "classId": "Media Object"
}
```

##### In Class index 8
```json
{
  "name": "Publication Status",
  "description": "The publication status of the video.",
  "required": true,
  "type": "Internal",
  "classId": "Publication Status"
}
```

##### In Class index 9
```json
{
  "name": "Curation Status",
  "description": "The publication status of the video set by the a content curator on the platform.",
  "type": "Internal",
  "classId": "Curation Status"
}
```

##### In Class index 10
```json
{
  "name": "Explicit",
  "description": "Indicates whether the video contains explicit material.",
  "required": true,
  "type": "Bool"
}
```

##### In Class index 11
```json
{
  "name": "License",
  "description": "The license of which the video is released under.",
  "required": true,
  "type": "Internal",
  "classId": "Content License"
}
```

##### In Class index 12
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

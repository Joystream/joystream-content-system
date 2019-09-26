Podcast JSON Schemas
====================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Classes](#classes)
  - [Main Class](#main-class)
  - [Internal Classes](#internal-classes)
- [Versions](#versions)
  - [v0 JSON](#v0-json)
- [Properties](#properties)
  - [v0](#v0)
    - [Title](#title)
    - [Description](#description)
    - [Image](#image)
    - [Language](#language)
  - [Possible Future Properties](#possible-future-properties)
<!-- TOC END -->

# Classes

## Main Class
- [podcast](/joystream-content-system/classes/podcast/podcast.md)

## Internal Classes
In order of appearance:
- [language](/joystream-content-system/classes/general/language.md)
- [podcast-category-itunes](/joystream-content-system/classes/podcast/podcast-category-itunes.md)

# Versions

## v0 JSON

```json
{
  "classId": 1,
  // Id of podcast class
  "newProperties": [
    {
      "name": "Title",
      "description": "The title of the podcast/channel/show. RSS: <channel><title>",
      "type": "Text",
      "required": true,
      "maxTextLength": 255
    },
    {
      "name": "Description",
      "description": "Description of the Podcast. Equivalent to <itunes:summary>. RSS: <channel><description> OR <channel><itunes:summary>",
      "required": true,
      "type": "Text",
      "maxTextLength": 4000
    },
	{
      "name": "Image",
      "description": "URL to podcast thumbnail: NOTE: Artwork must be a minimum size of 1400 x 1400 pixels and a maximum size of 3000 x 3000 pixels, in JPEG or PNG format, 72 dpi, with appropriate file extensions (.jpg, .png), and in the RGB colorspace. Equivalent to <itunes:image>. RSS: <channel><image><url> OR <channel><itunes:image>",
      "required": true,
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Language",
      "description": "The language specified for the podcast. RSS: <channel><language>",
      "required": true,
      "type": "Internal",
      "classId": 1,
      // Id of language class
    },
    {
      "name": "Podcast episodes",
      "description": "The episodes of the podcast",
      "type": "InternalVec",
      "maxItems": 2000,
      "classId": 1,
    },
    {
      "name": "Link",
      "description": "A link to a website or social media page for the podcast. RSS: <channel><link>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Author",
      "description": "The author of the podcast. Equivalent to <managingEditor> and <itunes:author>. RSS: <channel><managingEditor> OR <channel><itunes:author>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Owner name",
      "description": "The name of the owner of the podcast. Equivalent to <itunes:name>. RSS: <channel><itunes:owner><itunes:name>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Owner email",
      "description": "The contact email of the podcast owner. Equivalent to <itunes:email>. RSS: <channel><itunes:owner><itunes:email>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Subtitle",
      "description": "A short description of the podcast. Equivalent to <itunes:subtitle>. RSS: <channel><itunes:subtitle>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Podcast category",
      "description": "The categories as defined for podcasts published in itunes. RSS: <channel><itunes:category>",
      "type": "InternalVec",
      "maxItems": 3,
      "classId": 1,
    // Id of podcast-category-itunes class
    },
    {
      "name": "Explicit",
      "description": "Indicates whether your podcast contains explicit material. You can specify the following values:. RSS: <channel><itunes:explicit> ",
      "type": "Bool",
    },
    {
      "name": "Copyright",
      "description": "The copyright holder. RSS: <channel><copyright> ",
      "type": "Text",
      "maxTextLength": 255
    },
  ]
}
```

# Properties

## v0

### Title
```json
{
  "name": "Title",
  "description": "The title of the podcast/channel/show. RSS: <channel><title>",
  "type": "Text",
  "required": true,
  "maxTextLength": 255
}
```

### Description
```json
{
  "name": "Description",
  "description": "Description of the Podcast. Equivalent to <itunes:summary>. RSS: <channel><description> OR <channel><itunes:summary>",
  "required": true,
  "type": "Text",
  "maxTextLength": 4000
},
```

### Image
```json
{
  "name": "Image",
  "description": "URL to podcast thumbnail: NOTE: Artwork must be a minimum size of 1400 x 1400 pixels and a maximum size of 3000 x 3000 pixels, in JPEG or PNG format, 72 dpi, with appropriate file extensions (.jpg, .png), and in the RGB colorspace. Equivalent to <itunes:image>. RSS: <channel><image><url> OR <channel><itunes:image>",
  "required": true,
  "type": "Text",
  "maxTextLength": 255
},
```

### Language
```json
{
  "name": "Language",
  "description": "The language specified for the podcast. RSS: <channel><language>",
  "required": true,
  "type": "Internal",
  "classId": 1,
  // Id of language class
},
```
...

## Possible Future Properties

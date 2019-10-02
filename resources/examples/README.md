Table of Contents
=================

<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Examples](#examples)
  - [New content type - Podcast - Staked](#new-content-type---podcast---staked)
    - [Overview](#overview)
    - [Apple Podcasts](#apple-podcasts)
    - [Structure](#structure)
    - [Classes for improved structure](#classes-for-improved-structure)
  - [Creating classes](#creating-classes)
    - [Podcast Class](#podcast-class-1)
    - [Podcast Episode Class](#podcast-episode-class-1)
    - [Podcast Categories itunes](#podcast-categories-itunes-1)
    - [Summary](#summary)
  - [Creating schemas](#creating-schemas)
    - [Podcast class schema](#podcast-class-schema)
    - [Podcast episode class schema](#podcast-episode-class-schema)
    - [Podcast Categories itunes class schema](#podcast-categories-itunes-class-schema)
  - [Creating Entities](#creating-entities)
    - [Podcast categories itunes entities](#podcast-categories-itunes-entities)
    - [Staked Podcast entity](#staked-podcast-entity)
    - [Staked episode object entity](#staked-episode-object-entity)
    - [Staked episode entity](#staked-episode-entity)
    - [Updating Staked Podcast entity](#updating-staked-podcast-entity)
  - [Conclusion](#conclusion)
<!-- TOC END -->

# Examples

In the examples below, **bold** means a specific instance of a `class`, `schema`, `property` or `entity`.

## New content type - Podcast - Staked

In this example we are going to create a new content type - Podcast, then publish and episode of the Staked on the platform.

### Overview

We assume the following already exists in the Joystream Content System:

- Classes
  - [data-directory-object](/classes/general/data-directory-object.md)
  - [language](/classes/general/language.md)
- Schemas
  - [data-directory-object](/schemas/general/data-directory-object.md)
  - [language](/schemas/general/language.md)
- Entities
  - [language](/entities/general/language.md)

Like in the actual implementation, we will try and create this content type in such a way that we can, with relatively low friction, take an RSS feed of a Podcast that's valid for publication in itunes, and add it the Joystream Content System without losing much of the metadata.

Unlike something like a movie, Podcasts are typically episodic series of audio or video content, sometimes meant to be consumed in a specific order.

### Apple Podcasts

If you are familiar with Podcasts, you will know that there are a vast number of players and publication channels available to find, download or play this across all kinds of devices. Most of these services however, either get their podcasts from the itunes store, or at the very least, they are compatible with [Apple Podcast's Podcast Connect](https://podcastsconnect.apple.com), and thus mostly share the same structure and metadata:

- Podcasts Connect accepts RSS 2.0 tags as well as some additional tags specific to the iTunes Store.
- In order to listen to a specific episode, you will typically have to find the Podcast first, then locate the episode you want to play.

#### RSS

There are many guides on how to understand and create a valid RSS feed for Apples Podcasts Connect. One can be found [here](https://github.com/simplepie/simplepie-ng/wiki/Spec:-iTunes-Podcast-RSS).

Although there are no requirements to use a publishing platform, and you can create and host everything yourself from scratch, most will choose to publish and host their Podcast using some service provider. With one of these, you can create a new Podcast in a user friendly environment that validates your content, artwork, and prompts you to fill in the necessary information required to create a valid RSS, and get your podcast available across a wide range of publishers. Staked is published using [libsyn](https://libsyn.com/), which created [this RSS](https://staked.libsyn.com/rss).

### Structure

For these reasons, we will choose to use most of the RSS 2.0 tags supported by itunes, and little else for now. With this, and the design of the Joystream Content System in mind, we will structure the content type that is Podcast the following way:

#### Podcast Class

An `entity` in this **Podcast** `class` will represent a channel under which Podcast episodes are published. Most tags under `<channel>` will be supported by properties for this `class`.

We will support the properties below, where all except the ones denoted by `*` are tags from itunes:

- Title
- Description
- Image
- Language
- Podcast episode `*`
- Link
- Author
- Owner name
- Owner email
- Subtitle
- Podcast category
- Explicit
- Copyright

#### Podcast Episode Class

We see that we have introduced one property, that is not a tag in the RSS feed. Podcast episode are roughly equivalent to the data under each `<item>` in the feed. As a Podcast will typically contain more than a single episode, each with its own metadata, and most likely have new episodes added over time, we must find a way to represent this in the Joystream Content System. We do this by adding a new `class`, called which we call **Podcast episode**.

An `entity` in this `class` will represent a single episode of the Podcast. Most tags under `<item>` will be supported by properties for this `class`.

We will support the properties below, where all except the ones denoted by `*` are tags from itunes:

- Title
- Description
- Image
- Language
- Object `*`
- Author
- Subtitle
- Season
- Episode
- Explicit

#### Data Directory Object Class

We see that we have introduced one `property`, that is not a tag in the RSS feed. "Object" are roughly equivalent to `url`, found under the `<item><enclosure>` tag in the feed. In the Joystream Content System, we want this to point one (or more) object(s) in the data directory.

An `entity` in this `class` will represent an object in the data directory. This requires a new `class`, which we already assume is present in the system. More information about this can be found under the [data-directory-object](/classes/general/data-directory-object.md) `class`.

### Classes for improved structure

Most of the properties in the [Podcast Class](#podcast-class) and [Podcast Episode Class](#podcast-episode-class) are convenient to populate as unique strings, numbers, or booleans, filled out by the publisher.

There are however some values that should be protected and structured in a specific way to improve the user experience for both publishers and consumers.

#### Language Class

The language tags in the RSS feed (under both `<channel>` and `<item>`) supports a limited set of entries, based on the ISO 639-1 standard. Additionally, the concept of language applies to most types of content one could expect to be supported in the future, and should thus follow a specific standard. This requires a new `class`, which we already assume is present in the system. More information about this can be found under the [language](/classes/general/language.md) `class`.

An `entity` in this `class` will represent a single language. If publishers were asked to produce these themselves, one would expect `n` ways of defining (British) English:
- `en`
- `en-BR`
- `eng`
- `english`
- `English`
- `british`
- `British`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders can/must instead choose from this [list](/entities/general/language.md#entities).

#### Podcast Categories itunes

Apple Connect only allows these categories to be set at at the `<channel>` level, equivalent to the Podcast `class`. An `entity` in this `class` will represent a category from the current set of [itunes accepted categories](https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12). If content creators were asked to produce these themselves, one would expect `n` ways of defining Technology (not to mention more specific subcategories):

- `tech`
- `Tech`
- `technology`
- `Technology`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders must instead follow the itunes standard, and select up to three categories for their podcast.

This class will only support a single `property`:

- Podcast category

## Creating classes

We have assumed we already have classes present in the system:
- [data-directory-object](/classes/general/data-directory-object.md)
  - ClassId = 1
- [language](/classes/general/language.md)
  - ClassId = 2

### Podcast Class

First of all, we are going to create the new **Podcast** `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast",
  "description": "A podcast is an episodic series of digital audio or video files which a user can download in order to listen.",
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `4`.

### Podcast Episode Class

The next `class` we are going to create is the **Podcast episode** `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast Episode",
  "description": "A single episode of a podcast",
}
```
...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `5`.

### Podcast Categories itunes

The next `class` we are going to create is the **Podcast Categories itunes** `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast Category itunes",
  "description": "For podcasts only. Equivalent to <itunes:category> from an RSS feed. Up to three can be selected, see: https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12",
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `6`.

### Summary

We now have 5 classes.
- [data-directory-object](/classes/general/data-directory-object.md)
  - ClassId = 1
- [language](/classes/general/language.md)
  - ClassId = 2
- [podcast](/classes/podcast/podcast.md)
  - ClassId = 4
- [podcast-episode](/classes/podcast/podcast-episode.md)
  - ClassId = 5
- [podcast-category-itunes](/classes/podcast/podcast-category-itunes.md)
  - ClassId = 6

Next, we are going to create a new `schema` for each `class`

## Creating schemas

We have assumed we already have the following schemas present in the system:
- [data-directory-object](/schemas/general/data-directory-object.md)
- [language](/schemas/general/language.md)

A new `schema` will need to do the following:
- Refer to a specific `class` by its `classId`
- Name the existing (if any) `properties` in the `class` we want to support (if any)
- Add the new `properties` (if any) we want to support. This means:
  - Setting a new, unique, "name" of the `property`.
  - Adding a "description", that should explain what this is
  - Deciding whether it should be `required` that a new `entity` populates this `property`
  - Choosing the "type" of `property`
  - Depending on the "type", setting further limitations.

### Podcast class schema

We are now ready to create the first instance of a `schema`, that allows to define a specific way of presenting and `entity` belonging to the **Podcast** `class`.

As we specified earlier, we want to add the following new properties to this `class`:
- Title
- Description
- Image
- Language
- Podcast episode
- Link
- Author
- Owner name
- Owner email
- Subtitle
- Podcast category
- Explicit
- Copyright

We create the following JSON...

```json
{
  "classId": 4,
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
      "classId": 2,
      // Id of language class
    },
    {
      "name": "Podcast episodes",
      "description": "The episodes of the podcast",
      "type": "InternalVec",
      "maxItems": 2000,
      "classId": 5,
      // Id of podcast-episode class
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
      "classId": 6,
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
...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/AddClassSchema.schema.json).

As this is the first `schema` of this `class`, it will return `schemaId`=`0`

### Podcast episode class schema

We are now ready to create the `schema` that allows to define a specific way of presenting and `entity` belonging to the **Podcast episode** `class`.

As we specified earlier, we want to add the following new properties to this `class`:
- Title
- Description
- Image
- Language
- Object
- Author
- Subtitle
- Season
- Episode
- Explicit

```json
{
  "classId": 5,
  // Id of podcast episode class
  "newProperties": [
    {
      "name": "Title",
      "description": "The title of the episode. RSS: <item><title>",
      "type": "Text",
      "required": true,
      "maxTextLength": 255
    },
    {
      "name": "Description",
      "description": "Description of the episode. Equivalent to <itunes:summary>. RSS: <item><description> OR <item><itunes:summary>",
      "required": true,
      "type": "Text",
      "maxTextLength": 4000
    },
	  {
      "name": "Image",
      "description": "URL to show thumbnail: NOTE: Artwork must be a minimum size of 1400 x 1400 pixels and a maximum size of 3000 x 3000 pixels, in JPEG or PNG format, 72 dpi, with appropriate file extensions (.jpg, .png), and in the RGB colorspace. Equivalent to <itunes:image>. RSS: <item><image><url> OR <item><itunes:image>",
      "required": true,
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Language",
      "description": "The language specified for the podcast. RSS: <item><language>",
      "required": true,
      "type": "Internal",
      "classId": 2,
      // Id of language class
    },
    {
      "name": "Object",
      "description": "The ContentId of the file content file uploaded to the dataDirectory",
      "type": "Internal",
      "classId": 1,
      // Id of data-directory-object class
    },
    {
      "name": "Author",
      "description": "The author of the episode. Equivalent to <managingEditor> and <itunes:author>. RSS: <item><managingEditor> OR <item><itunes:author>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Subtitle",
      "description": "A short description of the episode. Equivalent to <itunes:subtitle>. RSS: <item><itunes:subtitle>",
      "type": "Text",
      "maxTextLength": 255
    },
    {
      "name": "Season",
      "description": "The season of the Podcast which the episode belongs to.  RSS: <item><itunes:season>",
      "type": "Uint16",
    },
    {
      "name": "Episode",
      "description": "The episode number. RSS: <item><itunes:episode>",
      "type": "Uint16",
    },
    {
      "name": "Explicit",
      "description": "Indicates whether the episode contains explicit material. You can specify the following values:. RSS: <item><itunes:explicit> ",
      "type": "Bool",
    },
  ]
}
```
...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/AddClassSchema.schema.json).

As this is the first `schema` of this `class`, it will return `schemaId`=`0`.

### Podcast Categories itunes class schema

We are now ready to create the `schema` that allows to define a specific way of presenting and `entity` belonging to the **Podcast categories itunes** `class`.

As we specified earlier, we want to add the following new properties to this class:
- Title
- Description
- Image
- Language
- Object
- Author
- Subtitle
- Season
- Episode
- Explicit

```json
{
  "classId": 6,
  // Id of podcast-category-itunes class
  "newProperties": [
    {
      "name": "Podcast category",
      "description": "Categories as defined for podcasts published in itunes. RSS: <channel><itunes:category>",
      "type": "Text",
      "required": true,
      "maxTextLength": 255
    },
  ]
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/AddClassSchema.schema.json).

As this is the first `schema` of this `class`, it will return `schemaId`=`0`.

## Creating Entities

Now that we have defined all the `classes` and `schemas` we need, we are ready to create `entities`.

An `entity` represents a singular existence of a particular `class`. When creating a new `entity`, one chooses a `schema` that supports the `properties` one wants to populate. Typically, one would choose the most recent `schema`, but the publisher can choose an older version as long as that is (still) supported.

We will assume these `entities` **Language** `entities`

### Podcast categories itunes entities

As seen [here](/entities/podcast/podcast-category-itunes.md), there are currently 110 different categories supported in itunes.

```json
{
  "classId": 6,
  // Id of podcast-category-itunes class
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/CreateEntity.schema.json).

This will return 110 new `entityId`s which we will assume is `1001-1110`.

We now create a JSON that ties the `entity` to a specific `schema` (ie. v0), and populate the `properties` we want to.
As the Staked podcast is categorized as Technology (`entityId`=`1103`) in the RSS feed, we will for this example only concern ourselves with this. We create a new JSON:

```json
{
  "entityId": 1103,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "Podcast category",
      "value": "Technology",
    },
  ]
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/AddSchemaSupportToEntity.schema.json).

### Staked Podcast entity

Now, we want to create the Staked podcast. This is an `entity` belonging to the **Podcast** `class`.

First, we create the `entity`, and link to the `class` we want to (ie. **Podcast**), with the following JSON:

```json
{
  "classId": 4,
  // Id of podcast class
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/CreateEntity.schema.json).

This will return a new `entityId` which we will assume is `1337`. We now create a JSON that ties the `entity` to a specific `schema` (ie. v0), and populate the `properties` we want to.

```json
{
  "entityId": 1337,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "Title",
      "value": "Staked",
    },
    {
      "name": "Description",
      "value": "Exploring crypto and blockchain governance.",
    },
    {
      "name": "Image",
      "value": "https://ssl-static.libsyn.com/p/assets/2/d/2/5/2d25eb5fa72739f7/iTunes_Cover.png",
    },
    {
      "name": "Language",
      "value": 43
    },
  //{
  //  "name": "Podcast episodes",
  //  "value": 0
  //},
    {
      "name": "Link",
      "value": "https://twitter.com/staked_podcast"
    },
    {
      "name": "Author",
      "value": "Staked"
    },
    {
      "name": "Owner name",
      "value": "Martin Wessel-Berg"
    },
    {
      "name": "Owner email",
      "value": "staked@jsgenesis.com"
    },
    {
      "name": "Subtitle",
      "value": "Exploring crypto and blockchain governance."
    },
    {
      "name": "Podcast category",
      "value": [103]
    },
    {
      "name": "Explicit",
      "value": false
    },
  ]
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/AddSchemaSupportToEntity.schema.json).

Note that the "Podcast episode" `property` is commented out. This is done so that we can create the Staked podcast without actually having added any of the episodes.

### Staked episode object entity

Now that we have created the Staked podcast, we would want to create the entities for the Staked episode(s). In order to save some time, we opt to first create the objects in the `dataDirectory`. We create a new JSON:

```json
{
  "classId": 1,
  // Id of data-directoy-object class
}
```

After validation, this will return a new `entityId` which we will assume is `1338`.

After the upload, the file would be given a `contentId`. From the chain state, we find that the first episode of Staked has `contentId=0xf8a54ce6feb08c0d0cf26b426b553a531afa5cfb609cea693ca520fef034ad60`

```json
{
  "entityId": 1338,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "ContentId",
      "value": "0xf8a54ce6feb08c0d0cf26b426b553a531afa5cfb609cea693ca520fef034ad60",
    },
  ]
}
```

We have now created a new `entity`, assigned to the **Data directory object** `class`, and pointed it to the item in the dataDirectory.

### Staked episode entity



```json
{
  "classId": 5,
  // Id of podcast-episode class
}
```

After validation, this will return a new `entityId` which we will assume is `1339`.

```json
{
  "entityId": 1339,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "Title",
      "value": "Staked",
    },
    {
      "name": "Description",
      "value": "Staked is a new podcast exploring crypto and blockchain governance.",
    },
    {
      "name": "Image",
      "value": "https://ssl-static.libsyn.com/p/assets/2/d/2/5/2d25eb5fa72739f7/iTunes_Cover.png",
    },
    {
      "name": "Language",
      "value": 43
    },
    {
      "name": "Object",
      "value": 1338
    },
    {
      "name": "Author",
      "value": "Staked"
    },
    {
      "name": "Subtitle",
      "value": "First episode of Staked - presented by Joystream"
    },
    {
      "name": "Season",
      "value": 1
    },
    {
      "name": "Episode",
      "value": 1
    },
    {
      "name": "Explicit",
      "value": false
    },
  ]
}
```

We have now created a new `entity`, assigned to the **Podcast episode** `class`, and populated a variety of properties.

### Updating Staked Podcast entity

As we now have an episode of the Staked podcast, we need to update this `entity`. We create a JSON to link the new `entity` of the **Podcast episode** `class` to the existing `entity` of the **Podcast** `class`:

```json
{
  "entityId": 1337,
     "newPropertyValues": [
	  {  
  	  "name": "Podcast episodes",
  	  "value": [1339]
  	},
  ]
}
```
...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/resources/schema-standards/UpdateEntityProperties.schema.json).


## Conclusion

...

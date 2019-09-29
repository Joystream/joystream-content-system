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
    - [Summary](#summary)
  - [Creating schemas](#creating-schemas)
    - [Podcast Class](#podcast-class-2)
<!-- TOC END -->

# Examples

## New content type - Podcast - Staked

In this example we are going to create a new content type - `Podcast`, then publish and episode of the `Staked` on the platform.

### Overview

We assume the following already exists in the Joystream Content System:

- Classes
  - [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)
  - [language](/joystream-content-system/classes/general/language.md)
- Schemas
  - [data-directory-object](/joystream-content-system/schemas/general/data-directory-object.md)
  - [language](/joystream-content-system/schemas/general/language.md)
- Entities
  - [data-directory-object](/joystream-content-system/entities/general/data-directory-object.md)
  - [language](/joystream-content-system/entities/general/language.md)

Like in the actual implementation, we will try and create this content type in such a way that we can, with relatively low friction, take an rss feed of a Podcast that's valid for publication in itunes, and add it the Joystream Content System without losing much of the metadata.

Unlike something like a movie, Podcasts are typically episodic series of audio or video content, sometimes meant to be consumed in a specific order.

### Apple Podcasts

If you are familiar with Podcasts, you will know that there are a vast number of players and publication channels available to find, download or play this across all kinds of devices. Most of these services however, either get their podcasts from the itunes store, or at the very least, they are compatible with [Apple Podcast's Podcast Connect](https://podcastsconnect.apple.com), and thus mostly share the same structure and metadata:

- Podcasts Connect accepts RSS 2.0 tags as well as some additional tags specific to the iTunes Store.
- In order to listen to a specific episode, you will typically have to find the Podcast first, then locate the episode you want to play.

#### RSS

There are many guides on how to understand and create a valid RSS feed for Apples Podcasts Connect. One can be found [here](https://github.com/simplepie/simplepie-ng/wiki/Spec:-iTunes-Podcast-RSS).

Although there are no requirements to use a publishing platform, and you can create and host everything yourself from scratch, most will choose to publish and host their Podcast using some service provider. With one of these, you can create a new Podcast in a user friendly environment that validates your content, artwork, and prompts you to fill in the necessary information required to create a valid RSS, and get your podcast available across a wide range of publishers. Staked is published using [libsyn](https://libsyn.com/), which created [this RSS](https://staked.libsyn.com/rss).

### Structure

For these reasons, we will choose to use most of the RSS 2.0 tags supported by itunes, and little else for now. With this, and the design of the Joystream Content System in mind, we will structure the content type that is `Podcast` the following way:

#### Podcast Class
An `entity` in this `class` will represent a channel under which Podcast episodes are published. Most tags under `<channel>` will be supported by properties for this `class`.

We will support the properties below, where all except the ones denoted by `*` are tags from itunes:

- Title
- Description
- Image
- Language
- Podcast episodes `*`
- Link
- Author
- Owner name
- Owner email
- Subtitle
- Podcast category
- Explicit

#### Podcast Episode Class

We see that we have introduced one property, that is not a tag in the RSS feed. "Podcast episodes" are roughly equivalent to the data under each `<item>` in the feed. As a Podcast will typically contain more than a single episode, each with its own metadata, and most likely have new episodes added over time, we must find a way to represent this in the Joystream Content System. We do this by adding a new `class`, called which we call `Podcast Episode`.

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

We see that we have introduced one property, that is not a tag in the RSS feed. "Object" are roughly equivalent to `<enclosure>` `url` in the feed. In the Joystream Content System, we want this to point one (or more) object(s) in the data directory.

An `entity` in this `class` will represent an object in the data directory. This requires a new `class`, which we already assume is present in the system. More information about this can be found under the [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md) class.

### Classes for improved structure

Most of the properties in the [Podcast Class](#podcast-class) and [Podcast Episode Class](#podcast-episode-class) are best populated as unique strings, numbers, or booleans. There are however some values that should be protected and structured in a specific way to improve the user experience for both creators and consumers.

#### Language Class

The language tags in the RSS feed (under both `<channel>` and `<item>`) supports a limited set of entries, based on the ISO 639-1 standard. Additionally, the concept of language applies to most types of content one could expect to be supported in the future, and should thus follow a specific standard. This requires a new `class`, which we already assume is present in the system. More information about this can be found under the [language](/joystream-content-system/classes/general/language.md) class.

An `entity` in this `class` will represent a single language. If content creators were asked to produce these themselves, one would expect `n` ways of defining (British) English:
- `en`
- `en-BR`
- `eng`
- `english`
- `English`
- `british`
- `British`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders can/must instead choose from a list. More information about this can be found under the [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md) class.

#### Podcast Categories itunes
Apple Connect only allows these categories to be set at at the `<channel>` level, equivalent to the Podcast `class`. An `entity` in this `class` will represent a category from the current set of [itunes accepted categories](https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12). If content creators were asked to produce these themselves, one would expect `n` ways of defining Technology (not to mention more specific subcategories):

- `tech`
- `Tech`
- `technology`
- `Technology`
- ...

This would make discovery more difficult, and would lead to thousands of entities. To avoid this, the creation of a new `entity` will require special [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md). Uploaders must instead follow the itunes standard, and select up to three categories for their podcast.

## Creating classes

We have assumed we already have classes present in the system:
- [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)
  - ClassId = 1
- [language](/joystream-content-system/classes/general/language.md)
  - ClassId = 2

### Podcast Class

First of all, we are going to create the new Podcast `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast",
  "description": "A podcast is an episodic series of digital audio or video files which a user can download in order to listen.",
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/joystream-content-system/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `4`.

### Podcast Episode Class

The next `class` we are going to create is the Podcast Episode `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast Episode",
  "description": "A single episode of a podcast",
}
```
...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/joystream-content-system/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `5`.

#### Podcast Categories itunes

The next `class` we are going to create is the Podcast Categories itunes `class`. Using the tools in [this repo](https://github.com/Joystream/versioned-store-js), we can follow the [JSON schema standard](https://json-schema.org/). We create the following JSON...

```json
{
  "name": "Podcast Category itunes",
  "description": "For podcasts only. Equivalent to <itunes:category> from an RSS feed. Up to three can be selected, see: https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12",
}
```

...and validate it [here](https://www.jsonschemavalidator.net/) against this [JSON schema](/joystream-content-system/resources/schema-standards/CreateClass.schema.json). We can see that it validates. Assuming we have the required [permissions](link), we can then create an extrinsic and broadcast it, creating the new class. It will return a new `ClassId`, which we will assume is `6`.

### Summary

We now have 5 classes.
- [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)
  - ClassId = 1
- [language](/joystream-content-system/classes/general/language.md)
  - ClassId = 2
- [podcast](/joystream-content-system/classes/podcast/podcast.md)
  - ClassId = 4
- [podcast-episode](/joystream-content-system/classes/podcast/podcast-episode.md)
  - ClassId = 5
- [podcast-category-itunes](/joystream-content-system/classes/podcast/podcast-category-itunes.md)
  - ClassId = 6

Next, we are going to create a new `schema` for each `class`

## Creating schemas

We have assumed we already have the following schemas present in the system:
- [data-directory-object](/joystream-content-system/schemas/general/data-directory-object.md)
- [language](/joystream-content-system/schemas/general/language.md)

### Podcast Class


We are going to create a new Podcast, "Staked", and add the first two episodes to it.


---
When adding a new Podcast, and uploading some episodes, we first assume the following exists in the Joystream Content System:

- Classes
  - [data-directory-object](/joystream-content-system/classes/general/data-directory-object.md)
  - [language](/joystream-content-system/classes/general/language.md)
  - [podcast](/joystream-content-system/classes/podcast/podcast.md)
  - [podcast-episode](/joystream-content-system/classes/podcast/podcast-episode.md)
  - [podcast-category-itunes](/joystream-content-system/classes/podcast/podcast-category-itunes.md)
- Schemas
  - [data-directory-object](/joystream-content-system/schemas/general/data-directory-object.md)
  - [language](/joystream-content-system/schemas/general/language.md)
  - [podcast](/joystream-content-system/schemas/podcast/podcast.md)
  - [podcast-episode](/joystream-content-system/schemas/podcast/podcast-episode.md)
  - [podcast-category-itunes](/joystream-content-system/schemas/podcast/podcast-category-itunes.md)
- Entities
  - [data-directory-object](/joystream-content-system/entities/general/data-directory-object.md)
  - [language](/joystream-content-system/entities/general/language.md)
  - [podcast-category-itunes](/joystream-content-system/entities/podcast/podcast-category-itunes.md)  

---

First of all, we must create a new `class` for `Podcast`. This is done by

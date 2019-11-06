Table of Contents
=================

<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Overview](#overview)
- [Concepts](#concepts)
  - [Classes](#classes)
  - [Schemas](#schemas)
  - [Properties](#properties)
    - [Property Types](#property-types)
  - [Entities](#entities)
  - [Permissions](#permissions)
- [Overview of Classes](#overview-of-classes)
    - [General](#general)
  - [Type Specific](#type-specific)
    - [Books](#books)
    - [Music](#music)
    - [Videos](#videos)
<!-- TOC END -->

# Overview

This repo contains information and resources for using the Joystream content system.

The design centers around two key concepts, [classes](#classes) and [entities](#entities). A `Class` represents a type of `entity` family, and it may have sequence of [schemas](#schemas) associated with it, which defines different ways an entity of the given class may be encoded. A schema can express familiar constraints around what [properties](#properties) an entity must have in order to submit to the schema. A property is defined by some data type requirements, whether it is optional or not, and some metadata. There are a variety of [property types](#property-types). Importantly, one special data type is called the `Internal` (or `InternalVec`), which requires an identifier for some entity of a class defined int he store. This is how data is linked. An entity should be understood as some persistent instance of a class that may exist in one or more different versions simultaneously.

These concepts are explained in more details below, and the [resources](resources) section contains further documentation, workflow and examples.

# Concepts

## Classes
A `Class` represents a "concept" that we wish to model in the database. There can be many instances of a class, called [entities](#entities). A class is part of a class group. This group is for partitioning purposes. Classes in a group do not necessarily share a common theme or trait.

When a new `Class` is created, it contains no information besides a "name" and "description". Once added to the [versioned store](https://github.com/Joystream/substrate-versioned-store-module), it returns a unique global identifier in the database, known as the `classId`. This identifier is an integer, counting from `1`. For practical purposes, one should try avoiding duplicating the class "Name", but this is not enforced on the protocol level. Only the `Content Curator Group Lead` can create new classes.

Think: "Planet"

## Schemas
A `Schema` is a particular way a class can be represented, as an ordered collection of [properties](#properties).
A schema is immutable, in the sense that once a schema has been created for a specific class, this can not be removed or changed. To allow adding new ways to represent a class, multiple versions of schemas can be created for a class. A specific schema is semantically versioned and can only be associated with a single class.

When the first schema of a class is added to the [versioned store](https://github.com/Joystream/substrate-versioned-store-module), it returns an identifier in the database, known as the `schemaId`. Unlike the `classId`, this is not global, but coupled with the class it belongs to. It is an integer, counting from `0`. This first schema must introduce at least one property to its class, and that property will get assigned both and `in_class_index`, and an `in_schema_index`. Later schema versions can choose which (if any) of the existing `in_class_index` properties it includes, but must also add at least one new property.

## Properties
A `Property` is a concept that can be assigned to a class through a schema, as described above. As a minimum, it contains the following information:
- "name"
- "description"
- "type"
- "required" (note that this does not need to be specified explicitly, but will default to `false`.)

A new property must have a unique "name" in its class, but a different classes can have a property with the same name.
Again, once added to a class via a schema, the property will get assigned an immutable `in_class_index`. As new schemas can choose which (if any) of the old properties to support, the property might have a different `in_schema_index` than in past and future schema versions.

Properties have different `property types` depending on the `property value(s)` one wants to assign the [entities](#entities) in the class. These are:

Think: Planet.v0 ["Mass", "Distance From Sun", "Number Of Moons"]

### Property Types

The table below shows an overview of the `property types` available in the versioned store. For more information about these types, limitations and use cases, go [here](/resources/README.md#property-types).

| Property Type | Description                                     | Additional Input Required  |
|---------------|-------------------------------------------------|----------------------------|
| Text          | String of characters                            | `maxTextLength`            |
| TextVec       | Array of strings                                | `maxItems`,`maxTextLength` |
| Bool          | Boolean (eg. `true` or `false`)                 | -                          |
| BoolVec       | Array of Booleans                               | `maxItems`                 |
| Internal      | Allows reference to entities in another class   | `classId`                  |
| InternalVec   | Array of reference to entities in another class | `classId`,`maxItems`       |
| Uint16        | 16-bit unsigned integer                         | -                          |
| Uint32        | 32-bit unsigned integer                         | -                          |
| Uint64        | 64-bit unsigned integer                         | -                          |
| Int16         | 16-bit signed integer                           | -                          |
| Int32         | 32-bit signed integer                           | -                          |
| Int64         | 64-bit signed integer                           | -                          |
| Uint16Vec     | Array of 16-bit unsigned integer                | `maxItems`                 |
| Uint32Vec     | Array of 32-bit unsigned integer                | `maxItems`                 |
| Uint64Vec     | Array of 64-bit unsigned integer                | `maxItems`                 |
| Int16Vec      | Array of 16-bit signed integer                  | `maxItems`                 |
| Int32Vec      | Array of 32-bit signed integer                  | `maxItems`                 |
| Int64Vec      | Array of 64-bit signed integer                  | `maxItems`                 |
| External      | Reference outside of the Versioned Store        | NA                         |

## Entities

An `Entity` represents a singular existence of a particular Class, but does not itself hold any data.

When a new `Entity` is created, it contains no information. Once added to the [versioned store](https://github.com/Joystream/substrate-versioned-store-module), it returns a unique global identifier in the database, known as the `enitityId`. This identifier is an integer, counting from `1`. Despite having a global identity, it is still associated with a single `classId`.

As the entity itself holds no data, one has to add schema support to it, and assign values to the properties available in the `in_schema_index`. These values must be in line with the property type, and its restrictions. If the property is "required", it must be populated. Properties in the `in_schema_index` that is not given a value will by default be given a `null` value. Note that properties properties that exists in the class (`in_class_index`), but not in the schema (`in_schema_index`) can not be populated. An entity can exist in multiple schemas simultaneously, but can not contain different values across `in_class_index` properties. Unlike a classes, schemas and properties, and entity can be updated, and be assigned new values.

## Permissions

The "Write" and "Read" column for each `Class` should be understood as follows:
- Write indicates the [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md) required to create and update new `entities` in this `Class`.
- Read indicates the [permissions](https://github.com/Joystream/joystream/blob/master/testnets/rome/specification/runtime/versioned-store-permissions.md) required to reference an [Internal](-) `entity`, or [InternalVec](-) `entities` in this `Class` (if a [property](-) of this this [property type](-) exists.)
  - `r` means `Root` only (ie. `Sudo` or `Council` vote)
  - `cg` means `Content Curator Lead`, and any group(s) (of `Content Curator`) that the Lead assigns permissions.
  - `co` means the `Channel Owners` (ie. the `Member` that owns the channel that created the `entity`)
  - `cc` means all `Content Creators`

# Overview of Classes

The tables below contains an overview of all classes available in the Joystream Content System. Click the name of the name of the class for a more verbose explanation.

### General

This table contains all classes to be used for general purposes.

|     Name and Information                                        |ClassId|Valid Schemas| Write | Read  |
|-----------------------------------------------------------------|:-----:|-------------|:-----:|:-----:|
|[Media Object](classes/general/media-object.md)                  | `NA`  |    `v0`     | `cc`  | `cc`  |
|[Language](classes/general/language.md)                          | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Year](classes/general/year.md)                                  | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Month](classes/general/month.md)                                | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Date](classes/general/date.md)                                  | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Content License](classes/general/content-license.md)            | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Publication Status](classes/general/publication-status.md)      | `NA`  |    `v0`     | `cg`  | `co`  |
|[Curation Status](classes/general/curation-status.md)            | `NA`  |    `v0`     | `cg`  | `NA`  |
|[Featured Content](classes/general/featured-content.md)          | `NA`  |    `v0`     | `cg`  | `NA`  |

## Type Specific

### Books
This table contains all classes to be used for specifically for books.

|     Name and Information                                        |ClassId|Valid Schemas| Write | Read  |
|-----------------------------------------------------------------|:-----:|-------------|:-----:|:-----:|
|[Book](classes/books/book.md)                                    | `NA`  |    `v0`     | `cg`  | `NA`  |
|[Book Category](classes/books/book-category.md)                  | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Book Item](classes/books/book-item.md)                          | `NA`  |    `v0`     | `co`  | `co`  |
|[Book Item Entry](classes/books/book-item-entry.md)              | `NA`  |    `v0`     | `co`  | `co`  |
|[Book Entry Format](classes/books/book-entry-format.md)          | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Book Series](classes/books/book-series.md)                      | `NA`  |    `NA`     | `co`  | `co`  |

### Music
This table contains all classes to be used for specifically for music.

|     Name and Information                                        |ClassId|Valid Schemas| Write | Read  |
|-----------------------------------------------------------------|:-----:|-------------|:-----:|:-----:|
|[Music Album](classes/music/music-album.md)                      | `NA`  |    `v0`     | `co`  | `NA`  |
|[Music Track](classes/music/music-track.md)                      | `NA`  |    `v0`     | `co`  | `co`  |
|[Music Genre](classes/music/music-genre.md)                      | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Music Mood](classes/music/music-mood.md)                        | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Music Theme](classes/music/music-theme.md)                      | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Music Playlist Item](classes/music/music-playlist-item.md)      | `NA`  |    `NA`     | `co`  | `cc`  |
|[Music Playlist](classes/music/music-playlist.md)                | `NA`  |    `NA`     | `co`  | `co`  |

### Videos
This table contains all classes to be used for specifically for videos.

|     Name and Information                                        |ClassId|Valid Schemas| Write | Read  |
|-----------------------------------------------------------------|:-----:|-------------|:-----:|:-----:|
|[Video](classes/videos/video.md)                                 | `NA`  |    `v0`     | `co`  | `co`  |
|[Video Category](classes/videos/video-category.md)               | `NA`  |    `v0`     | `cg`  | `cc`  |
|[Video Playlist Item](classes/video/video-playlist-item.md)      | `NA`  |    `NA`     | `co`  | `cc`  |
|[Video Playlist](classes/video/video-playlist.md)                | `NA`  |    `NA`     | `co`  | `co`  |

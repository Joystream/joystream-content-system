Table of Contents
=================

<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Overview](#overview)
  - [Resources, examples and templates](#resources-examples-and-templates)
- [Classes](#classes)
  - [Rules](#rules)
  - [General](#general)
  - [Type Specific](#type-specific)
    - [ebooks](#ebooks)
    - [Podcast](#podcast)
    - [Videos](#videos)
<!-- TOC END -->

# Overview

This repo contains information and resources for using the Joystream content system.

## Resources, examples and templates

Go [here](resources) for information on how to use the system and examples.

# Classes
The tables below contains an overview of all classes available in the Joystream Content System. Click the link under the "Information" for a more verbose explanation of the class.

## Rules

The "Rules" column for each `property` should be read as follows:
- `r` means `Root` only
- `cl` means `Content Curator Group Lead`
- `c` means all `Content Curators`
- `co` means all `content owners`
- `ch` means all `channel owners`
- `cc` means all `channel contributors`
- `m` means all `Members`

Note that this hierarchical structure always includes the group(s) above unless noted otherwise.

By order of appearance, the "tags" refers to the following:
- Who can create a new `entity` under this `property`
- Who can use this an `entity` under this `property`
- Who can modify or delete an `entity` under this `property`

Also note that these are the default settings. In some circumstances, new permissions can be set.

## General

This table contains all classes to be used for general purposes.

|     Name                |ClassId| Information                                         |Internal ClassIds| Link to Schemas (latest version)                     |
|-------------------------|:-----:|-----------------------------------------------------|:---------------:|------------------------------------------------------|
|Data Directory Object    |  `1`  |[Link](classes/general/data-directory-object.md)     |      `NA`       |[v0](schemas/general/data-directory-object.md)        |
|Language                 |  `2`  |[Link](classes/general/language.md)                  |      `NA`       |[v0](schemas/general/language.md)                     |
|Channel                  |  `3`  |[Link](classes/general/channel.md)                   |      `NA`       |[v0](schemas/general/channel.md)                      |

## Type Specific

### ebooks
This table contains all classes to be used for specifically for ebooks.

|     Name                |ClassId| Information                                         |Internal ClassIds| Link to Schemas (latest version)                     |
|-------------------------|:-----:|-----------------------------------------------------|:---------------:|------------------------------------------------------|
|-------                  | `NA`  |[Link](classes/podcast/-------.md)                   |      `NA`       |[v0](schemas/-------/-------.md)                      |

### Podcast

This table contains all classes to be used for specifically for podcasts.

|     Name                |ClassId| Information                                         |Internal ClassIds| Link to Schemas (latest version)                     |
|-------------------------|:-----:|-----------------------------------------------------|:---------------:|------------------------------------------------------|
|Podcast                  |  `4`  |[Link](classes/podcast/podcast.md)                   |    `2,5,6`      |[v0](schemas/podcast/podcast.md)                      |
|Podcast Episode          |  `5`  |[Link](classes/podcast/podcast-episode.md)           |     `1,2`       |[v0](schemas/podcast/podcast-episode.md)              |
|Podcast Category itunes  |  `6`  |[Link](classes/podcast/podcast-category-itunes.md)   |      `NA`       |[v0](schemas/podcast/podcast-category-itunes.md)      |

### Videos
This table contains all classes to be used for specifically for videos.

|     Name                |ClassId| Information                                         |Internal ClassIds| Link to Schemas (latest version)                     |
|-------------------------|:-----:|-----------------------------------------------------|:---------------:|------------------------------------------------------|
|-------                  | `NA`  |[Link](classes/-------/-------.md)                   |      `NA`       |[v0](schemas/-------/-------.md)                      |

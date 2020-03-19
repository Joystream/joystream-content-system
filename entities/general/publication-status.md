Publication Status - Entities
=============================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [Class and Schema](#class-and-schema)
  - [Entities](#entities)
<!-- TOC END -->

## Class and Schema

- Class Name: ["Publication Status"](../../classes/general/publication-status.md)
- Class Id : `4`
- Supported schema Id(s): `0`

## Entities

Entities are protected. Entities are protected. All have [property type](../../README.md#property-types) `Text`.
The table below lists all available entities:

| Entity ID | Value    | Explanation                             |
|-----------|----------|-----------------------------------------|
| 185       |"Public"  | Published (eg. discoverable)            |
| 186       |"Unlisted"| Not published (eg. not discoverable)    |

**Note:**
Although this could easily be replaced property type `Bool`, it was decided to use `Text` so that additional values can be added to later schemas with backwards compatibility.

Year - Class
============

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [In Class Properties](#in-class-properties)
    - [Rome](#rome)
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`NA`

## Explanation
To enforce a specific standard of tagging a year (eg. for release) across all content types.

Only the gregorian calendar will be used for now.

### Protection

The concept needs to a follow strict standard. If all content creators could create a new `entity` in this `Class`, one would expect `n` ways of defining the (the 5th of November) 2019.
- `2019`
- `19`
- `MMXIX` (Roman numerals)
- `1441` (Hijri calendar)
- ...


## CreateClass JSON-schema
```json
{
  "name": "Year",
  "description": "Class for specifying year."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/year0.json)                    | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Year",
  "description": "A year as an integer in the gregorian calender 'yyyy' (dd.mm.yyyy)",
  "required": true,
  "type": "Uint16"
}
```

## Entities

[Link](../../entities/general/year.md)

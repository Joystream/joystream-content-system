Date - Class
============

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [ClassID](#classid)
  - [Explanation](#explanation)
    - [Protection](#protection)
  - [CreateClass JSON-schema](#createclass-json-schema)
  - [Schemas](#schemas)
  - [Properties](#properties)
    - [Rome](#rome)
  - [Entities](#entities)
<!-- TOC END -->

## ClassID
`NA`

## Explanation
To enforce a specific standard of tagging a date (eg. for release) across all content types.

Only the gregorian calendar will be used for now.

### Protection

The concept needs to a follow strict standard. If all content creators could create a new `entity` in this `Class`, one would expect `n` ways of defining the 5th (of November 2019).
- `05`
- `5`
- `5th`
- `101` (binary)
- `8`, `8th` or `08` (Hijri calendar)
- ...


## CreateClass JSON-schema
```json
{
  "name": "Date",
  "description": "Class for specifying a date."
}
```

## Schemas

|Version and Link                                           |   Testnet(s)     |Active|
|:---------------------------------------------------------:|------------------|:----:|
| [v0](../../schemas/general/date0.json)                    | `Rome`           | `no` |

## Properties
### Rome
##### In Class index 0
```json
{
  "name": "Date",
  "description": "A date as an integer in the gregorian calender 'dd' (dd.mm.yyyy)",
  "required": true,
  "type": "Uint16"
}
```

## Entities

[Link](../../entities/general/date.md)

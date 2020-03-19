Table of Contents
=================

<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Overview](#overview)
  - [Validation](#validation)
  - [JSON-schemas](#json-schemas)
  - [Versioned Store Write Operations](#versioned-store-write-operations)
  - [Validation schemas](#validation-schemas)
- [Workflow](#workflow)
- [Properties](#properties)
  - [Property Types](#property-types)
<!-- TOC END -->

# Overview

This section is meant to complement the explanation of the concepts on the repo [landing readme](../README.md)
The design of the system and its workflow is outlined below. For some, it may be easier to follow the [examples](examples) instead, or read them in parallel.

## Validation
Although the actual extrinsics and runtime operations happens through the two [substrate](https://github.com/paritytech/substrate) modules [substrate-versioned-store-module](https://github.com/Joystream/substrate-versioned-store-module) and [substrate-versioned-store-permissions-module](https://github.com/Joystream/substrate-versioned-store-permissions-module), both the `Content Curators` and `Content Creators` will talk to these modules through the [versioned-store-js](https://github.com/Joystream/versioned-store-js).

## JSON-schemas
This [versioned-store-js](https://github.com/Joystream/versioned-store-js) tool allows us to use "human readable" `JSON-schemas`, which must not be confused with [schemas](../README.md#schemas) or [validation JSON-schemas](#validation-schemas).

The advantage of using `JSON-schemas` that follows the [JSON Schema standard](https://json-schema.org/) is that they are both structured enough to avoid confusion, yet far easier to learn and parse than `rust` code. The `JSON-schemas` can be used to perform all 6 [operations](#versioned-store-write-operations) as the [versioned-store-js](https://github.com/Joystream/versioned-store-js) will use them as input, validate them, construct the `extrinsics`, and broadcast them.

## Versioned Store Write Operations
Currently, there are 6 kinds of operations that can be performed on the `versioned-store`. The table below lists the actions, the default permissions, and what the action will return. The links in the "Action" columns leads to the [validation JSON-schemas](#validation-schemas) for each operation.

| Action                                                                                | Permissions      | Returns          |
|---------------------------------------------------------------------------------------|------------------|------------------|
| [Create Class](schema-standards/CreateClass.schema.json)                              |`cg`              | [classId]()      |
| [Add Schema Support to Class](schema-standards/AddClassSchema.schema.json)            |`cg`              | [schemaId]()     |
| [Create Entity](schema-standards/CreateEntity.schema.json)                            |`cg,co,cc`,`1.`   | [entityId]()     |
| [Add Schema Support to Entity](schema-standards/AddSchemaSupportToEntity.schema.json) |`cg,co,cc`,`2.`   | x                |
| [Update Entity Properties](schema-standards/UpdateEntityProperties.schema.json)       |`cg,co,cc`,`2.`   | y                |
| [Remove Entity Properties](schema-standards/RemoveEntityProperties.schema.json)       |`cg,co,cc`,`2.`   | z                |

1. For `Create Entity`:
    - `cg`: some classes are protected, meaning only  can create entities in these classes.
    - An owner of a `video channel`, can not create entities in classes that belongs exclusively to `music`. (If the `Member` also owns a `music channel` , the `Member` must use the `key(s)` associated with that channel)
    - Some classes allows all `Content Creators` to create entities in this class
2. For `Add Schema Support to Entity`, `Update Entity Properties`, `Remove Entity Properties`
  - If a class that is protected as in `1.`, the same rules applies to all these operations, and only `cg` has permissions.
  - If there are no restriction for creating

## Validation schemas

The `validation schemas`, validates that the `JSON-schema` contains valid input for the [operation](#versioned-store-write-operations) it is trying to perform. In addition to being validated in the [versioned-store-js](https://github.com/Joystream/versioned-store-js) tool, a `JSON-schema` can also be validated against its appropriate `validation schemas` by the wonderful online tool [jsonschemavalidator.net](https://www.jsonschemavalidator.net/).

Note that both of these checks will of not be able to catch errors in `JSON-schemas` that stem from input data conflicting with what is currently in the `versioned-store`, or consider [permissions](../README.md#permissions). They should instead be seen as the first line of defense.

# Workflow

The following workflow assumes the user has the correct permissions, and uses the [versioned-store-js](https://github.com/Joystream/versioned-store-js) instead of Pioneer. As such, it's mostly applicable to current and future `Content Curators`

# Properties

## Property Types

When a `property` is created, it has to be assigned a `type`. The code snipped below is taken from the current [implementation](https://github.com/Joystream/substrate-versioned-store/blob/master/src/lib.rs):

```rust
    // Single value:
    Bool(bool),
    Uint16(u16),
    Uint32(u32),
    Uint64(u64),
    Int16(i16),
    Int32(i32),
    Int64(i64),
    Text(Vec<u8>),
    Internal(EntityId),
```
These `property types` allows, or requires, an `entity` to populate a single value in the required format.

```rust
    // Vector of values:
    BoolVec(Vec<bool>),
    Uint16Vec(Vec<u16>),
    Uint32Vec(Vec<u32>),
    Uint64Vec(Vec<u64>),
    Int16Vec(Vec<i16>),
    Int32Vec(Vec<i32>),
    Int64Vec(Vec<i64>),
    TextVec(Vec<Vec<u8>>),
    InternalVec(Vec<EntityId>),

```

These `property types` allows, or requires, an `entity` to populate a vector of values in the required format.


```rust
    // External(ExternalPropertyType),
    // ExternalVec(Vec<ExternalPropertyType>),
```

As both the `External` and `ExternalVec` is commented out, these are currently not implemented.

- `Text*` means that a string of characters, or an array of strings, must be passed.
- `Bool*` means that a boolean (true or false) value, or array of values, must be passed.
- `Uint*` means that an unsigned integer value, or array or values, must be passed.
- `Int*` means that a signed integer value, or array or values, must be passed.
- `Internal*` means that the value, or array of values, from another `class` must be passed.

#### Text
The property type `Text` is simply a string of characters. This property type must also include a maximum character limit.

Example:
```json
{
  "name": "Title",
  "description": "The title of the book in English.",
  "type": "Text",
  "maxTextLength": 100
}
```

#### TextVec
The property type `TextVec` is an array of strings. This property type must also include both a maximum length of the array, and a maximum character limit for each array.

Example:
```json
{
  "name": "Author of Book",
  "description": "The author or authors of the book",
  "type": "TextVec",
  "maxItems": 10,
  "maxTextLength": 100
}
```

#### Bool
The property type `Bool` is a boolean `true` or `false`.

Example:
```json
{
  "name": "Explicit",
  "description": "Indicates whether the book contains explicit material.",
  "type": "Bool"
}
```

#### Uint16
The property type `Uint16` is an unsigned integer of

Example:
```json
{
  "name": "ISBN",
  "description": "The ISBN of the book.",
  "type": "Uint16"
}
```

#### Uint16Vec
The property type `Uint16Vec` is an unsigned integer of

Example:
```json
{
  "name": "ISBNs",
  "description": "The ISBNs of other editions of the book",
  "type": "Uint16Vec",
  "maxItems": 5
}
```

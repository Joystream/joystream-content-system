Table of Contents
=================

<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Design](#design)
- [Get started](#get-started)
- [Validation](#validation)
- [Permissions](#permissions)
- [Workflow](#workflow)
  - [Classes](#classes)
  - [Schemas](#schemas)
    - [Properties](#properties)
  - [Entities](#entities)
<!-- TOC END -->

# Design

The design centers around two key concepts, a class and an entity. A class represents a type of entity family, and it may have sequence of schemas associated with it, which defines different ways an entity of the given class may be encoded. A schema can express familiar constraints around what properties an entity must have in order to submit to the schema. A property is defined by some data type requirements, whether it is optional or not, and some metadata. Importantly, one special data type is called the internal property type, which requires an identifier for some entity of a class defined int he store. This is how data is linked. An entity should be understood as some persistent instance of a class that may exist in one or more different versions simultaneously.

# Get started

To understand the system and its workflow, one needs to go through the steps below.

# Validation

All new JSON-schemas, regardless of what they are meant to do, must be validated against the appropriate standard. These standards can be found [here](/joystream-content-system/resources/standards).

# Permissions

...

# Workflow

## Classes

A class represents a "concept" that we wish to model in the database. There can be many instances of a class, called entities. A class is part of a class group. This group is for partitioning purposes. Classes in a group do not necessarily share a common theme or trait. A Class has a unique global identifier in the database, and are the first concept to add.

To add a new `class`, create a JSON with the following structure:

```json
{
  "name": "Name of the class",
  "description": "Explanation of what the class is meant to describe.",
}
```

This will return a new `classId`, an integer, after checking `NextClassId`.
The `name` of the new `class` *should* contain enough information to avoid confusion, whereas the `description` should provide more details about what this `class` is meant to represent.

A newly created `class` holds no `properties`, supports no `schemas`, and one cannot create an `entity` in this class.

## Schemas

After creating a new `class`, the next step is to create `schema`, that populates the `class` with at least one new `property`. Assuming the returned `classId` is 1:

```json
{
  "classId": 1,
  // Id of the new class
  "newProperties": [
    {
      "name": "Name of the first property in the new class",
      "description": "Description of this new property",
      "type": "Text",
      "required": true,
      "maxTextLength": 10
    },
    {
      "name": "Second property in the new class",
      "description": "Description of this new property",
      "type": "Bool",
    },
  ]
}
```

This will return a new `schemaId`, unique for each `class`, starting at `1`.

As we started with a new `class`, there are no `existingProperties`. The creation of a new `schema` requires at least one new property. The name of a `property` must be unique.

The first new `property` is of `type` "Text", with a `maxTextLength` set to 10, and is `required`. This means that a new `entity` in this `class` MUST populate this `property` with a string between 1 and 10 characters.

The second new `property` is of `type` "Bool". Omitting `required`, is the equivalent to setting `"required": false,`. A new `entity` in this `class` does not need to populate this `property`, but if one chooses to do so, it must be a "bool" (ie. `true` or `false`).

### Properties

When a `property` is created, it has to be assign a `type`. The code snipped below is taken from the current [implementation](https://github.com/Joystream/substrate-versioned-store/blob/master/src/lib.rs):

```rust
    // Single value:
    Bool,
    Uint16,
    Uint32,
    Uint64,
    Int16,
    Int32,
    Int64,
    Text(u16),
    Internal(ClassId),
```
By choosing one of these, you are only allowing an `entity` to populate a single `property` value.

```rust
    // Vector of values.
    // The first u16 value is the max length of this vector.

    BoolVec(u16),
    Uint16Vec(u16),
    Uint32Vec(u16),
    Uint64Vec(u16),
    Int16Vec(u16),
    Int32Vec(u16),
    Int64Vec(u16),

    /// The first u16 value is the max length of this vector.
    /// The second u16 value is the max length of every text item in this vector.
    TextVec(u16, u16),

    /// The first u16 value is the max length of this vector.
    /// The second ClassId value tells that an every element of this vector
    /// should be of a specific ClassId.
    InternalVec(u16, ClassId),
```
By choosing one of these, you are allowing an `entity` to populate a vector of `property` values.

```rust
    // External(ExternalProperty),
    // ExternalVec(u16, ExternalProperty),
```

As both the `External` and `ExternalVec` `type` is commented out, these are currently not implemented.

`Bool*` means that a boolean (true or false) value, or array of values, must or can be passed.
`Uint*` means that an unsigned integer value, or array or values, must or can be passed.
`Int*` means that a signed integer value, or array or values, must or can be passed.
`Internal*` means that the value, or array of values, from another `class` can or must be passed.

## Entities

We now have a `class`, with one `schema` that

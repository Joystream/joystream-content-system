Podcast Category itunes Entities
================================

Table of Content
----------------
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
  - [Class and Schema](#class-and-schema)
  - [CreateEntity JSON-schema](#createentity-json-schema)
  - [Entities](#entities)
  - [AddSchemaSupportToEntity JSON-schema](#addschemasupporttoentity-json-schema)
<!-- TOC END -->

## Class and Schema

- [class](/joystream-content-system/classes/podcast/podcast-category-itunes.md)
- Class Id : `NA`
- [schema](/joystream-content-system/schemas/podcast/podcast-category-itunes.md)
- Supported schema Id(s): `1`

## CreateEntity JSON-schema
```json
{
  "classId": 1,
  // Id of podcast-category-itunes class
}
```

## Entities

Entities are protected. The table below lists all available entities:

| Top category            | Subcategory             | EntityId |
|-------------------------|-------------------------|----------|
| Arts                    | Arts                    | 1        |
|                         | Books                   | 2        |
|                         | Design                  | 3        |
|                         | Fashion & Beauty        | 4        |
|                         | Food                    | 5        |
|                         | Performing Arts         | 6        |
|                         | Visual Arts             | 7        |
| Business                | Business                | 8        |
|                         | Careers                 | 9        |
|                         | Entrepreneurship        | 10       |
|                         | Investing               | 11       |
|                         | Management              | 12       |
|                         | Marketing               | 13       |
|                         | Non-Profit              | 14       |
| Comedy                  | Comedy                  | 15       |
|                         | Comedy Interviews       | 16       |
|                         | Improv                  | 17       |
|                         | Stand-Up                | 18       |
| Education               | Education               | 19       |
|                         | Courses                 | 20       |
|                         | How To                  | 21       |
|                         | Language Learning       | 22       |
|                         | Self-Improvement        | 23       |
| Fiction                 | Fiction                 | 24       |
|                         | Comedy Fiction          | 25       |
|                         | Drama                   | 26       |
|                         | Science Fiction         | 27       |
| Government              | Government              | 28       |
| History                 | History                 | 29       |
| Health & Fitness        | Health & Fitness        | 30       |
|                         | Alternative Health      | 31       |
|                         | Fitness                 | 32       |
|                         | Medicine                | 33       |
|                         | Mental Health           | 34       |
|                         | Nutrition               | 35       |
|                         | Sexuality               | 36       |
| Kids & Family           | Kids & Family           | 37       |
|                         | Education for Kids      | 38       |
|                         | Parenting               | 39       |
|                         | Pets & Animals          | 40       |
|                         | Stories for Kids        | 41       |
| Leisure                 | Leisure                 | 42       |
|                         | Animation & Manga       | 43       |
|                         | Automotive              | 44       |
|                         | Aviation                | 45       |
|                         | Crafts                  | 46       |
|                         | Games                   | 47       |
|                         | Hobbies                 | 48       |
|                         | Home & Garden           | 49       |
|                         | Video Games             | 50       |
| Music                   | Music                   | 51       |
|                         | Music Commentary        | 52       |
|                         | Music History           | 53       |
|                         | Music Interviews        | 54       |
| News                    | News                    | 55       |
|                         | Business News           | 56       |
|                         | Daily News              | 57       |
|                         | Entertainment News      | 58       |
|                         | News Commentary         | 59       |
|                         | Politics                | 60       |
|                         | Sports News             | 61       |
|                         | Tech News               | 62       |
| Religion & Spirituality | Religion & Spirituality | 63       |
|                         | Buddhism                | 64       |
|                         | Christianity            | 65       |
|                         | Hinduism                | 66       |
|                         | Islam                   | 67       |
|                         | Judaism                 | 68       |
|                         | Religion                | 69       |
|                         | Spirituality            | 70       |
| Science                 | Science                 | 71       |
|                         | Astronomy               | 72       |
|                         | Chemistry               | 73       |
|                         | Earth Sciences          | 74       |
|                         | Life Sciences           | 75       |
|                         | Mathematics             | 76       |
|                         | Natural Sciences        | 77       |
|                         | Nature                  | 78       |
|                         | Physics                 | 79       |
| Social Sciences         | Social Sciences         | 80       |
|                         | Society & Culture       | 81       |
|                         | Documentary             | 82       |
|                         | Personal Journals       | 83       |
|                         | Philosophy              | 84       |
|                         | Places & Travel         | 85       |
|                         | Relationships           | 86       |
| Sports                  | Sports                  | 87       |
|                         | Baseball                | 88       |
|                         | Basketball              | 89       |
|                         | Cricket                 | 90       |
|                         | Fantasy Sports          | 91       |
|                         | Football                | 92       |
|                         | Golf                    | 93       |
|                         | Hockey                  | 94       |
|                         | Rugby                   | 95       |
|                         | Running                 | 96       |
|                         | Soccer                  | 97       |
|                         | Swimming                | 98       |
|                         | Tennis                  | 99       |
|                         | Volleyball              | 100      |
|                         | Wilderness              | 101      |
|                         | Wrestling               | 102      |
| Technology              | Technology              | 103      |
| True Crime              | True Crime              | 104      |
| TV & Film               | TV & Film               | 105      |
|                         | After Shows             | 106      |
|                         | Film History            | 107      |
|                         | Film Interviews         | 108      |
|                         | Film Reviews            | 109      |
|                         | TV Reviews              | 110      |

## AddSchemaSupportToEntity JSON-schema
Example below for `entityId 103`

```json
{
  "entityId": 103,
  "schemaId": 1,
     "propertyValues": [
    {
      "name": "Podcast category",
      "value": "Technology",
    },
  ]
}
```

Example below for `entityId 110`

```json
{
  "entityId": 110,
  "schemaId": 1,
     "propertyValues": [
    {
      "name": "Podcast category",
      "value": "TV & Film: Film Reviews",
    },
  ]
}
```

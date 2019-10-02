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

- [class](/classes/podcast/podcast-category-itunes.md)
- Class Id : `6`
- [schema](/schemas/podcast/podcast-category-itunes.md)
- Supported schema Id(s): `0`

## CreateEntity JSON-schema
```json
{
  "classId": <input>,
  // Id of podcast-category-itunes class
}
```

## Entities

Entities are protected. The table below lists all available entities:

| Top category            | Subcategory             | EntityId |
|-------------------------|-------------------------|----------|
| Arts                    | Arts                    | 185      |
|                         | Books                   | 186      |
|                         | Design                  | 187      |
|                         | Fashion & Beauty        | 188      |
|                         | Food                    | 189      |
|                         | Performing Arts         | 190      |
|                         | Visual Arts             | 191      |
| Business                | Business                | 192      |
|                         | Careers                 | 193      |
|                         | Entrepreneurship        | 194      |
|                         | Investing               | 195      |
|                         | Management              | 196      |
|                         | Marketing               | 197      |
|                         | Non-Profit              | 198      |
| Comedy                  | Comedy                  | 199      |
|                         | Comedy Interviews       | 200      |
|                         | Improv                  | 201      |
|                         | Stand-Up                | 202      |
| Education               | Education               | 203      |
|                         | Courses                 | 204      |
|                         | How To                  | 205      |
|                         | Language Learning       | 206      |
|                         | Self-Improvement        | 207      |
| Fiction                 | Fiction                 | 208      |
|                         | Comedy Fiction          | 209      |
|                         | Drama                   | 210      |
|                         | Science Fiction         | 211      |
| Government              | Government              | 212      |
| History                 | History                 | 213      |
| Health & Fitness        | Health & Fitness        | 214      |
|                         | Alternative Health      | 215      |
|                         | Fitness                 | 216      |
|                         | Medicine                | 217      |
|                         | Mental Health           | 218      |
|                         | Nutrition               | 219      |
|                         | Sexuality               | 220      |
| Kids & Family           | Kids & Family           | 221      |
|                         | Education for Kids      | 222      |
|                         | Parenting               | 223      |
|                         | Pets & Animals          | 224      |
|                         | Stories for Kids        | 225      |
| Leisure                 | Leisure                 | 226      |
|                         | Animation & Manga       | 227      |
|                         | Automotive              | 228      |
|                         | Aviation                | 229      |
|                         | Crafts                  | 230      |
|                         | Games                   | 231      |
|                         | Hobbies                 | 232      |
|                         | Home & Garden           | 233      |
|                         | Video Games             | 234      |
| Music                   | Music                   | 235      |
|                         | Music Commentary        | 236      |
|                         | Music History           | 237      |
|                         | Music Interviews        | 238      |
| News                    | News                    | 239      |
|                         | Business News           | 240      |
|                         | Daily News              | 241      |
|                         | Entertainment News      | 242      |
|                         | News Commentary         | 243      |
|                         | Politics                | 244      |
|                         | Sports News             | 245      |
|                         | Tech News               | 246      |
| Religion & Spirituality | Religion & Spirituality | 247      |
|                         | Buddhism                | 248      |
|                         | Christianity            | 249      |
|                         | Hinduism                | 250      |
|                         | Islam                   | 251      |
|                         | Judaism                 | 252      |
|                         | Religion                | 253      |
|                         | Spirituality            | 254      |
| Science                 | Science                 | 255      |
|                         | Astronomy               | 256      |
|                         | Chemistry               | 257      |
|                         | Earth Sciences          | 258      |
|                         | Life Sciences           | 259      |
|                         | Mathematics             | 260      |
|                         | Natural Sciences        | 261      |
|                         | Nature                  | 262      |
|                         | Physics                 | 263      |
| Social Sciences         | Social Sciences         | 264      |
|                         | Society & Culture       | 265      |
|                         | Documentary             | 266      |
|                         | Personal Journals       | 267      |
|                         | Philosophy              | 268      |
|                         | Places & Travel         | 269      |
|                         | Relationships           | 270      |
| Sports                  | Sports                  | 271      |
|                         | Baseball                | 272      |
|                         | Basketball              | 273      |
|                         | Cricket                 | 274      |
|                         | Fantasy Sports          | 275      |
|                         | Football                | 276      |
|                         | Golf                    | 277      |
|                         | Hockey                  | 278      |
|                         | Rugby                   | 279      |
|                         | Running                 | 280      |
|                         | Soccer                  | 281      |
|                         | Swimming                | 282      |
|                         | Tennis                  | 283      |
|                         | Volleyball              | 284      |
|                         | Wilderness              | 285      |
|                         | Wrestling               | 286      |
| Technology              | Technology              | 287      |
| True Crime              | True Crime              | 288      |
| TV & Film               | TV & Film               | 289      |
|                         | After Shows             | 290      |
|                         | Film History            | 291      |
|                         | Film Interviews         | 292      |
|                         | Film Reviews            | 293      |
|                         | TV Reviews              | 294      |


## AddSchemaSupportToEntity JSON-schema
Example below for `entityId 287`

```json
{
  "entityId": 287,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "Podcast category",
      "value": "Technology",
    },
  ]
}
```

Example below for `entityId 294`

```json
{
  "entityId": 294,
  "schemaId": 0,
     "propertyValues": [
    {
      "name": "Podcast category",
      "value": "TV & Film: Film Reviews",
    },
  ]
}
```

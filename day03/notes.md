# 1. MongoDB Basics

## What is MongoDB?

MongoDB is a **NoSQL database** that stores data in a flexible **JSON-like format** called **BSON** (Binary JSON).

Unlike SQL databases where data is stored in tables and rows, MongoDB stores data in **collections** and **documents**.

---

# Why MongoDB is Popular

- Flexible schema
- Fast for large-scale applications
- Easy to work with JavaScript/Node.js
- Stores nested data naturally
- Good for modern web apps

---

# Traditional SQL vs MongoDB

| SQL Database | MongoDB    |
| ------------ | ---------- |
| Database     | Database   |
| Table        | Collection |
| Row          | Document   |
| Column       | Field      |

---

# Example

## SQL Row

| id  | name    | age |
| --- | ------- | --- |
| 1   | Prakash | 25  |

---

## MongoDB Document

```json
{
  "name": "Prakash",
  "age": 25
}
```

MongoDB stores this as a document.

---

# Structure of MongoDB

```text
MongoDB Server
   └── Database
         └── Collection
                └── Document
```

Example:

```text
ecommerce
   └── users
         └── { name: "Prakash", age: 25 }
```

Here:

- `ecommerce` → Database
- `users` → Collection
- `{}` → Document

---

# BSON (Binary JSON)

MongoDB internally stores data in BSON.

Example:

```json
{
  "name": "Laptop",
  "price": 55000,
  "inStock": true
}
```

BSON supports:

- String
- Number
- Boolean
- Array
- Object
- Date
- ObjectId

---

# MongoDB Features

## 1. Flexible Schema

Different documents can have different fields.

```json
{ "name": "Prakash" }

{ "name": "Rahul", "age": 24 }
```

---

## 2. High Performance

Good for:

- Real-time apps
- Analytics
- Large traffic systems

---

## 3. Scalability

Supports horizontal scaling using sharding.

---

## 4. Easy Integration with Node.js

Works very smoothly with:

- Node.js
- Express.js
- React apps

Perfect for MERN stack.

---

# Installing MongoDB

## Option 1 — Local Installation

Install:

- MongoDB Community Server
- MongoDB Compass GUI

Official Website:

[MongoDB Official Website](https://www.mongodb.com/?utm_source=chatgpt.com)

---

## Option 2 — MongoDB Atlas (Cloud)

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=chatgpt.com)

You can host database online for free.

---

# Basic MongoDB Commands

## Show databases

```js
show dbs
```

---

## Create/Use database

```js
use ecommerce
```

---

## Create collection automatically

```js
db.users.insertOne({
  name: "Prakash",
  age: 25,
});
```

---

## Find documents

```js
db.users.find();
```

---

## Find one document

```js
db.users.findOne({ name: "Prakash" });
```

---

# CRUD Operations

## Create

```js
db.users.insertOne({
  name: "Prakash",
});
```

---

## Read

```js
db.users.find();
```

---

## Update

```js
db.users.updateOne({ name: "Prakash" }, { $set: { age: 26 } });
```

---

## Delete

```js
db.users.deleteOne({ name: "Prakash" });
```

---

# Important MongoDB Data Types

| Type     | Example                  |
| -------- | ------------------------ |
| String   | `"Prakash"`              |
| Number   | `25`                     |
| Boolean  | `true`                   |
| Array    | `["JS","Node"]`          |
| Object   | `{ city: "Jamshedpur" }` |
| Date     | `new Date()`             |
| ObjectId | Auto generated ID        |

---

# Example Real Document

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "iPhone 15",
  "price": 79999,
  "category": "mobile",
  "features": ["5G", "128GB"],
  "specs": {
    "ram": "8GB",
    "battery": "4500mAh"
  }
}
```

---

# Advantages of MongoDB

✅ Flexible
✅ Fast
✅ Scalable
✅ Easy with JavaScript
✅ Great for APIs

---

# Disadvantages

❌ Less strict than SQL
❌ Complex joins are harder
❌ Can become messy without schema design

---

# Where MongoDB is Used

- E-commerce
- Social media apps
- Chat applications
- Analytics systems
- Real-time dashboards
- MERN stack projects

---

# Summary

MongoDB:

- is a NoSQL database
- stores data as documents
- uses collections instead of tables
- is flexible and scalable
- works very well with Node.js

---

# 2. Collections in MongoDB

## What is a Collection?

A **Collection** in MongoDB is a group of related **documents**.

It is similar to a **table** in SQL databases.

---

# SQL vs MongoDB

| SQL   | MongoDB    |
| ----- | ---------- |
| Table | Collection |
| Row   | Document   |

---

# Example

## SQL Table

```text id="3g68qj"
users
----------------
id | name | age
```

---

## MongoDB Collection

```text id="0u0tkr"
users
   ├── { name: "Prakash", age: 25 }
   ├── { name: "Rahul", age: 22 }
   └── { name: "Amit", age: 28 }
```

Here:

- `users` → Collection
- `{}` → Documents

---

# Important Points About Collections

## 1. Collections Store Documents

Example:

```json id="rtnx6q"
{
  "name": "Prakash",
  "age": 25
}
```

---

## 2. Collections are Schema-less

Documents inside a collection can have different fields.

Example:

```json id="h5d4o4"
{ "name": "Prakash" }

{ "name": "Rahul", "age": 22 }

{ "name": "Amit", "city": "Jamshedpur" }
```

This flexibility is one of MongoDB’s biggest features.

---

# Creating a Collection

MongoDB automatically creates a collection when data is inserted.

Example:

```js id="g6grmx"
db.users.insertOne({
  name: "Prakash",
  age: 25,
});
```

If `users` collection does not exist:
✅ MongoDB creates it automatically.

---

# Manually Creating a Collection

```js id="k73ysh"
db.createCollection("products");
```

---

# Show All Collections

```js id="1k1tif"
show collections
```

Example output:

```text id="myl9lm"
users
products
orders
```

---

# Insert Documents into Collection

## Insert One Document

```js id="0t7s9q"
db.users.insertOne({
  name: "Prakash",
  age: 25,
});
```

---

## Insert Multiple Documents

```js id="ndm2zy"
db.users.insertMany([
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 28 },
]);
```

---

# Fetch Documents from Collection

## Get All Documents

```js id="lfsyru"
db.users.find();
```

---

## Pretty Format

```js id="0cdk7n"
db.users.find().pretty();
```

---

## Find Specific Data

```js id="t5bvrv"
db.users.find({ age: 25 });
```

---

# Delete Collection

```js id="3lk3ta"
db.users.drop();
```

This removes:

- Collection
- All documents inside it

---

# Collection Naming Best Practices

✅ Use lowercase names

```text id="wdcdbv"
users
products
orders
```

---

✅ Use plural names

```text id="lkv7u5"
users
employees
students
```

---

❌ Avoid spaces

Bad:

```text id="gz9d4h"
user data
```

Good:

```text id="yl8lzi"
userData
```

---

# Types of Collections

## 1. Regular Collection

Normal collection storing documents.

Example:

```text id="7pbf7m"
users
products
orders
```

---

## 2. Capped Collection

Fixed-size collection.

Old documents are automatically removed when limit is reached.

Useful for:

- Logs
- Real-time systems

Example:

```js id="nk3hrn"
db.createCollection("logs", {
  capped: true,
  size: 100000,
});
```

---

# System Collections

MongoDB internally creates system collections.

Example:

```text id="s9m7bm"
system.indexes
system.users
```

Usually you don’t modify them manually.

---

# Collection Operations Summary

| Operation         | Command                 |
| ----------------- | ----------------------- |
| Create            | `db.createCollection()` |
| Show collections  | `show collections`      |
| Insert document   | `insertOne()`           |
| Insert many       | `insertMany()`          |
| Find documents    | `find()`                |
| Delete collection | `drop()`                |

---

# Real Example (E-commerce)

## Database

```text id="lj9e2j"
ecommerce
```

---

## Collections

```text id="s2e9vk"
users
products
orders
reviews
```

---

## Products Collection Example

```json id="yvf6r8"
{
  "name": "Laptop",
  "price": 55000,
  "brand": "HP"
}
```

---

# Difference Between Database and Collection

| Database             | Collection         |
| -------------------- | ------------------ |
| Contains collections | Contains documents |
| Example: `ecommerce` | Example: `users`   |

---

# Summary

Collections:

- store documents
- are similar to SQL tables
- can be created automatically
- are schema flexible
- organize related data together

---

# 3. Documents in MongoDB

## What is a Document?

A **Document** is the basic unit of data in MongoDB.

It is similar to a:

- **Row** in SQL
- Object in JavaScript

MongoDB stores data in **JSON-like format** called BSON.

---

# Example of a Document

```json id="gh17p0"
{
  "name": "Prakash",
  "age": 25,
  "city": "Jamshedpur"
}
```

This entire object is called a **document**.

---

# Structure of a Document

A document contains:

```text id="dpxjwm"
Field : Value
```

Example:

```json id="ww4x6m"
{
  "name": "Prakash",
  "age": 25
}
```

Here:

- `name` → Field
- `"Prakash"` → Value
- `age` → Field
- `25` → Value

---

# Documents are Similar to JavaScript Objects

MongoDB works very well with:

- Node.js
- Express.js
- React

Because documents look like JavaScript objects.

Example:

```js id="d8gz8u"
const user = {
  name: "Prakash",
  age: 25,
};
```

Very similar to MongoDB document.

---

# `_id` Field (Very Important)

Every document automatically gets a unique `_id`.

Example:

```json id="n8xl6r"
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "Prakash"
}
```

---

# What is ObjectId?

`ObjectId` is:

- Automatically generated
- Unique for every document

It helps MongoDB identify documents uniquely.

---

# Insert a Document

## Insert One

```js id="9r7jcb"
db.users.insertOne({
  name: "Prakash",
  age: 25,
});
```

MongoDB adds `_id` automatically.

---

# Insert Multiple Documents

```js id="2d1mvj"
db.users.insertMany([
  { name: "Rahul", age: 22 },
  { name: "Amit", age: 28 },
]);
```

---

# Nested Documents

MongoDB supports nested objects.

Example:

```json id="n8w9vg"
{
  "name": "Prakash",
  "address": {
    "city": "Jamshedpur",
    "state": "Jharkhand"
  }
}
```

Here:

- `address` is a nested document.

---

# Arrays in Documents

MongoDB supports arrays directly.

Example:

```json id="vf28vx"
{
  "name": "Prakash",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

Very useful for:

- Tags
- Skills
- Categories
- Images

---

# Complex Document Example

```json id="oq1i7p"
{
  "name": "iPhone 15",
  "price": 79999,
  "brand": "Apple",
  "features": ["5G", "128GB"],
  "specs": {
    "ram": "8GB",
    "battery": "4500mAh"
  },
  "inStock": true
}
```

---

# Find Documents

## Find All

```js id="ctob7k"
db.products.find();
```

---

## Find One

```js id="l1jsh9"
db.products.findOne({ brand: "Apple" });
```

---

# Update Documents

## Update One

```js id="2ecmdr"
db.users.updateOne(
  { name: "Prakash" },
  {
    $set: { age: 26 },
  },
);
```

---

# Delete Documents

## Delete One

```js id="0k3rsh"
db.users.deleteOne({
  name: "Prakash",
});
```

---

# Document Data Types

MongoDB documents support many data types.

| Type    | Example                  |
| ------- | ------------------------ |
| String  | `"Prakash"`              |
| Number  | `25`                     |
| Boolean | `true`                   |
| Array   | `["React"]`              |
| Object  | `{ city: "Jamshedpur" }` |
| Date    | `new Date()`             |
| Null    | `null`                   |

---

# Flexible Schema

Documents inside same collection can differ.

Example:

```json id="jlwmhr"
{ "name": "Prakash" }

{ "name": "Rahul", "age": 22 }

{ "name": "Amit", "skills": ["Node.js"] }
```

This is called:
✅ Schema flexibility

---

# Advantages of Documents

✅ Easy to understand
✅ Stores complex data naturally
✅ Supports nesting
✅ Supports arrays
✅ Flexible structure

---

# Documents vs SQL Rows

| SQL Row            | MongoDB Document |
| ------------------ | ---------------- |
| Fixed columns      | Flexible fields  |
| Harder nested data | Easy nested data |
| Table row          | JSON-like object |

---

# Real-World Example

## User Document

```json id="dnyv0q"
{
  "name": "Prakash",
  "email": "prakash@gmail.com",
  "skills": ["React", "Node"],
  "address": {
    "city": "Jamshedpur"
  }
}
```

---

# Summary

Documents:

- are the actual data records
- are stored inside collections
- look like JSON objects
- support nested objects and arrays
- automatically contain `_id`

---

# 4. Indexing in MongoDB

## What is Indexing?

Indexing in MongoDB is used to make data searching **faster**.

Without indexes, MongoDB scans every document one by one.

With indexes, MongoDB can quickly locate data.

---

# Real-Life Example

Think of a book.

Without an index:

- You read every page to find a topic.

With an index:

- You directly jump to the page number.

MongoDB indexing works the same way.

---

# Problem Without Index

Suppose collection has:

```text id="1vtz35"
1 million users
```

Query:

```js id="k4gd8f"
db.users.find({ email: "test@gmail.com" });
```

Without index:
❌ MongoDB checks every document.

This is called:

```text id="w0s08p"
Collection Scan
```

Slow for large data.

---

# With Index

If email field is indexed:

```js id="qytg6x"
db.users.createIndex({ email: 1 });
```

MongoDB quickly finds matching document.

✅ Much faster

---

# Create an Index

## Basic Syntax

```js id="f4ngnv"
db.collection.createIndex({ field: 1 });
```

---

# Example

```js id="w4l3wp"
db.users.createIndex({ email: 1 });
```

Here:

- `email` → indexed field
- `1` → ascending order

---

# Ascending vs Descending

## Ascending Index

```js id="q99dj6"
{
  age: 1;
}
```

Small → large

---

## Descending Index

```js id="4a9dw1"
{
  age: -1;
}
```

Large → small

---

# View All Indexes

```js id="1c83vv"
db.users.getIndexes();
```

---

# Default `_id` Index

MongoDB automatically creates index on:

```text id="2v0xlc"
_id
```

Every collection has this by default.

---

# Types of Indexes

---

# 1. Single Field Index

Index on one field.

Example:

```js id="uijw4s"
db.users.createIndex({ email: 1 });
```

---

# 2. Compound Index

Index on multiple fields.

Example:

```js id="5owt0v"
db.users.createIndex({
  age: 1,
  city: 1,
});
```

Useful when querying multiple fields together.

---

# 3. Text Index

Used for text searching.

Example:

```js id="s0sc5j"
db.products.createIndex({
  description: "text",
});
```

Search:

```js id="9q5m3r"
db.products.find({
  $text: { $search: "gaming laptop" },
});
```

---

# 4. Unique Index

Prevents duplicate values.

Example:

```js id="l0gw5k"
db.users.createIndex({ email: 1 }, { unique: true });
```

Now duplicate emails are not allowed.

---

# 5. TTL Index (Time To Live)

Automatically deletes documents after some time.

Useful for:

- OTPs
- Sessions
- Logs

Example:

```js id="sqxq2v"
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

Deletes after 1 hour.

---

# Check Query Performance

## Explain Query

```js id="x0fg43"
db.users
  .find({
    email: "test@gmail.com",
  })
  .explain("executionStats");
```

You can see:

- Index used or not
- Query speed
- Documents scanned

---

# Benefits of Indexing

✅ Faster searching
✅ Faster sorting
✅ Better performance
✅ Efficient filtering

---

# Disadvantages of Indexing

❌ Takes extra storage
❌ Slower inserts/updates
❌ Too many indexes reduce performance

Because MongoDB must update indexes whenever data changes.

---

# When to Use Indexes

Use indexes on:

- Frequently searched fields
- Login email
- Product category
- Order ID
- Username

---

# Avoid Over-Indexing

Bad practice:

```text id="sm4vx4"
Index every field
```

Why?

- More RAM usage
- Slower writes

---

# Real Example

## Users Collection

```json id="pvnqao"
{
  "name": "Prakash",
  "email": "prakash@gmail.com",
  "city": "Jamshedpur"
}
```

Most searched field:

```text id="b92u2v"
email
```

Best index:

```js id="r0g1fy"
db.users.createIndex({ email: 1 });
```

---

# Compound Index Example

Query:

```js id="mclwbd"
db.orders.find({
  userId: 1,
  status: "pending",
});
```

Good index:

```js id="83m4nn"
db.orders.createIndex({
  userId: 1,
  status: 1,
});
```

---

# Drop an Index

## Drop Specific Index

```js id="mk07bf"
db.users.dropIndex("email_1");
```

---

## Drop All Indexes

```js id="p2chvy"
db.users.dropIndexes();
```

---

# Summary

Indexes:

- improve query performance
- make searches faster
- should be used carefully
- are very important for large applications

Most common indexes:

- Single field
- Compound
- Unique
- Text

---

# 5. Mongoose Schema

## What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library for Node.js.

It helps us interact with MongoDB easily.

---

# Why Use Mongoose?

MongoDB itself is schema-less, but in real projects we need:

✅ Structure
✅ Validation
✅ Relationships
✅ Better code organization

Mongoose provides all these features.

---

# Install Mongoose

Using npm:

```bash id="l53tko"
npm install mongoose
```

Official Website:

[Mongoose Official Website](https://mongoosejs.com/?utm_source=chatgpt.com)

---

# Connect MongoDB with Mongoose

```js id="q7nqij"
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
```

---

# What is a Schema?

A **Schema** defines:

- structure of documents
- field types
- validations
- default values

Think of schema as:
✅ Blueprint of data

---

# Example Without Schema

MongoDB allows:

```json id="jlwmc0"
{ "name": "Prakash" }

{ "email": "abc@gmail.com" }

{ "age": "twenty" }
```

This can create messy data.

---

# Schema Solves This Problem

With schema:

```js id="jlwmc1"
name → String
age → Number
email → String
```

Now data remains consistent.

---

# Create a Basic Schema

```js id="jlwmc2"
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
```

---

# Schema Syntax

```js id="jlwmc3"
const schemaName = new mongoose.Schema({
  fieldName: DataType,
});
```

---

# Common Data Types

| Type     | Example      |
| -------- | ------------ |
| String   | `"Prakash"`  |
| Number   | `25`         |
| Boolean  | `true`       |
| Date     | `new Date()` |
| Array    | `["React"]`  |
| ObjectId | MongoDB IDs  |

---

# Example with Multiple Types

```js id="jlwmc4"
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  createdAt: Date,
  tags: [String],
});
```

---

# Nested Objects in Schema

```js id="jlwmc5"
const userSchema = new mongoose.Schema({
  name: String,
  address: {
    city: String,
    state: String,
  },
});
```

---

# Arrays in Schema

```js id="jlwmc6"
const studentSchema = new mongoose.Schema({
  name: String,
  skills: [String],
});
```

Example document:

```json id="jlwmc7"
{
  "name": "Prakash",
  "skills": ["React", "Node.js"]
}
```

---

# Schema Options

---

# 1. Required Field

```js id="jlwmc8"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
```

Now `name` must exist.

---

# 2. Default Value

```js id="jlwmc9"
const userSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "user",
  },
});
```

If role is not provided:
✅ `"user"` is automatically added.

---

# 3. Unique Field

```js id="jlwmd0"
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});
```

Duplicate emails are not allowed.

---

# 4. Min and Max

```js id="jlwmd1"
const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    min: 100,
    max: 100000,
  },
});
```

---

# Full Schema Example

```js id="jlwmd2"
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    min: 18,
  },

  role: {
    type: String,
    default: "user",
  },

  skills: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
```

---

# Timestamps Option

Mongoose can automatically add:

- `createdAt`
- `updatedAt`

Example:

```js id="jlwmd3"
const userSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  },
);
```

---

# Result

```json id="jlwmd4"
{
  "name": "Prakash",
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

# Schema Methods

You can create custom methods.

Example:

```js id="jlwmd5"
userSchema.methods.sayHello = function () {
  return `Hello ${this.name}`;
};
```

---

# Schema vs Collection

| Schema               | Collection             |
| -------------------- | ---------------------- |
| Structure definition | Actual MongoDB storage |
| Mongoose feature     | MongoDB feature        |

---

# Why Schemas are Important

Without schema:
❌ inconsistent data
❌ validation problems
❌ hard maintenance

With schema:
✅ clean structure
✅ validations
✅ maintainable backend

---

# Real Project Example

## User Schema

```js id="jlwmd6"
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});
```

Used in:

- Authentication
- E-commerce
- Social apps
- Admin panels

---

# Summary

Mongoose Schema:

- defines document structure
- adds validation
- controls data types
- helps keep database clean
- acts like blueprint for documents

---

# 6. Model in Mongoose

## What is a Model?

In Mongoose, a **Model** is a JavaScript class created from a Schema.

A Model is used to:

- create documents
- read documents
- update documents
- delete documents

In short:

```text id="jlwmod1"
Schema → Structure
Model → Perform database operations
```

---

# Flow of Mongoose

```text id="jlwmod2"
Schema → Model → Collection → Documents
```

---

# Example

## Step 1 — Create Schema

```js id="jlwmod3"
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
```

---

## Step 2 — Create Model

```js id="jlwmod4"
const User = mongoose.model("User", userSchema);
```

---

# Syntax of Model

```js id="jlwmod5"
const ModelName = mongoose.model("CollectionName", schemaName);
```

---

# Important Note

```js id="jlwmod6"
mongoose.model("User", userSchema);
```

Mongoose automatically converts:

- `User` → `users`

Collection name becomes plural and lowercase.

---

# Model Example

```js id="jlwmod7"
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
```

Now:

- `User` is the model
- `users` is the MongoDB collection

---

# Create Document Using Model

## Method 1 — Using `new`

```js id="jlwmod8"
const user = new User({
  name: "Prakash",
  age: 25,
});

user.save();
```

---

# Method 2 — Direct Create

```js id="jlwmod9"
await User.create({
  name: "Rahul",
  age: 22,
});
```

---

# Read Documents

## Find All

```js id="jlwmod10"
const users = await User.find();
```

---

## Find One

```js id="jlwmod11"
const user = await User.findOne({
  name: "Prakash",
});
```

---

## Find By ID

```js id="jlwmod12"
const user = await User.findById(id);
```

---

# Update Documents

## Update One

```js id="jlwmod13"
await User.updateOne({ name: "Prakash" }, { age: 26 });
```

---

## Find By ID and Update

```js id="jlwmod14"
await User.findByIdAndUpdate(id, { age: 30 });
```

---

# Delete Documents

## Delete One

```js id="jlwmod15"
await User.deleteOne({
  name: "Rahul",
});
```

---

## Find By ID and Delete

```js id="jlwmod16"
await User.findByIdAndDelete(id);
```

---

# Complete CRUD Example

```js id="jlwmod17"
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

async function run() {
  // CREATE
  await User.create({
    name: "Prakash",
    age: 25,
  });

  // READ
  const users = await User.find();
  console.log(users);

  // UPDATE
  await User.updateOne({ name: "Prakash" }, { age: 26 });

  // DELETE
  await User.deleteOne({
    name: "Prakash",
  });
}

run();
```

---

# Model Methods

| Method        | Purpose             |
| ------------- | ------------------- |
| `create()`    | Insert document     |
| `find()`      | Get all documents   |
| `findOne()`   | Get single document |
| `findById()`  | Find using ID       |
| `updateOne()` | Update document     |
| `deleteOne()` | Delete document     |

---

# Instance Methods vs Static Methods

---

# Instance Method

Works on a document instance.

Example:

```js id="jlwmod18"
userSchema.methods.sayHello = function () {
  return `Hello ${this.name}`;
};
```

Usage:

```js id="jlwmod19"
const user = await User.findOne();

console.log(user.sayHello());
```

---

# Static Method

Works on Model directly.

Example:

```js id="jlwmod20"
userSchema.statics.findAdults = function () {
  return this.find({ age: { $gte: 18 } });
};
```

Usage:

```js id="jlwmod21"
const adults = await User.findAdults();
```

---

# Why Models are Important

Without model:
❌ direct MongoDB queries everywhere

With model:
✅ clean code
✅ reusable methods
✅ structured database operations
✅ easier maintenance

---

# Real Project Example

## Product Model

```js id="jlwmod22"
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
});

const Product = mongoose.model("Product", productSchema);
```

Used for:

- product APIs
- e-commerce backend
- admin panel

---

# Difference Between Schema and Model

| Schema            | Model             |
| ----------------- | ----------------- |
| Defines structure | Interacts with DB |
| Blueprint         | Working tool      |
| No DB operations  | CRUD operations   |

---

# Easy Analogy

| Real World      | Mongoose |
| --------------- | -------- |
| Building design | Schema   |
| Actual building | Model    |

---

# Summary

Model:

- is created from schema
- performs CRUD operations
- interacts with MongoDB collection
- makes database operations easy
- is one of the most important parts of Mongoose

---

Absolutely. In MongoDB + Mongoose, **validation** is the process of checking whether data is correct before saving it into the database.

Think of it like a security guard for your database.

Example:

- Name should not be empty
- Age should be a number
- Email should follow email format
- Password should have minimum length

Without validation, bad or incomplete data can enter your database.

---

# 1. Why Validation is Important

Suppose users are registering on your website.

Without validation:

```js
{
  name: "",
  age: "hello",
  email: "abc"
}
```

This bad data gets saved.

With validation:

- Empty name → rejected
- Invalid age → rejected
- Wrong email format → rejected

So validation keeps your database clean and reliable.

---

# 2. Basic Mongoose Validation

Example schema:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    min: 18,
    max: 60,
  },
});

const User = mongoose.model("User", userSchema);
```

---

# 3. `required` Validation

This makes a field mandatory.

```js
name: {
  type: String,
  required: true
}
```

If you try:

```js
await User.create({});
```

Error:

```bash
Path `name` is required.
```

---

# 4. String Validations

## `minlength`

```js
password: {
  type: String,
  minlength: 6
}
```

If password is `"123"` → validation error.

---

## `maxlength`

```js
username: {
  type: String,
  maxlength: 20
}
```

---

## `trim`

Removes extra spaces.

```js
name: {
  type: String,
  trim: true
}
```

Input:

```js
"   Prakash   ";
```

Saved as:

```js
"Prakash";
```

---

## `lowercase`

Automatically converts text to lowercase.

```js
email: {
  type: String,
  lowercase: true
}
```

---

# 5. Number Validations

## `min`

```js
age: {
  type: Number,
  min: 18
}
```

---

## `max`

```js
salary: {
  type: Number,
  max: 100000
}
```

---

# 6. `enum` Validation

Used when only specific values are allowed.

```js
gender: {
  type: String,
  enum: ["male", "female", "other"]
}
```

If value is `"robot"` → error.

---

# 7. `unique` Validation

Used to avoid duplicate values.

```js
email: {
  type: String,
  unique: true
}
```

This creates a unique index in MongoDB.

So:

```js
abc@gmail.com
abc@gmail.com
```

Second one fails.

⚠ Important:
`unique` is not exactly a Mongoose validator.
It creates a MongoDB unique index.

---

# 8. Default Values

```js
isAdmin: {
  type: Boolean,
  default: false
}
```

If user does not send `isAdmin`,
MongoDB stores:

```js
isAdmin: false;
```

---

# 9. Custom Validation

You can create your own validation logic.

Example: email must contain `@`

```js
email: {
  type: String,
  validate: {
    validator: function(value) {
      return value.includes("@");
    },
    message: "Invalid email format"
  }
}
```

---

# 10. Full Real Example

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  age: {
    type: Number,
    min: 18,
    max: 60,
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});
```

---

# 11. Handling Validation Errors

Example:

```js
try {
  const user = await User.create({
    name: "ab",
    password: "123",
  });
} catch (error) {
  console.log(error.message);
}
```

You can also inspect detailed errors:

```js
console.log(error.errors);
```

---

# 12. Important Interview Question

## Difference Between Validation and Sanitization

### Validation

Checks if data is valid.

Example:

- Email format correct?
- Password length enough?

### Sanitization

Cleans data.

Example:

- Remove spaces
- Convert lowercase

---

# 13. Validation During Update

By default, validation does NOT run on `updateOne()` or `findByIdAndUpdate()`.

You must enable it:

```js
await User.findByIdAndUpdate(id, { age: 10 }, { runValidators: true });
```

Very important point.

---

# 14. Commonly Used Validators Summary

| Validator | Purpose               |
| --------- | --------------------- |
| required  | Field mandatory       |
| minlength | Minimum string length |
| maxlength | Maximum string length |
| min       | Minimum number        |
| max       | Maximum number        |
| enum      | Allow fixed values    |
| unique    | Prevent duplicates    |
| default   | Default value         |
| trim      | Remove spaces         |
| lowercase | Convert to lowercase  |
| validate  | Custom validation     |

---

# 15. Real Industry Example

In real backend projects:

- Registration forms
- Product creation
- Payment data
- Admin panels
- APIs

All use validation heavily.

Because database integrity is extremely important.

---

# 16. Mini Practice Task For You

Create a `ProductSchema` with:

- title → required
- price → min 1
- category → enum
- stock → default 0
- description → maxlength 200

## Day 2 — Express.js Mastery

Perfect. We’ll go **one topic at a time**, in order. After each topic, I’ll ask whether you want to move forward or practice first.

### Topic 1: Express.js Basics

**Express.js** is a minimal and flexible web framework for **Node.js** used to build web servers and APIs quickly.

Instead of using raw Node.js `http.createServer()`, Express gives cleaner syntax for:

- Handling routes (`/users`, `/products`)
- Managing requests and responses
- Middleware support
- APIs and backend apps
- Error handling

### Install Express

```bash
npm init -y
npm install express
```

### Basic Server Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

### How it works

- `express()` creates app instance
- `app.get()` handles GET request
- `req` = request from client
- `res` = response sent back
- `app.listen()` starts server

### When you run:

```bash
node index.js
```

Then open:

```text
http://localhost:3000
```

You’ll see:

```text
Hello World
```

### Why Express is Popular

- Fast development
- Clean routing
- Huge ecosystem
- Great for REST APIs
- Used with MongoDB / React / Angular / Vue

### Mini Practice

Create 2 routes:

```js
/about
/contact
```

Each should return text.

## Topic 2: Express.js Routing

### What is Routing?

**Routing** means deciding **which code should run when a user visits a URL or sends a request**.

Example:

- `/` → Home page
- `/about` → About page
- `/products` → Product list
- `/users/5` → User with ID 5

In Express, routes are created using methods like:

- `app.get()` → fetch data/page
- `app.post()` → create data
- `app.put()` → update full data
- `app.patch()` → update partial data
- `app.delete()` → remove data

---

### Basic Routing Example

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(3000);
```

---

### Different HTTP Methods on Same Route

```js
app.get("/users", (req, res) => {
  res.send("Get all users");
});

app.post("/users", (req, res) => {
  res.send("Create new user");
});

app.put("/users", (req, res) => {
  res.send("Update users");
});

app.delete("/users", (req, res) => {
  res.send("Delete users");
});
```

Same URL, different action based on method.

---

### Route Order Matters

Express checks routes **top to bottom**.

```js
app.get("/about", ...)
app.get("*", ...)
```

If `*` comes first, it catches everything.

---

### Better Structure with Router

For large apps:

```js
const router = express.Router();

router.get("/users", ...);
router.post("/users", ...);

app.use("/api", router);
```

Then URL becomes:

```text
/api/users
```

---

### Real Backend Example

For ecommerce:

- `GET /products`
- `GET /products/10`
- `POST /products`
- `PUT /products/10`
- `DELETE /products/10`

---

### Mini Practice

Create routes:

```text
GET /login
POST /login
GET /dashboard
GET /logout
```

## Topic 3: Express.js Middleware

### What is Middleware?

**Middleware** is a function that runs **between request and response**.

It gets access to:

- `req` → incoming request
- `res` → response
- `next()` → move to next middleware/route

Think of it like a checkpoint in the request flow.

Client Request → Middleware → Middleware → Route Handler → Response

---

### Basic Middleware Example

```js id="u0o0do"
const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log("Request received");
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);
```

Whenever any request comes, logger runs first.

---

### Why Middleware is Used

- Logging requests
- Authentication / authorization
- Parsing JSON body
- Error handling
- Validation
- Security checks
- CORS

---

### Built-in Middleware

### JSON Parser

```js id="el5pm7"
app.use(express.json());
```

Used for reading JSON body from frontend.

---

### Route Specific Middleware

```js id="0j1p76"
const auth = (req, res, next) => {
  console.log("Checking login...");
  next();
};

app.get("/dashboard", auth, (req, res) => {
  res.send("Dashboard");
});
```

Only `/dashboard` uses auth middleware.

---

### Multiple Middleware

```js id="1gs2rj"
app.use(m1);
app.use(m2);
app.use(m3);
```

Runs in order.

---

### Important: `next()`

If middleware does not send response and does not call `next()`, request hangs.

```js id="g6q7y4"
const bad = (req, res, next) => {
  console.log("stop");
};
```

This will freeze request.

---

### Real Project Example

```js id="1ejt8z"
app.use(express.json());
app.use(cors());
app.use(logger);

app.post("/products", auth, createProduct);
```

---

### Mini Practice

Create middleware:

1. Print current time
2. Print request method (`GET/POST`)
3. Use it globally

## Topic 4: Express.js Request Lifecycle

### What is Request Lifecycle?

The **request lifecycle** is the full journey of a request from client to server and back to client.

Example:

User opens browser → requests `/products` → Express processes request → sends response.

Think of it as:

**Client Request → Middleware → Route Match → Controller Logic → Response → End**

---

## Step-by-Step Lifecycle

### 1. Client Sends Request

Browser / frontend / Postman sends:

```text
GET /products
POST /login
PUT /users/5
```

---

### 2. Express Receives Request

Your server is listening:

```js
app.listen(3000);
```

Request enters Express app.

---

### 3. Middleware Runs

Before route handler, middleware may run:

```js
app.use(express.json());
app.use(logger);
app.use(auth);
```

Examples:

- parse JSON body
- log request
- verify token
- validate input

---

### 4. Route Matching

Express checks routes top to bottom:

```js
app.get("/products", ...);
app.post("/login", ...);
```

If request is:

```text
GET /products
```

Then matching route runs.

---

### 5. Business Logic / Controller

Inside route:

```js
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});
```

Usually:

- DB query
- calculations
- validations
- calling services

---

### 6. Response Sent

Server returns:

```js
res.send();
res.json();
res.status(200).json();
res.redirect();
```

Example:

```js
res.status(200).json({ success: true });
```

---

### 7. Request Ends

Once response is sent, lifecycle is complete.

---

## Visual Flow

```text
Client
 ↓
Incoming Request
 ↓
Middleware
 ↓
Route Match
 ↓
Controller Logic
 ↓
Response
 ↓
Finished
```

---

## Important Notes

### If no route matches:

```js
404 Not Found
```

### If middleware blocks request:

```js
res.status(401).send("Unauthorized");
```

Lifecycle ends there.

### If error happens:

Use error middleware.

---

## Real Example

```js
app.use(express.json());

app.post("/login", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email required");
  }

  res.send("Login success");
});
```

Lifecycle:

1. POST request arrives
2. JSON middleware parses body
3. `/login` route matched
4. Validate email
5. Send response

---

## Mini Practice

For request:

```text
POST /users
Body: { "name": "Prakash" }
```

Try to explain full lifecycle step-by-step.

---

## Topic 5: Express.js Params / Query / Body

These are the main ways frontend sends data to backend.

---

# 1. Route Params (`req.params`)

Used for identifying a specific resource.

Example URL:

```text id="xxwhui"
/users/10
```

Here `10` is dynamic.

---

## Example

```js id="rlajux"
app.get("/users/:id", (req, res) => {
  console.log(req.params);

  res.send(`User ID is ${req.params.id}`);
});
```

### If URL is:

```text id="v8kiv8"
/users/25
```

Then:

```js id="q3m7lb"
req.params = { id: "25" };
```

---

## Multiple Params

```js id="mkgjlwm"
app.get("/products/:category/:id", (req, res) => {
  res.json(req.params);
});
```

URL:

```text id="jl38ij"
/products/mobile/5
```

Output:

```js id="4a7v8k"
{
  category: "mobile",
  id: "5"
}
```

---

# 2. Query Parameters (`req.query`)

Used for:

- filtering
- searching
- pagination
- sorting

Example:

```text id="7d81kh"
/products?category=mobile&page=2
```

---

## Example

```js id="bzlnfd"
app.get("/products", (req, res) => {
  console.log(req.query);

  res.json(req.query);
});
```

Result:

```js id="s4cg1r"
{
  category: "mobile",
  page: "2"
}
```

---

## Common Use Cases

```text id="j3c0zq"
/products?search=iphone
/products?page=1&limit=10
/products?sort=price
```

---

# 3. Request Body (`req.body`)

Used mainly in:

- POST
- PUT
- PATCH

Data comes from frontend in request body.

---

## IMPORTANT

You must use JSON middleware:

```js id="bx8my6"
app.use(express.json());
```

Otherwise `req.body` will be undefined.

---

## Example

```js id="n8o0yq"
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User created",
    data: req.body,
  });
});
```

Frontend sends:

```json id="e9ihji"
{
  "name": "Prakash",
  "age": 22
}
```

Then:

```js id="i5y3gl"
req.body = {
  name: "Prakash",
  age: 22,
};
```

---

# Difference Between Them

| Feature  | Params        | Query          | Body         |
| -------- | ------------- | -------------- | ------------ |
| Location | URL path      | URL after `?`  | Request body |
| Used For | Specific item | Filters/search | Sending data |
| Example  | `/users/5`    | `?page=2`      | `{name:"A"}` |

---

# Real API Example

```js id="0c6m4w"
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;

  const { name, price } = req.body;

  const category = req.query.category;

  res.json({
    productId,
    name,
    price,
    category,
  });
});
```

Request:

```text id="axm6lg"
PUT /products/10?category=mobile
```

Body:

```json id="x9olc4"
{
  "name": "iPhone",
  "price": 90000
}
```

---

## Mini Practice

Create API:

```text id="3h2bwu"
POST /students/:id?course=node
```

Send body:

```json id="4nhx9w"
{
  "name": "Prakash",
  "city": "Mumbai"
}
```

Then print:

- params
- query
- body

---

## Topic 6: Express.js Status Codes

### What are Status Codes?

Status codes are numbers sent by the server to tell the client:

- Request successful?
- Error occurred?
- Unauthorized?
- Data not found?

They are part of the HTTP response.

---

# Common Status Code Categories

| Range | Meaning       |
| ----- | ------------- |
| 1xx   | Informational |
| 2xx   | Success       |
| 3xx   | Redirection   |
| 4xx   | Client Error  |
| 5xx   | Server Error  |

---

# Most Important Status Codes

---

## 200 — OK

Request successful.

```js id="9b0zpm"
res.status(200).send("Success");
```

Example:

- Fetch products
- Login success

---

## 201 — Created

New resource created successfully.

```js id="l1cd3u"
res.status(201).json({
  message: "User created",
});
```

Used after:

- signup
- create product
- add order

---

## 400 — Bad Request

Client sent invalid data.

```js id="k4a1fm"
if (!email) {
  return res.status(400).send("Email required");
}
```

---

## 401 — Unauthorized

User not logged in / invalid token.

```js id="pnjlpt"
res.status(401).send("Unauthorized");
```

---

## 403 — Forbidden

User logged in but no permission.

```js id="jpfq2x"
res.status(403).send("Access denied");
```

---

## 404 — Not Found

Route or data not found.

```js id="0h1trt"
res.status(404).send("User not found");
```

---

## 500 — Internal Server Error

Backend/server crash or unexpected issue.

```js id="3hktbq"
res.status(500).send("Something went wrong");
```

---

# How to Send Status Codes

```js id="n2prci"
res.status(200).send("OK");
```

or

```js id="njlwmq"
res.status(201).json({
  success: true,
});
```

---

# Real Backend Example

```js id="6qdu5q"
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  if (email !== "admin@gmail.com") {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  res.status(200).json({
    message: "Login success",
  });
});
```

---

# Best Practices

| Situation      | Status |
| -------------- | ------ |
| Data fetched   | 200    |
| Data created   | 201    |
| Invalid input  | 400    |
| Not logged in  | 401    |
| No permission  | 403    |
| Data not found | 404    |
| Server crash   | 500    |

---

# Mini Practice

Create API:

```text id="n4on77"
POST /register
```

Rules:

- If fields missing → `400`
- If user already exists → `409`
- Success → `201`

---

# 🎉 Day 2 Completed — Express.js Mastery

You covered:

✅ Express basics
✅ Routing
✅ Middleware
✅ Request lifecycle
✅ Params / Query / Body
✅ Status codes

You now understand the foundation of backend API development in Express.js.

Next strong topics could be:

Which topic would you like to study next?

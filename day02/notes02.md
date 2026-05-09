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

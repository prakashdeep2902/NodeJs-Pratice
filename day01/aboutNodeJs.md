## Day 1 Topics

1. What is Node.js
2. Event Loop
3. Single Thread Architecture
4. Non-blocking I/O
5. Modules (`require`, `import`)
6. `fs`, `path`, `http`
7. `process`

---

# Topic 1: What is Node.js ?

## Simple Definition

Node.js is a **JavaScript runtime environment** that allows you to run JavaScript **outside the browser**.

Normally JavaScript runs inside browsers like Google Chrome, Mozilla Firefox, etc.

With Node.js, JavaScript can run on:

- Servers
- Command line
- Desktop tools
- APIs
- Automation scripts
- Real-time apps

---

## Example

Before Node.js:

```js
alert("Hello");
```

This works in browser only.

With Node.js:

```js
console.log("Hello from Node.js");
```

Run in terminal:

```bash
node app.js
```

---

## Why Node.js Was Created

Earlier:

- Frontend = JavaScript
- Backend = PHP, Java, Python, etc.

Then Node.js came and developers could use **JavaScript for both frontend and backend**.

This became very powerful.

---

## Internally Uses

Node.js is built on:

- V8 JavaScript Engine → executes JavaScript very fast
- C++
- Event-driven architecture

---

## Where Node.js Is Used

- REST APIs
- Chat apps
- Real-time systems
- Streaming apps
- Automation tools
- CLI tools
- Microservices

Companies using Node.js include Netflix, PayPal, Uber.

---

## Why Developers Love Node.js

### 1. Fast

Uses V8 engine.

### 2. Same Language Everywhere

Frontend + Backend = JavaScript.

### 3. Huge Ecosystem

Uses npm packages.

### 4. Great for APIs

Very popular for backend APIs.

---

## Interview Questions

### Q1: What is Node.js?

Node.js is an open-source JavaScript runtime built on V8 engine that allows JavaScript to run outside browser.

### Q2: Is Node.js a framework?

No. It is a runtime environment.

### Q3: Is Node.js single-threaded?

Main event loop is single-threaded, but internally uses threads for some operations.

---

## Real Life Analogy

Browser JavaScript = Chef working only in restaurant kitchen.
Node.js = Chef can now work anywhere.

---

## Important Note

Node.js is best for:

- APIs
- Realtime apps
- I/O heavy apps

Not best for:

- Heavy CPU calculations (unless workers used)

---

## Mini Task for You

Create file `app.js`

```js
console.log("I am learning Node.js");
```

Run:

```bash
node app.js
```

---

# Topic 2: What is the Event Loop in Node.js?

The **Event Loop** is the mechanism that lets Node.js handle many tasks efficiently using a mostly single main thread. It continuously checks whether work is ready to run and executes callbacks when operations complete.

It is the core reason Node.js can manage many simultaneous requests without creating one thread per request.

---

## Simple Definition

Think of the Event Loop as a manager that repeatedly does:

1. Check if any completed task is waiting
2. Put its callback on the call stack
3. Execute it
4. Repeat forever until process exits

---

## Why It Exists

Operations like:

- reading files
- database queries
- network requests
- timers
- API calls

take time. If Node.js waited for each one synchronously, the server would freeze.

Instead, Node.js offloads work and the Event Loop handles the callback later.

---

## Real Life Analogy

Imagine a restaurant with one cashier:

- Customer places order
- Cashier sends order to kitchen
- Cashier serves next customer
- When food is ready, cashier calls customer

Cashier = Event Loop
Kitchen = OS / worker threads / async system

---

## Example

```js id="f2n91a"
console.log("Start");

setTimeout(() => {
  console.log("Timer Done");
}, 0);

console.log("End");
```

### Output

```text
Start
End
Timer Done
```

Even with `0ms`, the timer callback waits until current synchronous code finishes.

---

## How It Works Internally

### Call Stack

Where current functions execute.

### Web APIs / Node APIs

Timers, file system, network tasks handled outside stack.

### Callback Queue

Completed callbacks wait here.

### Event Loop

Moves callback from queue to stack when stack is empty.

---

## Flow Example

```js id="k8d5pn"
const fs = require("fs");

console.log("1");

fs.readFile("data.txt", () => {
  console.log("2 File Read");
});

console.log("3");
```

### Output

```text
1
3
2 File Read
```

Because file reading is async.

---

## Event Loop Phases in Node.js (Interview Level)

Node.js has phases such as:

1. Timers (`setTimeout`, `setInterval`)
2. Pending callbacks
3. Idle / prepare
4. Poll (I/O callbacks)
5. Check (`setImmediate`)
6. Close callbacks

You don’t need all phases for beginner level, but know timers and I/O callbacks.

---

## Common Functions Related to Event Loop

### `setTimeout()`

Runs after minimum delay.

### `setImmediate()`

Runs in check phase after I/O.

### `process.nextTick()`

Runs before next event loop cycle (very high priority).

---

## Example

```js id="0b8w4n"
console.log("A");

process.nextTick(() => console.log("B"));

setTimeout(() => console.log("C"), 0);

console.log("D");
```

### Output

```text
A
D
B
C
```

---

## Why Event Loop Is Powerful

Because one server can handle thousands of waiting I/O operations efficiently.

Great for:

- APIs
- Chat apps
- Streaming
- Realtime systems

---

## Interview Questions

### Q1: What is Event Loop?

The Event Loop is Node.js’s mechanism that handles asynchronous callbacks by checking queues and executing ready tasks.

### Q2: Why is Node.js fast?

Because it uses non-blocking I/O with an event-driven loop.

### Q3: Does Event Loop create threads?

No, but Node.js can use background worker threads/libuv thread pool for certain operations.

---

## Mini Task

Predict output:

```js id="p6a1qm"
console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");
```

Answer: `1 3 2`

---

Say **next** for Topic 3: **Single Thread Architecture**

# Topic 3: Single Thread Architecture in Node.js

Node.js is known as a **single-threaded** runtime because the main JavaScript code runs on **one main thread**.

That means your JavaScript instructions are executed one at a time on a single call stack.

---

## Simple Meaning

Only one task can execute on the main JavaScript thread at a given moment.

Example:

```js id="r3j9qa"
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text id="9n4e2t"
A
B
C
```

It runs line by line on one thread.

---

## What is a Thread?

A **thread** is a path of execution inside a process.

Think of it like a worker.

- One thread = one worker
- Multiple threads = many workers

Node.js uses one main JavaScript worker.

---

## Why Node.js Uses Single Thread

Traditional servers often create one thread per request.

That can consume:

- more memory
- more CPU overhead
- slower context switching

Node.js instead uses:

- one main thread
- event loop
- async I/O

This makes it lightweight for many connections.

---

## Important Truth (Interview Favorite)

Node.js is **not only single-threaded**.

### Main JavaScript Execution:

Single-threaded

### Internally Uses Threads For:

- file system operations
- DNS lookups
- some crypto tasks
- compression
- worker threads

Handled by **libuv thread pool**.

So the statement “Node.js is fully single-threaded” is incorrect.

---

## Real Life Analogy

Imagine one receptionist in an office:

- takes requests
- delegates work to departments
- continues serving next person

Receptionist = Main thread
Departments = background workers

---

## Example of Efficient Single Thread

```js id="8k5dtm"
const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", () => {
  console.log("File loaded");
});

console.log("End");
```

Output:

```text id="7p4vsm"
Start
End
File loaded
```

Main thread did not wait.

---

## Problem with Single Thread

Heavy CPU work blocks everything.

Example:

```js id="s0h2xa"
for (let i = 0; i < 10000000000; i++) {}
console.log("Done");
```

During this loop:

- requests may freeze
- timers delayed
- server becomes slow

Because main thread is busy.

---

## Solution for CPU Heavy Work

Use:

- Worker Threads in Node.js
- Child Processes
- Microservices
- Queue systems

---

## Interview Questions

### Q1: Is Node.js single-threaded?

JavaScript execution is single-threaded, but Node.js uses background threads internally.

### Q2: Why use single thread?

Lower memory usage and efficient handling of I/O tasks.

### Q3: What is downside?

CPU-intensive tasks block the event loop.

### Q4: How to solve blocking?

Use Worker Threads or separate services.

---

## Comparison

### Traditional Thread-per-request Server

1000 users = many threads

### Node.js

1000 users = one event loop + async handling

Better for I/O-heavy systems.

---

## Mini Task

Which is dangerous in Node.js?

1. Reading file async
2. Long nested loop for 30 sec

Answer: **2**

---

Say **next** for Topic 4: **Non-blocking I/O**

# Topic 4: Non-blocking I/O in Node.js

**Non-blocking I/O** means Node.js starts an input/output task and **does not wait** for it to finish. It continues executing other code, then handles the result later through a callback, Promise, or `async/await`.

I/O means operations involving external resources such as:

- Files
- Databases
- Network requests
- APIs
- Streams

---

## Simple Meaning

Instead of saying:

> “I will wait here until file is read”

Node.js says:

> “Start reading the file. I’ll do other work. Tell me when done.”

---

## Real Life Analogy

You order tea at a shop.

### Blocking style:

You stand there doing nothing until tea is ready.

### Non-blocking style:

You order tea, sit elsewhere, do work, then collect it when called.

That is how Node.js works.

---

## Blocking Example (Bad for Servers)

```js id="z1k4tp"
const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);
console.log("Next line");
```

Here Node.js waits until file is fully read.

---

## Non-blocking Example (Preferred)

```js id="m4q7ye"
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("Next line");
```

### Output

```text id="2a9cwq"
Next line
(file content later)
```

Node.js continues immediately.

---

## Why It Matters

If your API server blocks often:

- requests become slow
- users wait
- scalability drops

If non-blocking:

- many users can be served together
- faster response handling
- efficient memory usage

---

## Where Non-blocking Is Common

### File System

```js id="j8u2wp"
fs.readFile(...)
```

### HTTP Requests

```js id="g4s1nv"
fetch(...)
```

### Databases

```js id="p7d0ra"
await User.find();
```

### Timers

```js id="n5w2cm"
setTimeout(...)
```

---

## Modern Style with async/await

```js id="6r3ehl"
const fs = require("fs/promises");

async function run() {
  const data = await fs.readFile("data.txt", "utf8");
  console.log(data);
}

run();
```

Looks synchronous, but internally non-blocking.

---

## Blocking vs Non-blocking

### Blocking

One task stops everything.

### Non-blocking

Task runs in background; event loop continues.

---

## Important Interview Point

Node.js is powerful because of:

- Single-threaded event loop
- Non-blocking I/O
- Asynchronous programming model

---

## When Blocking Can Be Okay

Sometimes startup scripts or CLI tools use sync methods:

```js id="4l1hvb"
fs.readFileSync();
```

But in production servers, avoid heavy sync operations.

---

## Interview Questions

### Q1: What is Non-blocking I/O?

It means Node.js initiates I/O work and continues executing without waiting for completion.

### Q2: Why is Node.js scalable?

Because non-blocking I/O lets one process handle many concurrent requests.

### Q3: Example of blocking method?

`fs.readFileSync()`

### Q4: Example of non-blocking method?

`fs.readFile()`

---

## Mini Task

Predict output:

```js id="0s5dte"
const fs = require("fs");

fs.readFile("a.txt", () => console.log("File"));

console.log("Hello");
```

### Answer

```text id="t8m4xz"
Hello
File
```

---

Say **next** for Topic 5: **Modules (`require`, `import`)**

# Topic 6: Core Modules `fs`, `path`, `http` in Node.js

Node.js provides many **built-in modules**. You can use them without installing anything.

Today’s important ones:

1. `fs` → File System
2. `path` → File/Folder Path Handling
3. `http` → Create Web Server

---

# 1. `fs` Module (File System)

Used to:

- create files
- read files
- update files
- delete files
- work with folders

Import:

```js id="a1k8tw"
const fs = require("fs");
```

---

## Read File

```js id="f3m7qy"
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

---

## Write File

```js id="u6p2lc"
fs.writeFile("data.txt", "Hello", (err) => {
  console.log("Saved");
});
```

---

## Append File

```js id="s9r4nx"
fs.appendFile("data.txt", "\nMore text", () => {});
```

---

## Delete File

```js id="e2v7hb"
fs.unlink("data.txt", () => {});
```

---

## Sync Version

```js id="d5j3qa"
const data = fs.readFileSync("data.txt", "utf8");
```

Avoid sync in production APIs.

---

# Interview: `fs`

### Q: Why use `fs`?

To interact with files and directories in Node.js.

---

# 2. `path` Module

Used to safely handle file paths across systems like:

- Microsoft Windows uses `\`
- Linux / macOS use `/`

Import:

```js id="g4n1zs"
const path = require("path");
```

---

## Join Paths

```js id="x7p5kd"
const filePath = path.join(__dirname, "files", "data.txt");
console.log(filePath);
```

---

## Get Extension

```js id="n2c8rm"
path.extname("photo.jpg");
```

Output:

```text id="v0k6pe"
.jpg
```

---

## Base Name

```js id="q5u1wt"
path.basename("/users/test/app.js");
```

Output:

```text id="r9m3yl"
app.js
```

---

## Directory Name

```js id="b8s2jf"
path.dirname("/users/test/app.js");
```

---

# Interview: `path`

### Q: Why use `path.join()`?

To create safe cross-platform paths.

---

# 3. `http` Module

Used to create a web server without installing Express.js.

Import:

```js id="m6d4ya"
const http = require("http");
```

---

## Basic Server

```js id="c1h7vn"
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running");
});
```

Open browser:

```text id="w3t9ep"
http://localhost:3000
```

---

## Request Object (`req`)

Contains:

- URL
- method (`GET`, `POST`)
- headers

```js id="k7r2du"
console.log(req.url);
console.log(req.method);
```

---

## Response Object (`res`)

Send response:

```js id="j4f8qx"
res.write("Hello");
res.end();
```

or

```js id="p2v6sg"
res.end("Done");
```

---

# Route Example

```js id="y8m1ko"
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  } else if (req.url === "/about") {
    res.end("About");
  } else {
    res.end("404");
  }
});
```

---

# Real World Note

Today many developers use Express.js instead of raw `http`, but `http` teaches fundamentals.

---

# Quick Summary

| Module | Use                 |
| ------ | ------------------- |
| `fs`   | File handling       |
| `path` | File path utilities |
| `http` | Create server       |

---

# Interview Questions

### Q1: Which module reads files?

`fs`

### Q2: Which module helps with folder paths?

`path`

### Q3: Which module creates server?

`http`

### Q4: Why use `path.join()`?

Cross-platform path creation.

---

# Mini Task

Create server returning your name:

```js id="z4n7tb"
const http = require("http");

http
  .createServer((req, res) => {
    res.end("Prakash");
  })
  .listen(3000);
```

---

Say **next** for Topic 7: **`process` object in Node.js**

# Topic 7: `process` Object in Node.js

The `process` object is a **global object** in Node.js that gives information and control over the currently running Node.js process.

You do **not** need to import it.

```js id="m8q2va"
console.log(process);
```

---

# Simple Meaning

`process` lets you access:

- command line arguments
- environment variables
- current working directory
- process id
- memory usage
- exit app
- listen to events

Think of it as the control center of your running Node.js app.

---

# 1. Command Line Arguments (`process.argv`)

```js id="f6j1tw"
console.log(process.argv);
```

Run:

```bash id="v2c8ys"
node app.js hello world
```

Output:

```text id="d7m5ka"
[
  'node path',
  'app.js',
  'hello',
  'world'
]
```

Use custom values:

```js id="k4r9pn"
console.log(process.argv[2]);
```

---

# Example

```bash id="s3u1qx"
node app.js Prakash
```

Output:

```text id="a8n6ve"
Prakash
```

---

# 2. Environment Variables (`process.env`)

Used for secrets and configs.

```js id="j5p7lo"
console.log(process.env);
```

Example:

```js id="x1d4kr"
console.log(process.env.PORT);
```

Usually used with dotenv.

```bash id="g2v9ct"
npm install dotenv
```

```js id="r6m3hy"
require("dotenv").config();

console.log(process.env.DB_URL);
```

---

# 3. Current Working Directory

```js id="q9k1ez"
console.log(process.cwd());
```

Returns folder where command was run.

---

# 4. Exit the Program

```js id="u3p8wf"
process.exit();
```

With error code:

```js id="n7d5sb"
process.exit(1);
```

`0` = success
non-zero = error

---

# 5. Process ID

```js id="b1x6mc"
console.log(process.pid);
```

Useful for server management.

---

# 6. Platform Info

```js id="t4h2zr"
console.log(process.platform);
```

Possible outputs:

- `win32`
- `linux`
- `darwin`

---

# 7. Memory Usage

```js id="p6c9ja"
console.log(process.memoryUsage());
```

Used in production monitoring.

---

# 8. Listen for Exit / Signals

```js id="w5n3qy"
process.on("exit", () => {
  console.log("App closed");
});
```

Handle Ctrl + C:

```js id="e8r1ku"
process.on("SIGINT", () => {
  console.log("Stopped");
  process.exit();
});
```

---

# Real World Uses

## Read Port

```js id="y2m7ld"
const port = process.env.PORT || 3000;
```

## CLI Tool

```bash id="o4q9ve"
node app.js add 5 6
```

Use `process.argv`.

## Production Config

- DB URL
- JWT Secret
- API Keys

Stored in `process.env`

---

# Interview Questions

### Q1: What is `process` in Node.js?

A global object that provides info and control over the running Node.js process.

### Q2: What is `process.argv`?

Array of command-line arguments.

### Q3: Why use `process.env`?

To store configuration values securely.

### Q4: What does `process.exit(1)` mean?

Exit program with failure status.

---

# Mini Task

Create file:

```js id="h7u2bn"
console.log("Hello", process.argv[2]);
```

Run:

```bash id="l1v8dp"
node app.js Prakash
```

Output:

```text id="z4m6tr"
Hello Prakash
```

---

# Day 1 Completed ✅

You now covered:

1. What is Node.js
2. Event Loop
3. Single Thread Architecture
4. Non-blocking I/O
5. Modules
6. `fs`, `path`, `http`
7. `process`

---

Say **Day 2** when you're ready for the next set: **NPM, Package.json, Express.js, Routing, Middleware, Nodemon, REST API Basics**

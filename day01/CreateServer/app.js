const https = require("http");

const server = https.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("<h1>Hello World</h1>");
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("<h1>Hello World About</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

const Port = 3000;
server.listen(Port, () => {
  console.log(`Server is running on port Number ${Port}`);
});

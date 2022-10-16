const { copyFile } = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") response.end("Welcome to our homepage");
  if (request.url === "/about") response.end("Welcome to our about page");
  response.end(`<h1>Oops!</h1>`);
});

server.listen(4000);

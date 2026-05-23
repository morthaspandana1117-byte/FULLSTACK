const http = require('http');

const server = http.createServer((req,res) => {
   res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Hello from my Server!");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// QUICK PRACTICE DAY 3

// const http = require('http');

// const server = http.createServer((req,res) => {
//     if (req.url === '/') {
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end("Hello from my Home Page");
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end("Hello to my About Page");
//     }
//     else {
//         res.writeHead(200,{'Content-Type':'text/plain'});
//         res.end("Page Not Found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });
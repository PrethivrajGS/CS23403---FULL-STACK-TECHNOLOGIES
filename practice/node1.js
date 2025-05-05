const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('WELCOME TO GSP HOME');
  } else if (req.url === '/about') {
    res.end('LET ME INTRODUCE MYSELF');
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

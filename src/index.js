process.send = process.send || function () {}

const http = require('http')

const app = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(app);

process.on('SIGINT', () => {
  server.close((err) => {
    process.exit(err ? 1 : 0)
  })
})

server.listen(8080, function () {
  process.send('ready')
})

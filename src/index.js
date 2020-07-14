const ejs = require('ejs')
const express = require('express')
const http = require('http')
const path = require('path')

const Gpio = require('onoff').Gpio;

const pin = new Gpio(17, 'out');

const app = express()
const port = 3000

process.send = process.send || function () {}

const server = http.createServer(app)

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

const index = (req, res) => {
  res.render('index', { value: pin.readSync() })
}

const toggle = (req, res) => {
  const value = 1 - pin.readSync()

  pin.writeSync(value)

  res.send({ value: value })
}

app.get('/', index)

app.get('/toggle', toggle)

server.listen(port, function () {
  process.send('ready')
})

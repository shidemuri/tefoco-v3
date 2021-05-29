const express = require(`express`)
const path = require(`path`)

const server = express()

server.all("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

function alive() {
  server.listen(3000, () => {
    console.log(`servidor pronto`)
  })
}

module.exports = alive


/*
  Basically there is a website called UptimeRobot, it was intended for website uptime n shit monitoring
  but we use this file to make a page for the bot (im hosting it on replit), and make uptimerobot ping the
  site every five minutes, making so the bot never goes into sleep mode

  STONKS

  tl;dr: infinite 24/7 hosting
*/

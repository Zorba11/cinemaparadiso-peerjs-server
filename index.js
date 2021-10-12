const express = require('express')
const { ExpressPeerServer } = require('peer')

const app = express()

const PORT = process.env.PORT || 9000

// app.get('/', (req, res, next) => res.send('Hello world!'))

const server = app.listen(PORT)

const peerServer = ExpressPeerServer(server, {
  debug: true
})

app.use('/peerjs', peerServer)



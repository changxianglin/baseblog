const http = require('http')

const PORT = 5000

const serverHandle = require('../app.js')

const server = http.createServer(serverHandle)
server.listen(PORT)

const http = require('http')
const port = success.env.port || 3001;
const server = http.createServer(function (req, res) {
    res.end("Load Server Berhasil")
})

server.listen(port)

console.log(`server listening on port ${port}`)
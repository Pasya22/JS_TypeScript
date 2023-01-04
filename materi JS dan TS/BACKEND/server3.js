// const http = require('http')
// const port = process.env.port || 3001

// const server = http.createServer(function (req, res) {
//     if (req.url === '/') return responseText(req, res)
//     if (req.url === '/json') return responseJSON(req, res)
//     responseNOTFound(req, res)
// })

// function responseText(req, res) {
//     res.setHeader("content-type", "text/plain")
//     res.end("Hello Word")
// }

// function responseJSON(req, res) {
//     res.setHeader("content-type", "application/json")
//     res.end(JSON.stringify({
//         batch: "batch#12",
//         bootcamp: ["JS", "ReactJS"],
//         batch: "batch#12",
//     }))
// }

// function responseNOTFound(req, res) {
//     res.writehead(404, {
//         "content-type": "text/plain"
//     })
//     res.end("Halaman tidak di temukan")
// }
// server.listen(port)

// console.log(`server3 berhasil ${port}`)
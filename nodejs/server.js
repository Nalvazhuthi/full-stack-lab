import http from 'http'
import url from "url"
import fs from "fs/promises"
import path from 'path'

const PORT = process.env.PORT || 5000

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
    let filePath;
    if (req.url === "/") {
        filePath = path.join(__dirname, 'public', "home.html")
    } else if (req.url === "/about") {
        filePath = path.join(__dirname, 'public', "about.html")
    }

    const data = await fs.readFile(filePath)
    // res.writeHead(500, { "content-type": "application/json" })
    // res.end(JSON.stringify({ message: "Server Error" }))

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(data)

})

server.listen(PORT, () => {
    console.log(`Server Running In Port in ${PORT}`);
})


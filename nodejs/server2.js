import { createServer } from 'http'

const PORT = process.env.PORT

const users = [
    { id: 1, name: "Nal" },
    { id: 2, name: "Vazhuthi" },
    { id: 3, name: "Nanni" },
]

const server = createServer((req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
        res.setHeader('content-Type', 'application/json')
        res.write(JSON.stringify(users))
        res.end()
    } else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404
        res.write(JSON.stringify({ message: "Route Not Found" }))
        res.end()
    }
})

server.listen(PORT, () => {
    console.log("RUNNING...");
})
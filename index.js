// Include http module from Node.js
const http = require('http')

// Define server related variables
const hostname = 'localhost'
const port=3000

// Handle request and response here
const server = http.createServer((req, res) => {
    // Status code
    res.statusCode = 200 //OK
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>This is my first server created in Node.js<h1>' )
})

// Start and listen the server
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`)
})
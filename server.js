const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((request, response) => {
    // Read file synchronously
    try {
        const data = fs.readFileSync('message.txt', 'utf8');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(data);
    } catch (err) {
        console.error('Error reading file:', err);
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.end('Internal Server Error');
    }
});

// Start listening on port 3021
server.listen(3021, () => {
    console.log('Server is listening on port 3021');
});
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('hello!');
    response.end();
});

//listen
server.listen(80);

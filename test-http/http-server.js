var http = require('http');
var url = '127.0.0.1';
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');    
}).listen(1337, url);

console.log('server is running on ' + url);
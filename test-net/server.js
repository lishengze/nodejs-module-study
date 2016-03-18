var net = require('net');
var server = net.createServer(function(socket){
	socket.on ('data', function(data) {
		console.log('Server: data from client ' + data);
		socket.write('Server Socket: Hello World');
	});

	socket.on('end', function() {
		socket.write('Server-Socket: End!');
	});

	console.log('createServer!');
});

server.listen({
	port:8124
},function() {
	console.log('server.listen 8124');
});

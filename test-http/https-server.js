var fs = require('fs');
var options = {
	key:  fs.readFileSync("sfit.key"),
	cert: fs.readFileSync("sfit.cert"),
};
var app  = require('https').createServer(options,onRequest);
var port = 8000;
var url = '127.0.0.1';
app.listen(port, url);
    
function onRequest(request, response){
	try {
			response.writeHead(200, {'Content-Type':'text/plain'});
			response.write('Hello Socket.io');
			response.end();
	}catch (err) {
			console.error(err);
	}
}
console.log('server is running on ' + url);
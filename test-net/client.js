var net = require('net');
var client = net.connect({port:8124}, function(){
  client.write('I\'m client!');
})

client.on('data', function(data){
  console.log('Client: data from server: ' + data);
})

client.on('end', function(){

})

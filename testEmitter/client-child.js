console.log ('client-child.js!\n\n')

// console.log(process.argv);

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

var TestEmitterFunc = function () {
	console.log('TestEmitterFunc');
}

var funcCol = [];
funcCol['TestEmitter'] = TestEmitterFunc;

process.on ('message', function(data) {
	
	// console.log(data);
	
	console.log("client-child: \n");
	console.log(data);
	console.log('\n');
	
	console.log(funcCol);
	
	var func = funcCol[data.event];
	func();
	
	var rspData = {};
	rspData.event = 'TestEmitterCallbackData';
	rspData.callbackData = data.ReqData;
	
	process.send(rspData);
	
	// var func = data.func;
	// func();
})


// emitter.on ('TestEmitter', function (data) {
// 	process.send ({event:'TestEmitter_Data', callbackData: 'Hello World'});
// });

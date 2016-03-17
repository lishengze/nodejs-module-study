console.log 'client-child.coffee!'

emitter = process.argv[process.argv.length - 1];


process.on 'message', (data) ->
		
	console.log "client-child.coffee:  data "
	console.log data
	console.log '\n'
	
	rspData = {};
	rspData.event = 'TestEmitterCallbackData';
	rspData.callbackData = data.ReqData;
	
	process.send rspData
	

# emitter.on 'TestEmitter', (data) ->
# 	process.send {event:'TestEmitter_Data', callbackData: 'Hello World'}

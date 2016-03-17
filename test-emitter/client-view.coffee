# 参考treeView. 创建 panel， 在panel添加button进行测试.

clientMain  = require './client-main.js'
# clientMain  = require './client-main.coffee'

reqData = {};
reqData.name = "tom";
reqData.age  = 24;

TestEmitter = -> clientMain.emitter.emit 'TestEmitter' , reqData

TestProcess = -> clientMain.childProcess.send {event: 'TestEmitter', ReqData: reqData}

clientMain.childProcess.on 'message', (data)->
     console.log 'client-view: from client-child'
     console.log data
     clientMain.emitter.emit data.event, data.callbackData  
	 
clientMain.emitter.on 'TestEmitterCallbackData', (data) ->
	console.log('From client-view: ')
	console.log(data);
					
# TestEmitter();
TestProcess();

# {Disposable} = require 'atom'
# {ScrollView} = require 'atom-space-pen-views'
# clientMain = require './client-main.coffee'
# TestEmitter = -> clientMain.emitter.emit 'TestEmitter' , {}

# module.exports =
# class ClientView extends ScrollView
# 	@content: ->
# 		@div =>
# 			@ol =>
# 				@li click:'TestEmitter', "TestEmitter"
# 	@attached: ->
# 				clientMain.emitter.on 'TestEmitter_Data', (data) ->
# 					console.log('From client-view: ')
# 					console.log(data);
# 	@detached: ->
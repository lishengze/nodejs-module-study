# Created by li.shengze on 2016/3/8.
# 客户端通信主程序, 用于创建子进程， 通过子进程与后台通信，并接受子进程传递的回调数据，再emit 出去。
{EventEmitter} = require 'events'
{fork}         = require 'child_process'

console.log 'client-main.coffee!'

class ClientMain
 constructor: ->

 initialize: ->
   @emitter = new EventEmitter
   childFilePath = './client-child.js'
   @childProcess = fork childFilePath, [@emitter]
   
module.exports = new ClientMain

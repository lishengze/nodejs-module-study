// var spawn = require('child_process').spawn();
// var free = spawn('ll  ', ['-t']);

// // 捕获标准输出并将其打印到控制台 
// free.stdout.on('data', function (data) { 
//  console.log('standard output:\n' + data); 
//  });

// // 捕获标准错误输出并将其打印到控制台 
// free.stderr.on('data', function (data) { 
//  console.log('standard error output:\n' + data); 
//  });

// // 注册子进程关闭事件 
// free.on('exit', function (code, signal) { 
//  console.log('child process eixt ,exit:' + code); 
//  });
 
 
//  var spawn = require('child_process').spawn,
//     grep  = spawn('grep', ['ssh']);

// console.log('Spawned child pid: ' + grep.pid);
// grep.stdin.end();

//  var spawn = require('child_process').spawn,
//     mkdir  = spawn('mkdir', ['lee']);
    
var spawn = require('child_process').spawn,
    ls    = spawn('ls', ['-lt']);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

// var exec = require('child_process').exec; 
//  var cmdStr = 'mkdir lee';
//  exec(cmdStr, function(err,stdout,stderr){
//      if(err) {
//          console.log('get weather api error:'+stderr);
//      } else {
//          /*
//          这个stdout的内容就是上面我curl出来的这个东西：
//         {"weatherinfo":{"city":"北京","cityid":"101010100","temp":"3","WD":"西北风","WS":"3级","SD":"23%","WSE":"3","time":"21:20","isRadar":"1","Radar":"JC_RADAR_AZ9010_JB","njd":"暂无实况","qy":"1019"}}
//          */
//          var data = JSON.parse(stdout);
//          console.log(data);
//      }
//  });
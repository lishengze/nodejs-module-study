// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail in p1')), 3000)
// })
//
// var p2 = new Promise(function (resolve, reject) {
//   //  console.log("")
//   setTimeout(() => resolve(p1), 1000)
// })
//
// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

var p3 = new Promise(function(resolve,reject){
    console.log("test in p3")
  return "from p3"
  // throw new Error ("error in p3")
})

// 判断操作是否是异步操作，是否有then 方法。

p3.then(function(value){
  console.log(value)
  return "from test1"})
// }).then(function(value){
//   console.log(value)
//   return "from test2"
// }).then(function(value){
//   console.log(value)
//   return "from test3"
// }).catch(function(error){
//   console.log(error)
// })

var p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s)
});


var reg = /(http|https):\/\/([\w.]+)\S*/g
var arr = reg.exec(`
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`)
// var reg = /(http|https):\/\/([\w.]+)\S*/g

str.replace(reg, function (res) {
  console.log(res);
})
console.log(arr)
// arr.forEach(item => {
//   console.log(item)
// })
// 一个commonJS模块
var counter = 3;

var obj = {};
setTimeout(() => {
  obj.a = 1;
  counter = 1;
}, 1000);

function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  obj,
  incCounter: incCounter,
};

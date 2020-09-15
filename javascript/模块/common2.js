// main.js 在这个函数里加载这个模块
var mod = require("./common1");

// 手写打印导入的模块
console.log(mod);

// 调用函数，内部的基本数据类型counter++
mod.incCounter();

console.log(mod.counter); // 打印还是原来的3

setTimeout(() => {
  console.log(mod); // 出入 obj:{a: 1} 导入模块内部1秒后obj.a = 1；对象类型浅copy，这边的也会更改
}, 2000);

mod.incCounter = "newFunc";

/**
 * 结论
 * 1、commonjs 输出的是值的浅copy，基本类型修改无效，引用类型可以。
 * 2、既然是copy的，相当于 'var new = old' 了，所以可以任意修改导入进来的变量，因为重新赋值了。
 *
 */

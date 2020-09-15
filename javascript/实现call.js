/* 手写call
 * 第一个参数是需要执行call前面方法，所替换的this对象，后面的是单个参数，而不是数组
 */
Function.prototype.call1 = function (context) {
  var context = context || window;
  // 给 context 添加一个属性
  // call方法前面的是getValue，所以this就是getValue
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this;
  console.log(this);
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1);
  // a.fn = getValue = this  fn就是方法getValue，方法前面的a调用，this就变成了a ===>达到我们的最终目的（改变call前面方法调用的this）
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args);
  // 删除 fn
  delete context.fn;
  return result;
};

var a = { b: 1 };
function c(arg1, arg2, arg3) {
  console.log(this.b + arg1 + arg2 + arg3);
}
c();
c.call(a);
c.call1(a, 1, 2, 3);

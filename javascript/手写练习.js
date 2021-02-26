/**
 * 手写call
 */
Function.prototype.call = function (suzhu) {
  var suzhu = suzhu || window; // 宿主就是传入的第一个参数
  // 取出方法也就是this （a.call）=> this就是该方法
  var fn = this;
  suzhu.fn = fn;

  var arg = [...arguments].slice(1); // 后续参数
  return suzhu.fn(...arg);
};

/**
 * 手写apply
 */
Function.prototype.apply = function (suzhu) {
  var suzhu = suzhu || window; // 宿主就是传入的第一个参数
  // 取出方法也就是this （a.apply => this就是该方法)
  var fn = this;
  suzhu.fn = fn;
  return suzhu.fn(...(arguments[1] ? arguments[1] : []));
};

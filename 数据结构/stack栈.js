/**
 * 先入后出
 * 入栈放在对面最后
 * 出栈出栈内最后面的
 */

var Stack = function () {
  var items = [];
  // 入栈
  this.push = function (item) {
    items.push(item);
  };
  // 出栈 栈顶元素
  this.pop = function () {
    return items.pop();
  };
  // 栈头
  this.front = function () {
    return items[0];
  };
  // 获取栈列表
  this.getItems = function () {
    return items;
  };
  // 检查栈顶
  this.peek = function () {
    return items[items.length - 1];
  };
  // 检测为空
  this.isEmpty = function () {
    return items.length === 0;
  };
  // 栈大小
  this.size = function () {
    return items.length;
  };
  // 清空栈
  this.clear = function () {
    items = [];
  };
};

/**
 * 经典十进制转二进制问题
 */
var divBy2 = function (decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";
  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};

var stack = new Stack();
stack.push(2);
stack.push(1);
stack.push(3);
stack.push(4);

// 通用进制转换函数
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // {6}
  let number = decNumber;
  let rem;
  let baseString = "";
  if (!(base >= 2 && base <= 36)) {
    return "";
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }
  return baseString;
}

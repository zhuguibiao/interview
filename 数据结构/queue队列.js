/**
 * 先入先出
 * 入列放在对面最后
 * 出列出队列最前面的
 */

var Queue = function () {
  var items = [];
  // 入列
  this.enqueue = function (item) {
    items.push(item);
  };

  // 出列
  this.dequeue = function () {
    return items.shift();
  };

  // 对头
  this.front = function () {
    return items[0];
  };

  // 获取队列列表
  this.getQueue = function () {
    return items;
  };

  // 检测为空
  this.isEmpty = function () {
    return items.length === 0;
  };

  // 对列长度
  this.size = function () {
    return items.length;
  };
};

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
// console.log(queue.front());

/**
 *
 * 循环队列
 * 击鼓传花
 *  数到3就淘汰一个人。
 */

var list = ["a", "b", "c", "d", "e", "f"];
var nums = 3;
function getItem(list, nums) {
  var queue = new Queue();
  for (var i = 0; i < list.length; i++) {
    queue.enqueue(list[i]); // 入列；
  }
  while (queue.size > 1) {
    for (var j = 0; j < nums; j++) {
      queue.enqueue(queue.dequeue()); // 先第一个出列，在入列
    }
    queue.dequeue();
  }
  return queue.front();
}

var front = getItem(list, nums);
console.log(front);

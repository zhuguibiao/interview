var arr = [1, 2, 3, [[4, [5]], 6, 7, [8, 9, 10]]];

// use reduce
function reduceFlatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? reduceFlatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

// 使用堆栈
// 注意：深度的控制比较低效，因为需要检查每一个值的深度
// 也可能在 shift / unshift 上进行 w/o 反转，但是末端的数组 OPs 更快
function stackFlatDeep(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop(); // 取出最后一项  出栈
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 反转恢复原数组的顺序
  return res.reverse();
}

// var reduceResult = reduceFlatDeep(arr, 10);
var stackResult = stackFlatDeep(arr, 10);
// console.log(result);
console.log(stackResult);

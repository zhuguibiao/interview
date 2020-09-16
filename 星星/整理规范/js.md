# js 技巧

- 数组非空判断，利用逻辑与短路
```javascript
// 标准方案
array && array.length
```

- 对于获取运算数布尔表达式，可以采用双取反
```javascript
// bad
const boo1 = '' ? true : false;
const boo2 = 2 ? true : false;

// good
const boo1 = !!'';
const boo2 = !!2;
```

- 对于利用 indexOf 函数判断是否存在，应该判断是否大于 -1 或者 小于 0
```javascript
// bad
const boo = [1, 2, 3].indexOf(4) === -1;

// good
const boo = [1, 2, 3].indexOf(4) < 0;
```
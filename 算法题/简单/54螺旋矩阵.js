/*  54. 螺旋矩阵
  给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
  示例 1:
  输入:
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 10, 11, 12 ],
    [ 13, 14, 15 ],
    [ 16, 17, 18 ],
  ]
  输出: [1,2,3,6,9,8,7,4,5]
  
  示例 2:
  输入:
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]
  输出: [1,2,3,4,8,12,11,10,9,5,6,7] */
/**
       * @param {number[][]} matrix
       * @return {number[]}
        4步 
        1：顺序横向 第一行
        2：顺序纵向 最后一列
        3：倒叙横向 最后一行
        4：倒叙纵向 第一列
          。。。
       */
var spiralOrder = function (matrix) {
  debugger;
  if (matrix.length === 0) return [];
  if (matrix[0].length === 0) return [];

  let result = [];
  // ADD FIRST ROW
  result = result.concat(matrix.shift());

  // ADD LAST COL
  for (let i = 0; i < matrix.length - 1; i++) {
    result.push(matrix[i].pop());
  }

  // ADD LAST ROW
  const lastRow = matrix.pop();
  if (lastRow) result = result.concat(lastRow.reverse());

  // ADD FIRST COL
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length) result.push(matrix[i].shift());
  }

  return result.concat(spiralOrder(matrix));
};

var a = [
  [1, 2, 3, 4, 8],
  [4, 5, 6, 4, 8],
  // [7, 8, 9, 4, 8],
  // [10, 11, 12, 4, 5],
  [13, 14, 15, 4, 5],
  // [16, 17, 18, 4, 5],
];
var result = spiralOrder(a);
console.log(result);

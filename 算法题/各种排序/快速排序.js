/* 快速排序
 * QuickSort
 * 找一个中枢点，小于它的移到左边，大于它的移到右边，不停递归
 * 两端两个指针，往中间移动，发现不满足的元素，就交换这两个元素的位置
 */

// 某乎的方法
let moHu = function (arr, begin, end) {
  // 递归出口
  if (begin >= end) {
    return;
  }
  var l = begin; // 左指针
  var r = end; // 右指针
  var temp = arr[begin]; //基准数，这里取数组第一个数
  //左右指针相遇的时候退出扫描循环
  while (l < r) {
    //右指针从右向左扫描，碰到第一个小于基准数的时候停住
    while (l < r && arr[r] >= temp) r--;
    //左指针从左向右扫描，碰到第一个大于基准数的时候停住
    while (l < r && arr[l] <= temp) l++;
    //交换左右指针所停位置的数
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  //最后交换基准数与指针相遇位置的数
  [arr[begin], arr[l]] = [arr[l], arr[begin]];
  //递归处  理左右数组
  moHu(arr, begin, l - 1);
  moHu(arr, l + 1, end);
};

var arr = [23, 334, 54, 3445, 5645, 24, 5634, 5656, 23, 65, 43, 554];
moHu(arr, 0, arr.length - 1);
console.log(arr)

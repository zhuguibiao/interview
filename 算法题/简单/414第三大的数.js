/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [3, 2, 1]
 * 输出: 1
 * 解释: 第三大的数是 1.
  思路1： 1 2 3  每次拿后面的数和中间的2比，
  如果比中间的小，就和左边的比，如果比左边的大，替换，
  如果比中间的大，就和右边的比，如果比右边的大，替换
  全部相等的时候，遇到问题了~ 
*/

/* var thirdMax = function (nums) {
  var mid = nums[0];
  var left = -Infinity;
  var right = -Infinity;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > mid) {
      // 如果是-infinity呢
      if (right === -Infinity) {
        right = nums[i];
      } else {
        // 如果大于右边的值呢
        if (nums[i] > right) {
          left = mid;
          mid = right;
          right = nums[i];
          // 小于呢
        } else if (nums[i] < right) {
          left = mid;
          mid = nums[i];
        }
      }
    } else if (nums[i] < mid) {
      // 如果左边是-infinity呢
      if (left === -Infinity) {
        if (right !== -Infinity) {
          left = nums[i];
        } else {
          right = mid;
          mid = nums[i];
          left = -Infinity;
        }
      } else if (nums[i] > left) {
        left = nums[i];
      }
    }
  }
  if (left === -Infinity) return right;
  return left;
}; */

/*思路2： 1 2 3  直接用3个数，one two three。
 *先和one 比，如果比one大  全部前移
 *再和two 比，如果比two大  后俩个移
 *再和three 比，如果比three大 最后一个替换
 **/
var thirdMax = function (nums) {
  let one = nums[0];
  let two = -Infinity;
  let three = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let now = nums[i];
    if (now == one || now == two || now == three) continue; // 如果存在过就跳过不看
    if (now > one) {
      three = two;
      two = one;
      one = now;
    } else if (now > two) {
      three = two;
      two = now;
    } else if (now > three) {
      three = now;
    }
  }
  if (three == -Infinity) return one;
  return three;
};

// var result = thirdMax([5, 9, 3, 10, 2, 1]);
// var result = thirdMax([3, 2, 1]);
// var result = thirdMax([1, 2, 2]);
var result = thirdMax([1, 1, 1]);
console.log(result);

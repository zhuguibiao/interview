/*  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
        示例:
        输入: [-2,1,-3,4,-1,2,1,-5,4],
        输出: 6
        解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
        进阶:
        如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
     */
/**
 * @param {number[]} nums
 * @return {number}
 * 思考：
 */
// 暴力法
// var maxSubArray = function (nums) {
//   var result = -Infinity;
//   // debugger;
//   for (var i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (var j = i; j < nums.length; j++) {
//       sum += nums[j];
//       result = Math.max(sum, result);
//     }
//   }
//   return result;
// };
// 动态规划
var maxSubArray = function (nums) {
  var pre = 0;
  var maxs = nums[0];
  // debugger;
  for (var i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    maxs = Math.max(maxs, pre);
  }
  return maxs;
};

// var result = maxSubArray([1, 2, 3, 4, 5]);
// console.log(result);

var rob = function (nums) {
  const len = nums.length;
  if (len == 0) return 0;
  const dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  console.log(dp);
  return dp[len];
};
rob([1, 2, 3, 1]);

var NumArray = function (nums) {
  let dp = [0];
  for (let i = 0, len = nums.length; i < len; i++) {
    dp.push(dp[i] + nums[i]);
  }
  console.log(dp);
  this.re = dp;
};

// NumArray([1,2,3,5,-1,-2])
//   [0, 1, 3, 6, 11, 10, 8]

// 对于当前的nums[i]
//如果nums[i-1] >= 0 dp[i-1] >= 0 则 dp[i] = dp[i-1] + nums[i];
var maxSubArray2 = function (nums) {
  // dp[i]表示以i结尾的最大连续子序列
  var dp = [nums[0]];
};

maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

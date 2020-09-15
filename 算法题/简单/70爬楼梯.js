/** 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1 || n == 2) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};
var result = climbStairs(10);
console.log(result);

/**
 * dp动态规划
 * dp[0]算1 1 => 1; 2 => 2 ; f(x) = f(x-1) + f(x-2)
 * @param {*} n
 */
var climbStairsDp = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
var result1 = climbStairsDp(10);
console.log(result1);

/**
 * dp动态规划优化版
 * 将数组替换成常量
 * @param {*} n
 */
var climbStairsDpYH = function (n) {
  let prev = 1;
  let cur = 1;
  for (let i = 2; i < n + 1; i++) {
    const temp = cur; // 暂存上一次的cur
    cur = prev + cur; // 当前的cur = 上上次cur + 上一次cur
    prev = temp; // prev 更新为 上一次的cur
  }
  return cur;
};
var result2 = climbStairsDpYH(10);
console.log(result2);

/*  14. 最长公共前缀
        编写一个函数来查找字符串数组中的最长公共前缀。
        如果不存在公共前缀，返回空字符串 ""。
        示例 1:

        输入: ["flower","flow","flight"]
        输出: "fl"
        示例 2:

        输入: ["dog","racecar","car"]
        输出: ""
        解释: 输入不存在公共前缀。
      */
/**
 * @param {string[]} strs
 * @return {string}
 * 思考：先找到数据长度最少的一个，然后逐个减一对比，最后输出，公共前缀
 */
var longestCommonPrefix = function (strs) {
  /*   if (!strs.length) return "";
          var minLength = Infinity;
        var str = "";
        for (var i = 0; i < strs.length; i++) {
          if (strs[i].length < minLength) {
            minLength = strs[i].length;
            str = strs[i];
          }
        }
        // 先比"flow" 再 "flo" 再 "fl" 再 "f" 如果都没有就return ""，有就返回对应的
        // 比较的话用for 循环，遇到不对的就break，再切str，继续循环比较。如果都满足了就返回了。
         for (var i = minLength; i > 0; i--) {
          for (var j = 0; j < strs.length; j++) {
            if (strs[j].slice(0, minLength) !== str) {
              str = str.slice(0, minLength - 1);
              minLength -= 1;
              break;
            }
          }
        } */

  // 针对上面的for循环优化，改用while
  if (!strs.length) return "";
  let len = strs[0].length;
  for (let str of strs) {
    len = Math.min(len, str.length);
  }
  let s = strs[0].substr(0, len);
  //let idx = 1;
  // while (idx < strs.length) {
  //   while (strs[idx].indexOf(s)) {
  //     s = s.substr(0, s.length - 1);
  //     if (!s.length) {
  //       return "";
  //     }
  //   }
  //   idx++;
  // }
  for (var i = len; i > 0; i--) {
    for (var j = 0; j < strs.length; j++) {
      if (strs[j].slice(0, len) !== s) {
        s = s.slice(0, len - 1);
        len -= 1;
        break;
      }
    }
  }
  return s;
};

/**
 * 方案二：结果初始化为""，然后加上数组的第一项去找
 *
 */
// var longestCommonPrefix = function (strs) {

// }
var result = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(result);

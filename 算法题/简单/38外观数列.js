/* 38. 外观数列
      「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
      1.     1
      2.     11
      3.     21
      4.     1211
      5.     111221
      1 被读作  "one 1"  ("一个一") , 即 11。
      11 被读作 "two 1" ("两个一"）, 即 21。
      21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
      给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
      注意：整数序列中的每一项将表示为一个字符串。 */

/**
 * @param {number}
 * @return {string}
 * 思考：
 *    输入数为n ，从第一个一个个算出来，一直到n，那么怎么算呢？？
 *    出现重复的数字的次数 加上出现的重复数字就可以了啦~
 *    那么，怎么判断重复的数字和次数呢
 *      例如： 112113
 *    那么，试试呗
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  if (n === 2) return "11";
  var str = "21";
  for (var i = 3; i < n; i++) {
    var strArray = str.split("");
    str = "";
    var count = 1;
    // Loop through current nth level line
    for (var j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
};

// var result = countAndSay(4);
var result = countAndSay(5);
// var result = countAndSay(6);
console.log(result);

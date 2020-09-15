var strStr1 = function (haystack, needle) {
  if (!needle) return 0;
  var reslut = -1,
    isComplete = false,
    len = haystack.length,
    index = 0;

  debugger;
  while (index < len - index && !isComplete) {
    if (haystack[index] === needle[0]) {
      reslut = index;
      for (var j = 0; j < needle.length; j++) {
        if (haystack[index + j] !== needle[j]) {
          reslut = -1;
          isComplete = false;
          break;
        }
      }
      isComplete = true;
    }
    index++;
  }
  console.log(reslut);
  return reslut;
};

// var a = strStr((haystack = "mississippi"), (needle = "issip"));

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
        输入: s = "LEETCODEISHIRING", numRows = 4
        输出: "LDREOEIIECIHNTSG"
        解释:
        L     D     R
        E   O E   I I
        E C   I H   N
        T     S     G
      */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  var reslutArr = [];
  var reslut = "";
  var cenShu = 0;
  var direct = +1;
  for (var i = 0; i < numRows; i++) {
    reslutArr[i] = "";
  }
  for (var j = 0; j < s.length; j++) {
    reslutArr[cenShu] += s[j];
    if (j != 0 && j % (numRows - 1) === 0) {
      direct = -direct;
    }
    cenShu += direct;
  }
  for (var a = 0; a < numRows; a++) {
    reslut += reslutArr[a];
  }
  return reslut;
};

var a = convert(
  `Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers,`,
  2
);
console.log(a);

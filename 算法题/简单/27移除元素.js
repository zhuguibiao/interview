/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0,
    last = nums.length - 1;
  while (index <= last) {
    if (nums[index] === val) {
      nums[index] = nums[last];
      last--;
    } else {
      index++;
    }
  }
  return index;
};
removeElement([3, 1, 2, 1, 2, 2, 3], 3);

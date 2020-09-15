/*归并排序
归并排序（MERGE-SORT），分治策略
- 分(divide): 将问题分成一些小的问题然后递归求解
- 治(conquer): 分的阶段得到的各答案"修补"在一起
时间复杂度O(nlogn)
*/

function mergeSort(unsortArray) {
  if (unsortArray.length < 2) {
    return unsortArray;
  }
  const middleLength = Math.floor(unsortArray.length / 2);
  const left = unsortArray.slice(0, middleLength);
  const right = unsortArray.slice(middleLength, unsortArray.length);
  console.log(mergeSort(left))
  console.log(mergeSort(right))
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mergeSort([222, 33, 4, 55]));

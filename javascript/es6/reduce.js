const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
};
array1.reduce(reducer, 5)

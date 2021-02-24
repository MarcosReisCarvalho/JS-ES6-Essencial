const arr = [1, 2, [3, 4, [5, 6]]];

const newArr = arr.flat(); // Profundidade será um caso não seja especificada
const nums = arr.flat(2);

// [1, 2, 3, 4]
console.log(arr)
console.log(newArr)
console.log(nums)
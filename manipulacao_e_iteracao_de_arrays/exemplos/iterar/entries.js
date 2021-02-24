const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

const num1 = arrIterator.next();
// [value:[0, 1], done: false]

const num2 = arrIterator.next();
// [value:[1, 2], done: false]

const num3 = arrIterator.next();
// [value:[2, 3], done: false]

const num4 = arrIterator.next();
// [value:[3, 4], done: false]

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
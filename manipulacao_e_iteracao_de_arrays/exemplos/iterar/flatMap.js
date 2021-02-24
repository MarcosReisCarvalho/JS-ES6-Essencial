const arr = [1, 2, 3, 4];

const newArr = arr.flatMap(value => [value * 2]); 
const newArr2 = arr.flatMap(value => [[value * 2]]); 

console.log(arr);
console.log(newArr);
console.log(newArr2); //executa o flat

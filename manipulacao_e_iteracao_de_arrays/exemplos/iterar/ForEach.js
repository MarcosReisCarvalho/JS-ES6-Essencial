const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

const fruta = ['melancia', 'pera', 'goiaba','maçã'];

fruta.forEach((value, index) => {
    console.log(`${index}: ${value}`)
});
fruta.forEach((value, index, arr) => {
    console.log(`${index}: ${value} ${arr}`)
});
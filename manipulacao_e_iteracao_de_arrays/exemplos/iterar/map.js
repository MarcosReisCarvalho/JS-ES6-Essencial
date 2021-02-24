//Retorna novo array

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(value => value * 2)

console.log(newArr)

// Novo exemplo

const frutas = ['acerola', 'goiaba', 'amora']

const newFrutas = frutas.map((value, index) => `${index}: ${value}`);

console.log(newFrutas)
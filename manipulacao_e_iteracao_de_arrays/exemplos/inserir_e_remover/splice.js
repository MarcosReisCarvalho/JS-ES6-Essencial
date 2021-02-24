// O splice vai mexer no array , ele é mutável

const arr = [1, 2, 3, 4, 5];

arr.splice(2);
// [3, 4, 5]

console.log(arr);
// [1, 2]

arr.splice(0, 0, 'first'); // (1.param:onde vai mexer no array, 2.param:quantos itens serão removidos, 3.param:o que será adicionado)
// []

console.log(arr);
// ['first', 1, 2]
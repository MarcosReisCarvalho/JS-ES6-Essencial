const arr = [1, 2, 3, 4, 5];

// pra cada iem do array essa fução será executada(total = é que vai retornar += value, 0 = qual é o tipo dela ? ela começa com um inteiro 0)
const reduceMethod = arr.reduce((total, value) => total += value, 0);
// "15"
console.log(reduceMethod);

/*********************/

const students = [
    {name: 'John', grade: 4},
    {name: 'Cris', grade: 3},
    {name: 'Jasmine', grade: 7}
];

const media = students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length

const name = students.reduce((studentNames, student) => studentNames += student.name + " ", '');

console.log(media);
console.log(name);
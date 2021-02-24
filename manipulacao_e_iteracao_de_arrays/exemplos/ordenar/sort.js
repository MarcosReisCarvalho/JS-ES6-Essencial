const students = [
    {name: 'John', grade: 4},
    {name: 'Cris', grade: 3},
    {name: 'Jasmine', grade: 7}
];

const sort1 = students.sort((current, next) => current.grade - next.grade);
const sort2 = students.sort((current, next) => next.grade - current.grade);

console.log(sort1);
// retorna do menor para o maior

console.log(sort2);
// retorna do maior para o menor
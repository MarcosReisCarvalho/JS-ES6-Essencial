const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some( value => value % 2 === 0 );

console.log(hasSomeEvenNumber);
// true

/***********************/

const students = [
    {name: 'John', grade: 4},
    {name: 'Cris', grade: 3},
    {name: 'Jasmine', grade: 7}
];

const getGrade = students.some(student => student.grade >= 7);
const getStudent = students.find(student => student.grade >= 7);
const getIndex = students.findIndex(student => student.grade >= 7);

console.log(getGrade);
console.log(getStudent);
console.log(getIndex);
const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jeniffer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

function getLowerGrade(studentsLists){
    return studentsLists.filter(student => student.grade < 7);
}

console.log(`Alunos aprovados: `);
console.log(getApprovedStudents(students));

console.log(`\n Alunos reprovados: `);
console.log(getLowerGrade(students));

console.log(`\n Lista de alunos: `);
console.log(students);

console.log(`\n Primerio aluno(a) da lista e sua nota: `);
console.log(` Nome: ${students[0].name} \n Nota: ${students[0].grade}`);

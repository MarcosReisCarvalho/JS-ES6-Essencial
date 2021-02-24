//Array também é um objeto
//Permite a criação de várias outras estruturas de dados, tipos primitivos

const users = ['Guilherme', 'Pedro', 'Jeniffer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jeniffer',
        age: 18,
        gender: gender.WOMAN
    }
];

//O que conseguimos fazer com Arrays ?
//Assim como strings

//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
//forEach Para cada item executa uma função
persons.forEach((person, index, arr )=> {
    console.log(`Nome: ${person.name} index: ${index}`, arr)
})

/*Os métodos a seguir não alterão a referência do objeto*/

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista, apenas com homens:', mens);

//Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\n Pessoas com a adição do course:', personsWithCourse
);

//Transformar um array em outro tipo 
//primeiro e segundo dentro da function
//Primeiro parametro será o novo tipo que irá retornar, no caso variavel
//Segundo item que está iterando
//Terceiro valor da propriedade(no caso "age = 0"), 0
const totalAge = persons.reduce((age, person) => {
    age += person.age; //somando cada idade nessa variável
    return age; // tem que retorna a propriedade para funcionar
}, 0);

console.log('\n Soma de idade das pessoas:', totalAge);

//Juntando operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0);
const soma = totalEvenAges.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idades das pessoas que possuem idade par', totalEvenAges);
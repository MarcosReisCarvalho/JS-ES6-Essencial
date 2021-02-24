//const

const name = "marcos";

//Não podemos alterar o valor 
//name = 'joão';

const user = {
    name: 'Marcos'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar, reatribuir o usuário
/*
user = {
    name: 'Marcos'
};
*/

const persons = ['Guilherme', 'Pedro', 'Jenniffer'];

//Podemos adicionar novos items
persons.push('Marcos');
//['Guilherme', 'Pedro', 'Jenniffer', 'Marcos'];

//podemos remover um item
persons.shift();
//['Pedro', 'Jenniffer', 'Marcos'];

//podemos alterar diretamente
persons[1] = 'James'
//[ 'Pedro', 'James', 'Marcos'];

console.log('\n Array após as alterações: ', persons);
//funções para utilizar nos objetos

const user = {
    name: 'Marcos',
    lastName: 'Reis de Carvalho'
}

//Recupera as chaves do objeto
console.log(' Propriedades do objeto user: ', Object.keys(user));

//Recupera os valoress das chaves do objeto 
console.log('\n Valores das propriedades do objeto user: ', Object.values(user));

//Recupera um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\n Lista de propriedades e valores: ', Object.entries(user));

//Mergear propriedades de objetos
//COLOCAR CHAVES COMO PRIMEIRO PARA MANTER A IMUTABILIDADE 
//Primeiro parametro é o target(objeto), segundo parametro novos objetos(propriedades)
Object.assign({}, user, {fullName: `${user.name} ${user.lastName}`});

console.log('\n Adiciona a propriedade fullName no objeto user', user);

//Nesse exemplo, para manter a imutabilidade, o primeiro parametro é um {}, novo objeto 
//segundo parametro é o ojeto em que voce está se baseando
//terceiro, ou mais, é o que você está inserindo
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 20}, {car: "Gol bolinha"}));

//Previne Todas as alterações em um objeto
const newObj = {foo:'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo'

console.log('\n Variável newObj após as alterações:', newObj);

//Permite apenas a alteração devalores das propriedades existentes em um objeto
const person = { name: 'Guilheme' };
Object.seal(person);
console.log("\n Variável antes da alteração: ",person)

person.name = 'João';
delete person.name;
person.age = 26;

console.log('\n Variável person após alterações: ', person);
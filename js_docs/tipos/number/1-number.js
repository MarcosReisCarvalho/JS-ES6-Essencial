const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log(' Número transformado em string: ', typeof numberAsString);

//Rertorna número com um número de duas casas decimais
//o parametro retorna a quantidade de casas decimais escolhidas
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais: ', fixedTwoDecimals);

//Transforma uma string em float
console.log('\n String parseada para float: ', parseFloat('13.22'));

//Transforma uma string em int
console.log('\n String parseada para int: ', parseInt('13.20'));
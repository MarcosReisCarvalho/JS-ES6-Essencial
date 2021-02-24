//Retorna o tamanho do texto
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText =  'Texto'.split('x');
console.log('\n Array com as posições separadas pelo delimitador: ', splittedText);

//busca por um valor e subsitui por outro
const replacedText = 'Texto'.replace('Texto', 'otxeT');
console.log('\n Substituição de valor: ', replacedText);

//Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\n Última letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\n Valor da string da primeira letra menos a última', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\n Valor da string da segunda letra até a última: ', secondToEnd);

//Retorna N caracteres a partir de uma posição
//substr(posição na string, número de caracteres)
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\n As duas letras primeiras letras: ', twoCharsBeforeFirstPos);
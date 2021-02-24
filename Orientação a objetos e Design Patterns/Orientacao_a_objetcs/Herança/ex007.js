// Executar no console do navegador

function Cachorro() {};

Cachorro.prototype.latir = function() {}

const c = new Cachorro();

console.log(c.__proto__); //no navegador não precisa do 'console.log()'
Cachorro.prototype.test = function() {}

console.log(c.__proto__)
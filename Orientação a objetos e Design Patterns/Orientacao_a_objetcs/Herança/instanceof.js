// outra forma de ver é decorbrir ´de quem é a instancia, de quem foi criada

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal);
// true
console.log(cachorro instanceof Function);
// False
'use strict';

function animal() {
    this.qtdePatas = 4;
}

const cachorro = new animal();

console.log(cachorro.qtdePatas);
// 4

/******************/

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);
// True
console.log(Animal.__proto__ === Function.prototype);
// True
// Utilizando classes ES6, método moderno

'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde){
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: 4}

/* Método antigo */

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pitbull = new Cachorro(false);

console.log(pitbull);
// Cachorro { qtdePatas: 4, morde: false }
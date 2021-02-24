'use strict';

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


/*******Método antigo de fazer********/

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {};

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
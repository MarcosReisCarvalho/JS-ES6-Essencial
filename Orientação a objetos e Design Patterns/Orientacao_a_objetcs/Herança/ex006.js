'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4)

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
}

//o 'this' vai apontar para o pug
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
// sempre que o 'new' for utilizado na criação de algum cachorro as funções latir e movimentar serão criadas novamente

/*Como contornar esse problema*/

'use strict';

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}


function Cachorro(morde) {

    this.qtdePatas = 4;
    this.morde = morde;
}

//prototype tem a definição do meu Objeto
Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

//o 'this' vai apontar para o pug
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
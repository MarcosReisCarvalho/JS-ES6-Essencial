'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Marcos');

console.log(p);
// Person {getName: [function], setName: [function]}

p.getName();
// Marcos

p.name;
// undefined

p.setName('Thiago');
p.getName();
// Thiago

/****versão que funciona na versão 12 do node (implementado no node)*****/

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

console.log(Person);
console.log(Person.name);
Person.name = 'Foo';
console.log(Person.name)
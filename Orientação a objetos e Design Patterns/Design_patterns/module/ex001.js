// Não é possivel utilizar o import nesse arquivo, utilize o babel

class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from './ex001';
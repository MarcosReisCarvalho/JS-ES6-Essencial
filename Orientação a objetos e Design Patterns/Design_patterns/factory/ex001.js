// Não é factory

function FakeUser() {
    this.name: 'Guilherme';
    this.lastName: 'Cabrini';
}

const user = new FakeUser();

// É factory

/*

function FakeUser(name) {
    return {
        name,
        lastName: 'Cabrini'
    }
}

const user = FakeUser('marcos');

console.log(user.name);
console.log(user);

*/

function Pessoa(customProperties) {
    return {
        name = 'Marcos',
        lastName: 'Cabrini',
        ...customProperties
    }
}

const p = Pessoa({name:'custom Name', age: 20});

console.log(p);
//Os dados nunca irão mudar
//Nós criaremos novos dados baseados nos dados anteriores

const user = {
    name: 'Marcos',
    lastName: 'Reis de Carvalho'
};

function getUserWithFullName(userList){
    return {
        ...user, //spread operator
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(user);
console.log(userWithFullName);
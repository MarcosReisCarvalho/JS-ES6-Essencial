(() => {
    this.name = "Nome no contexto de criação";
    //O this sempre vai referenciar esse escopo de função
    //vai chamar o this escrito acima
    const getNameArrowFn = () => this.name;

    //Em funções normais o this vai referenciar no contexto em que ela foi executada
    //vai chamar o this da const user
    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de função',
        getNameArrowFn,
        getName
    }

    /*
    //Quando a chave e o valor do objeto essa atribuição não é necessária
    const user = {
        name: 'Nome no objeto de função',
        getNameArrowFn: getNameArrowFn,
        getName: getName
    }
    */

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

/*
global.name = "Nome no contexto de criação";

//Nesse caso this.name não existe
const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de função',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
*/
new foo ();

/*
O que ocorre quando utilizamos o 'new'

1 - Um novo objeto é criado, herdando o foo.prototype;
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado no passo 1

*/

//Fazer isso no console do navegador

function Pessoa(name) {
    this.name = name;
}
const p = new Pessoa('Marcos');

console.log(p)

function PessoaN(name) {
    this.name = name;
    return {
        name:'Teste'
    }
}

const p2 = New PessoaN('Marcos');

console.log(p2)
var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);

})(); //Esse segundo () está instanciando a função


// Hoisting da variável "var test;"
/*
var test = 'example';

(() => {
    var test;

    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);

})();
*/
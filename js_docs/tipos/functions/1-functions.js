
//essas funções funcionam da da mesma forma e tem a mesma função
//não recebem parametros e retornam alguma coisa
//Arrow functions tem retorno implícito
//não tem necessidade de escrever "return" quando se retorna apenas uma expressão
function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //Mais de uma expressão
    //if, declaração de variável
    return 'Code here';
}

//Funções também são objetos
//É possível criar propriedades dentro das funções
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParm => console.log(fnParm());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handLeFnExecution = controlFnExec(fn);

handLeFnExecution(true); //Executará a função fn
handLeFnExecution();     //Não executará a função fn


//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}
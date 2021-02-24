//eleva a função ou variável no ambiente em que se encontram, seja de bloco, função ou global(closure)
//hoisting só eleva a criação da variável e não a sua atribuição,ou seja o seu valor atribuído.

function fn(){
    console.log(text);

    var text = "Exemplo";

    console.log(text);
}

fn();

//O que elevar significa
// a variável foi içada para o começo da função por isso não retorna um erro, mas sim um "undefined"

/*
function fn(){
    var text;
    
    console.log(text);

    text = "Exemplo";

    console.log(text);
}
*/
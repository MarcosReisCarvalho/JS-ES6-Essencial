// const

(() => {
    const test = 'valor da função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        const test = 'valor if';
        console.log(`Valor dentro do if: "${test}"`);
    }

    if(true){
        const test = 'Valor de outro if';
        console.log(`Valor de outro if: "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`)
})();
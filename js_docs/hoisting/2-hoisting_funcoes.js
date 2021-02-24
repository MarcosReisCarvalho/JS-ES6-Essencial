function fn(){
    log("Hoisting de função");

    function log(value){
        console.log(value);
    }    
}

fn();

//O que está acontecendo com a função log()
//A função é içada como um todo para o topo da função em que ela foi declarada

/*
function fn(){

    function log(value){
        console.log(value);
    }
    
    log("Hoisting de função");
}
*/
// for...in
// (i) vai retornar a quantidade de index(propriedade) e o nome das propriedades sem seus valores
let arr = [3, 5, 7];
arr.foo = "hello";

for ( let i in arr ) {
    console.log(i);     // logs "0", "1", "2", "foo"
}
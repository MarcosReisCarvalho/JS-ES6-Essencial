// Igual (==)
// Retorna verdadeiro caso os operandos sejam iguais. 3 == var1
"3" == var1
3 == '3'

// Não igual (!=)
// Retorna verdadeiro casos os operandos sejam iguais e do mesmo tipo. Veja também Object.is  e igualdade
3 === var1

// Estritamente não igual (!==)
// Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
var1 !== "3"
3 !== '3'

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.
var2 > var1
"12" > 2

// Maior que ou igual (>=)
// Retornna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.
var2 >= var1
var1 >= 3

// Menor que (<)
// Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
"12" < "2"

// Menor que ou igual (<=)
// Retorna verdadeiro caso o operando seja menor que o da direita
var1 <= var2
var2 <= 5
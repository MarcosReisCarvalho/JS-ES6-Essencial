// AND lógico (&&)
exp1 && exp2

var a1 = true   && true;               //t && t retorna true
var a2 = true   && false;              //t && f retorna false
var a3 = false  && true;               //f && t retorna false
var a4 = false  && (3 == 4);           //f && f retorna false
var a5 = 'Gato' && 'Cão'               //t && t retorna Cão
var a6 = false  && 'Gato';             //f && t retorna false
var a7 = 'Gato' && false;              //t && f retorna false

// OU lógico (||)
exp1 || exp2

var 01 = true   || true;               //t || t retorna true
var 02 = false  || true;               //f || t retorna true
var 03 = true   || false;              //t || f retorna true
var 04 = false  || (3 == 4);           //f || f retorna False
var 05 = "Gato" || "Cão";              //t || t retorna Gato
var 06 = false  || "Gato";             //f || t retorna Gato
var 07 = "Gato" || false;              //t || f retorna Gato

// NOT lógico (!)
!exp1

var n1 = !true;    // !t retorna false
var n1 = !false;   // !t retorna true
var n1 = !"Gato";  // !t retorna false


//String preenchida com valor é verdadeiro


//TRUE preenchidos
" "
1
["teste"]

//FALSE
""
0
[]

!! //conversão pra boolean
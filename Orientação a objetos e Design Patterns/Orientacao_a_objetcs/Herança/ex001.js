'use strict';

const myText = 'Hello prototype';

myText.split(''); // <-- De onde vem esse split ?

/*Mesma declaração que a de cima*/

'use strict';

// string função construtora
const myText = String('Hello prototype');

console.log(myText.__proto__.split);
// function split() {[native code]}

/******************/

'use strict';

// string função construtora
const myText = String('Hello prototype');

/*__proto__ aponta para o prototype de String*/
console.log(myText.__proto__.split === String.prototype.split);
// True

console.log(myText.constructor === String);
// True
//__proto__ -> prototype -> constructor
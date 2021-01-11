// Strings são indexadas, ou seja cada caractere tem um índice. O índice 0 representa o primeiro dígito.

let umaString = "Um texto qualquer"; // Criando uma String

console.log(umaString[4]);// Verificando o valor na posição 4: e

console.log(umaString.charAt(6))// Identifica o valor de uma posição específica

let tamanho = umaString.length;// Verifica o tamanho da string: 17

console.log(tamanho);

console.log (umaString.concat(` em um lindo dia`))// Forma de concatenar texto

console.log (`${umaString} em um lindo sábado`) // Outra forma de concatenar texto

console.log (umaString.indexOf('texto')); // Procura a posição de uma letra na String


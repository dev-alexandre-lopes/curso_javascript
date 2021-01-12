/*
Strings:

Uma string é uma sequência de letras, números, caracteres especiais e valores aritméticos ou 
combinação de todos. Strings podem ser criados colocando o literal de string (ou seja, caracteres 
de string) entre aspas simples (') ou aspas duplas ("). São indexadas, ou seja cada caractere tem 
um índice. O índice 0 representa o primeiro dígito.

As sequências de escape também são úteis para situações em que você deseja usar caracteres que não 
podem ser digitados em um teclado. Aqui estão algumas outras sequências de escape mais comumente 
usadas.

\n  é substituído pelo caractere de nova linha;
\t  é substituído pelo caractere de tabulação;
\r  é substituído pelo caractere de retorno de carro;
\b  é substituído pelo caractere backspace;
\\  é substituído por uma única barra invertida (\);

Propriedade e Métodos:

.length  - Retorna o tamanho de uma string;
charAt() - Retorna o caractere no índice especificado.
indexOf()- Retorna o índice ou posição da primeira ocorrência de uma "string" especificada dentro de uma string.

*/ 

let texto = "Um texto qualquer"; // Criando uma String

console.log (texto);

let tamanho = texto.length; // Verifica o tamanho da string: 17

console.log (tamanho);

console.log(texto[6]);// Verificando o valor na posição 6: t

console.log(texto.charAt(1))// Identifica o valor de uma posição específica: m

let pos = texto.indexOf('texto'); // Retorna a posição da primeira ocorrência;

console.log (pos);



/*

console.log (umaString.concat(` em um lindo dia`))// Forma de concatenar texto

console.log (`${umaString} em um lindo sábado`) // Outra forma de concatenar texto

console.log (umaString.indexOf('texto')); // Procura a posição de uma letra na String

*/

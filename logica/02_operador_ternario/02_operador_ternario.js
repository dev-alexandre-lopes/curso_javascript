/*
Operador Condicional (Ternário):

O operador condicional ternário é um atalho para o condicional if.

condition ? expr1 : expr2

condition é uma expressão que é avaliada como true ou false.

expr1, expr2 são expressões com valores de qualquer tipo.

O operador condicional (ternário) é o unico operador JavaScript que possui três operandos.

É uma boa prática usar o operador ternário para facilitar a leitura do código. 
Se a lógica contiver muitas instruções if else, não é indicado usar os operadores ternários.

*/

//Exemplo de operador ternário:

let membro = false;
let taxa = membro ? "R$5.00" : "R$50.00";
console.log(taxa);
console.log("A taxa é " + (membro ? "R$5.00" : "R$50.00"));

//Operador ternário outra forma:

const a = 9;
const b = 3;
const resultado = (a > b) ? "a é maior que b" : "b é maior que a";
console.log(resultado);


//Outro exemplo:

const pont = 874;
//(Condição) ? "Valor para Verdadeiro": "Valor para Falso"
const tipoCliente = pont >= 1000 ? "Cliente Vip": "Cliente Normal";
//Setando uma cor padrão
const corPadrao = 'Azul';
const corUsuario = corPadrao || 'Preta';
console.log(tipoCliente, corUsuario);
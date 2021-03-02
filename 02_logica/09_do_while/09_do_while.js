/*
While e Do While:

O loop do-while é uma variante do loop while, que avalia a condição no final de cada iteração do loop. 
Com um loop do-while, o bloco de código é executado uma vez e, em seguida, a condição é avaliada; 
se a condição for verdadeira, a instrução é repetida enquanto a condição especificada avaliada for verdadeira. 
A sintaxe genérica do loop do-while é:

do {
    // Code to be executed
}
while(condition);

Observação Importante:

-> O loop while difere do loop do-while de uma maneira importante - com um loop while, a condição a ser avaliada é testada no início 
de cada iteração do loop, então se a expressão condicional for avaliada como falsa, o loop nunca será executado . 

-> Com um loop do-while, por outro lado, o loop sempre será executado uma vez, mesmo se a expressão condicional for avaliada como 
falsa, porque, ao contrário do loop while, a condição é avaliada no final da iteração do loop e não no início.

*/

//Exemplo de While:

const nome = 'Mario'
let i = 0;

while (i <= nome.length) {
    console.log(nome[i]);
    i++;
}
console.log('Continua o código');

//Outro exemplo de While:

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
const min = 1;
const max = 50
let rand = 10; // Não executou porque a setença é falsa. Testa no início
console.log(rand !== 10)
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

//Exemplo com o Do While:

do{
    rand = random(min, max);
    console.log(rand);//Executa mesmo se a função for falsa. Testa no final
}
while (rand !== 10);

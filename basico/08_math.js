/*

Math:

O objeto JavaScript Math fornece várias propriedades e métodos úteis para realizar tarefas matemáticas, 
como gerar números aleatórios, arredondar números, obter valores como PI e realizar cálculos e assim por diante. 
Ele também inclui métodos para realizar tarefas matemáticas que normalmente são impossíveis ou muito complexas de 
serem executadas usando operadores matemáticos padrão (+, -, * e /), como o cálculo de valores de seno ou cosseno.
*/


//Calculando o valor absoluto de um número:

console.log(Math.abs(-98));

// Arrendondamento para baixo:
let num1 = 9.54
let num2 = Math.floor(num1);
console.log(num2)

// Arrendondamento para cima:
let num3 = Math.ceil(num1);
console.log(num3)

/*Arredondamento round: método arredonda um número para o inteiro mais próximo de forma que se a parte decimal for 0,5 ou maior,
o número é arredondado para cima, caso contrário, arredondado para baixo.
*/
let num4 = Math.round(num1);
console.log(num4)

/*Calculando a Raiz Quadrada de um número:
O método Math.sqrt () é usado para calcular a raiz quadrada de um número: Math.sqrt (x) = x
Se o número for negativo, NaN será retornado.
*/

let num5 = 3
let num6 = Math.sqrt(num5);
let num7 = Number(num6.toFixed(2));
console.log(num6);
console.log(num7);

//Encontrando o maior número em uma sequência: 

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//Encontrando o menor número em uma sequência: 

console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//Gerando um número aleatório (randômico)
/*
O método Math.random() é usado para gerar um número aleatório de ponto flutuante no intervalo de 0 inclusive até, 
mas não incluindo 1
*/

let num8 = Math.random();
let num9 = Math.round(Math.random());
console.log(num8);
console.log(num9);

// Gerando um número aleatório de uma faixa de valores Min - Max:
//Math.round(Math.random() * (Max - Min) + Min);

let num10 = Math.round(Math.random() * (20 - 10) + 10);
console.log(num10);

//Gerando o valor de Pi:

console.log(Math.PI);

//Calculando a potência de um número:

console.log(Math.pow(2,5));
console.log(2**4);


//Calculando a Raiz Quadrada:

console.log(Math.pow(9,0.5));

//Funções Trigonométricas: Seno , Cosseno e Tangente

console.log(Math.sin(0 * Math.PI / 180));  // Prints: 0
console.log(Math.sin(90 * Math.PI / 180));  // Prints: 1
console.log(Math.cos(0 * Math.PI / 180));  // Prints: 1
console.log(Math.cos(180 * Math.PI / 180));  // Prints: -1
console.log(Math.tan(0 * Math.PI / 180));  // Prints: 0

/*
Números:

JavaScript suporta números inteiros e de ponto flutuante que podem ser representados em 
notação decimal, hexadecimal ou octal. Ao contrário de outras linguagens, o JavaScript não 
trata números inteiros e números de ponto flutuante de maneira diferente. Todos os números 
em JavaScript são representados como números de ponto flutuante. Aqui está um exemplo que 
demonstra os números em diferentes formatos:

Números extra grandes podem ser representados em notação exponencial, por exemplo 6.02e + 23 (igual a 6.02x1023).

Operando Números e Strings:
O operador + é usado para adição e concatenação. Portanto, realizar operações matemáticas em números e strings 
pode produzir resultados interessantes. 

*/

//Representando números:

let x = 2;       // inteiro
let y = 3.14;    // ponto flutuante
let z = 0xff;    // hexadecimal
let k = 1.57e4;  // igual a 15700
let l = 4.25e+6; // igual a 4.25e6 ou 4250000
let m = 4.25e-6; // igual a 0.00000425

console.log(x);
console.log(y);
console.log(z);
console.log(k);
console.log(l);
console.log(m);

//Operando números com strings:

let j = 24;
let p = 10;
let v = '34';
console.log(j + p); // somando dois números
console.log(j + v); // concatenando um número com uma string
console.log(j + p + v);

/* Obs1: Mas, se você realizar outras operações matemáticas como multiplicação, divisão ou subtração, o resultado será diferente. 
JavaScript converterá automaticamente as strings numéricas (ou seja, strings contendo valores numéricos) em números em todas as 
operações numéricas, conforme mostrado no exemplo a seguir:
*/

console.log(j - v);
console.log(p * v);
console.log(j * p - v);

/* Obs2: Além disso, se você tentar multiplicar ou dividir números com strings que não são numéricas, ele retornará NaN (Not a Number). 
Além disso, se você usar NaN em uma operação matemática, o resultado também será NaN.
*/

let u = 'foo';
let b = NaN;

console.log(j - u); // Subtraindo um número de uma string não numérica
console.log(j * u); // Multiplicando um número de uma string não numérica
console.log(j + b); // Somando um número com um NaN
console.log(u + b); // Somando um NaN com uma string

//Evitando problemas de precisão:


//Parsing inteiros de strings:
/*
O método parseInt() pode ser usado para analisar um inteiro de uma string. Este método é particularmente útil em situações 
em que você está lidando com valores como unidades CSS, por exemplo, 50px, 12pt, etc. e você gostaria de extrair o valor 
numérico dele.Se o método parseInt() encontrar um caractere que não é numérico na base especificada, ele interrompe a análise 
e retorna o valor inteiro analisado até esse ponto. Se o primeiro caractere não puder ser convertido em um número, o método 
retornará NaN (não um número).
*/

console.log(parseInt("3.14"));  // 3
console.log(parseInt("50px"));  // 50
console.log(parseInt("12pt"));  // 12
console.log(parseInt("0xFF", 16));  // 255
console.log(parseInt("20 years"));  // 20
console.log(parseInt("Year 2048"));  // NaN
console.log(parseInt("10 12 2018"));  // 10

//Parsing float de strings:

console.log(parseFloat("3.14"));  // 3.14
console.log(parseFloat("50px"));  // 50
console.log(parseFloat("1.6em"));  // 1.6
console.log(parseFloat("124.5 lbs"));  // 124.5
console.log(parseFloat("weight 124.5 lbs"));  // NaN
console.log(parseFloat("6.5 acres"));  // 6.5

//Convertendo Números em Strings: toString()

let a = 10;
let c = a.toString();
console.log(c);  // '10'
console.log(typeof c);  // string
console.log(typeof a);  // number
console.log((12).toString());  // '12'
console.log((15.6).toString());  // '15.6'
console.log((6).toString(2));  // '110' - Transforma em número binário
console.log((255).toString(16));  // 'ff' - Transforma em número hexadecimal

//Formatando Números em Notação Exponencial: toExponencial()

/*Você pode usar o método toExponential() para formatar ou representar um número em notação exponencial. 
Este método aceita opcionalmente um parâmetro inteiro especificando o número de dígitos após a vírgula decimal. 
Além disso, o valor retornado é uma string, não um número.
*/

let d = 67.1234;

console.log(d.toExponential());  // 6.71234e+1
console.log(d.toExponential(6));  // 6.712340e+1
console.log(d.toExponential(4));  // 6.7123e+1
console.log(d.toExponential(2));  // 6.71e+1

//Formatando Números para Decimais Fixos: toFixed()
/*
Pode usar o método toFixed() quando quiser formatar um número com um número fixo de dígitos à direita do ponto decimal. 
O valor retornado por este método é uma string e tem um número de dígitos exatamente especificado após o ponto decimal. 
Se o parâmetro digits não for especificado ou omitido, ele será tratado como 0
*/

let e = 72.635;

console.log(e.toFixed());  // '73' (observe o arredondamento, sem parte fracionária)
console.log(e.toFixed(2));  // '72.64' (observe o arredondamento)
console.log(e.toFixed(1));  // '72.6'

let f = 6.25e+5;
console.log(f.toFixed(2)); // '625000.00'

let g = 1.58e-4;
console.log(g.toFixed(2));  // '0.00' (desde que o 1.58e-4 é igual a 0.000158)

//Formatando Números com Precisão: toPrecison()

/*
Se quiser a forma mais apropriada de um número, você pode usar o método toPrecision(). Este método retorna uma string que 
representa o número com a precisão especificada.Se a precisão for grande o suficiente para incluir todos os dígitos da parte 
inteira do número, o número será formatado usando a notação de ponto fixo. Caso contrário, o número é formatado em notação 
exponencial. O parâmetro de precisão é opcional
*/

let h = 6.235;

console.log(h.toPrecision());  // '6.235'
console.log(h.toPrecision(3));  // '6.24' (arredondamento)
console.log(h.toPrecision(2));  // '6.2'
console.log(h.toPrecision(1));  // '6'

let i = 47.63;
console.log(i.toPrecision(2)); // '48' (arredondamento, sem parte fracionária)

let r = 1234.5;
console.log(r.toPrecision(2));  // '1.2e+3'


//Verificando se um número é inteiro:

console.log(Number.isInteger(a)); // Retorna True
console.log(Number.isInteger(e)); // Retorna Falso

//Verificando se um número é NaN:

let temp = 43 * 'olá'
console.log(Number.isNaN(temp));

//Ajustando problemas de precisão:

let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2);

let num3 = num1 + num2;

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(num3.toFixed(2));
console.log(Number.isInteger(num1));
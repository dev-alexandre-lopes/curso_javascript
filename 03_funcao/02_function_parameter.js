/*
Parâmetros de Funções:

Para a declaração de funções com Function Expression pode-se ou não passar argumentos para a função.
Esses argumentos são armazenados em um objeto chamado (arguments) e podem ser chamados por ordem.

*/
console.log("***************************************************************************************")
//Objeto Arguments que armazena os argumentos passados para uma função em JavaScript:
function funcao(){
    console.log('Essa é minha função!');
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[5]);
}
funcao('valor', 1, 2, 3, 4, 15, 6, 17, 8, 19, 10);// Argumentos foram passados mesmo sem a função solicitar

console.log("***************************************************************************************")

//Exemplo de uma função sem parâmetros que realiza a operação de soma dos valores passados pelos argumentos:

function SomaArgumentos(){
    let total = 0;
    for (let argumentos of arguments){
        total +=argumentos;
    }
    console.log(total);
}
SomaArgumentos(1, 2, 3, 6, 8, 9, 34);

console.log("***************************************************************************************")

function segundaFuncao(a, b, c){
    let total = 0;
    for (let argumentos of arguments){
        total +=argumentos;
    }
    console.log(total, a, b, c);// Observe agora que os parâmetros a = 1, b = 2 e c = 3
}
segundaFuncao(1, 2, 3, 6, 8, 9, 34);

console.log("***************************************************************************************")

function terceiraFuncao(a, b, c, d, e, f){
  
    console.log(a, b, c, d, e, f);// Observe que agora temos mais parâmetros do que argumentos e serão impressos undefined no lugar dos vazios.
}
terceiraFuncao(1, 2, 3);

console.log("***************************************************************************************")

function quartaFuncao(a, b = 2, c = 4){
  
    console.log(a + b + c);
}
quartaFuncao(1, 8, 3);// Passando argumentos diferentes dos parâmetros. Observe que será operado os valores dos argumentos e naõ dos parâmetros.

quartaFuncao(1);// Passando menos argumentos, desta forma utiliza-se os valores já definidos nos parâmetros;

quartaFuncao(5, undefined, 5);// Passando somente alguns valores de argumentos e usando os valores já definidos nos parâmetros. Valor de b = 2

console.log("***************************************************************************************")

//Exemplo de uma passagem de argumentos via objeto para uma função através de desestruturação
function quintaFuncao ({nome, sobrenome, idade}){
  
    console.log(nome, sobrenome, idade);
}
let obj = {nome: 'Flavio', sobrenome: 'Souza', idade: 45};// Passando objeto por variável;
quintaFuncao({nome: 'Paulo', sobrenome: 'Silva', idade: 30});
quintaFuncao(obj);

console.log("***************************************************************************************")

//Exemplo de uma passagem de argumentos via array para uma função através de desestruturação
function sextaFuncao ([valor1, valor2, valor3]){
  
    console.log(valor1, valor2, valor3);
}
let obj2 = [1, 3, 4];// Passando array por variável;
sextaFuncao([3, 6, 9]);
sextaFuncao(obj2);

console.log("***************************************************************************************")
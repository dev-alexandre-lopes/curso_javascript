/*
Declaração de Funções:
Hoisting é o comportamento padrão do JavaScript de mover declarações para o topo do escopo atual. 
A elevação aplica-se a declarações de variáveis ​​e a declarações de funções. Por causa disso, as funções JavaScript 
podem ser chamadas antes de serem declaradas:

*/
console.log("***************************************************************************************")
//Function Expressions: 
//Uma função JavaScript também pode ser definida usando uma expressão. 
//Uma expressão de função pode ser armazenada em uma variável:
const x = function (a, b) {return a * b};
console.log (x(3,5));

//Function Hoisting:
oi();
function oi(){
    console.log('oi');
}

// Function Expression:
const souUmdado = function(){
    console.log('Sou uma função a partir de uma constante!')
}
souUmdado();//A constante virou uma função.

//Arrow function:
const funcaoArrow = () =>{
    console.log ('Sou uma Arrow Function');
}
funcaoArrow();

//Função como Objeto:
const obj = {
    falar: function(){
        console.log('Função Objeto...');
    }
};
obj.falar();

console.log("***************************************************************************************")


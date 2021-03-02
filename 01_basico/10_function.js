// Function

/*
Uma função é um grupo de instruções que executam tarefas específicas e podem ser guardadas e mantidas separadamente do 
programa principal. As funções fornecem uma maneira de criar pacotes de código reutilizáveis ​​que são mais portáteis e fáceis 
de depurar. Aqui estão algumas vantagens de usar funções:

1) Funções reduzem a repetição de código dentro de um programa - Função permite que você extraia blocos de código comumente 
usados ​​em um único componente. Agora você pode realizar a mesma tarefa chamando essa função onde quiser no seu script, sem 
ter que copiar e colar o mesmo bloco de código repetidamente.

2) Funções tornam o código muito mais fácil de manter - Uma vez que uma função criada uma vez pode ser usada muitas vezes, 
qualquer alteração feita dentro de uma função é implementada automaticamente em todos os lugares sem tocar nos diversos arquivos.

3) Funções tornam mais fácil eliminar os erros - Quando o programa é subdividido em funções, se ocorrer algum erro, 
você sabe exatamente qual função está causando o erro e onde encontrá-la. Portanto, corrigir erros se torna muito mais fácil.
*/

//Definindo e Chamando uma função:

function sayHello() {
    console.log("Olá, Bem-vindo ao treinamento JavaScript!");
}
sayHello() //Chamando a função

//Adicionando parâmetros para uma função:

function displaySum(num1, num2) {
    let total = num1 + num2;
    console.log(total);
}
 
displaySum(6, 20);  // Passando parâmetro: 6 e 20 -> Resultado: 26
displaySum(-5, 17); // Passando parâmetro: -5 e 12 -> Resultado: 12


function showFullname(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
 
showFullname("Paulo", "Silva"); // Saída: Paulo Silva
showFullname("Carlos"); // Saída: Carlos undefined


//Definindo valores para parâmetros de funções:


function digaOla(name = 'Irmão') {
    console.log('Olá, ' + name);
}

digaOla(); // Saída: Olá, Irmão
digaOla('Joaquim'); // Saída: Olá, Joaquim

//Retornando valores de um função:

function getSum(num1, num2) {
    let total = num1 + num2;
    return total;
}
 
console.log(getSum(4, 540)); 
console.log(getSum(-25, 107)); 


// Retornando valores em formato de array:

function divideNumbers(dividend, divisor){
    let quotient = dividend / divisor;
    let arr = [dividend, divisor, quotient];
    return arr;
}
 
let all = divideNumbers(10, 2);

console.log(all); // array
console.log(all[0]); // Saída: 10
console.log(all[1]); // Saída: 2
console.log(all[2]); // Saída: 5


//Expressões de Funções:

let getMinus = function(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
};
console.log(getMinus(25, 10)); 

let subb = getMinus(14, 7);
console.log(subb) 
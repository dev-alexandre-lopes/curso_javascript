// Escreva uma função que recebe dois valores e retorna o maior entre eles:

//Solução 1: Função Normal
function maiornumero(num1,num2){
    if (num1 > num2){
        console.log(`O número ${num1} é o maior`)
    }else console.log(`O número ${num2} é o maior`) 
    return
}
let maior = maiornumero(8,5);
console.log(maior);

console.log("***************************************************************************************")

//Solução 2: Operador Ternário
function max(x,y){
    return x > y ? x : y;
}
console.log(max(8,3));

console.log("***************************************************************************************")

//Solução 3: Arrow Function
const max2 = (x,y) => x > y ? x : y; // Uma única linha
console.log(max2(70,90));

console.log("***************************************************************************************")
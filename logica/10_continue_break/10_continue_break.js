/*
Continue: A instrução continue "salta" uma iteração no loop.

Break: A instrução break "salta" de um loop.

*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i of numeros){
    if (i == 2){
        console.log('Pulei o 2!')
        continue;
    }
    console.log(i)
    if (i == 5){
        console.log('Numero 5 encontrado, saindo...')
        break; //Sai do laço e não executa os outros números
    }
}
console.log("*****************************************************************************************************")
//Outra estrutura de for:

for (i=0; i< numeros.length; i++){
    let numero = numeros[i];
    if (numero == 2){
        console.log('Pulei o 2!')
        continue;
    }
    console.log(numero)
    if (numero == 5){
        console.log('Numero 5 encontrado, saindo...')
        break; //Sai do laço e não executa os outros números
    }
}
console.log("*****************************************************************************************************")
//Exemplo com o while:

let k = 0;
while(k<numeros.length){
    
    let numero = numeros[k];
    if (numero == 2){
        console.log('Pulei o 2!')
        k++
        continue;
    }
    console.log(numeros[k]);
    if (numero == 5){
        console.log('Numero 5 encontrado, saindo...')
        k++;
        break; //Sai do laço e não executa os outros números
    }
    k++;
}

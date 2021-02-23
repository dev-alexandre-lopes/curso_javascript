/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number).
Retorne true se a imagem estiver no modo paisagem
*/

//Solução 01:
const ePaisagem = (largura, altura) => largura > altura ? true : false
let number1 = ePaisagem(600, 400);
console.log(`A imagem está no modo paisagem: ${number1}`);
let number2 = ePaisagem(600, 900);
console.log(`A imagem está no modo paisagem: ${number2}`);
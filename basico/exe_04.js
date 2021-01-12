
/*
Criar um template HTML com perguntas e respostas relacionadas ao seu nome completo.

As perguntas são relacionadas aos conceitos de manipulação de strings com javaScript.
*/

// A frase principal é o seu nome completo:

const nome = prompt('Digite seu nome completo:');

const nomeJunto = nome.replace(/\s/g,'');

console.log(nomeJunto);

const tamNome = nomeJunto.length

console.log(tamNome);

console.log(nome.length);

document.body.innerHTML += `Seu nome completo é:<strong> ${nome} <strong/> <br>`;

document.body.innerHTML += `Seu nome tem <strong> ${tamNome} <strong/> letras <br>`;

const segLetra = nomeJunto[1];

console.log(segLetra);

document.body.innerHTML += `A segunda letra do seu nome é a letra: ${segLetra} <br>`;

let priIndice = nomeJunto.indexOf('a')

console.log(priIndice);

document.body.innerHTML += `Qual é o primeiro índice da letra A no seu nome? ${priIndice} <br>`;

let ultIndice = nomeJunto.lastIndexOf('a');

console.log(ultIndice);

document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${ultIndice} <br>`;

let ultTresletras = nomeJunto.substring(21,24);

console.log(ultTresletras);

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultTresletras} <br>`;

let palNome = nome.split(" ");

console.log(palNome);

document.body.innerHTML += `As palavras do seu nome são: ${palNome} <br>`;

let upperName = nome.toUpperCase();

console.log(upperName);

document.body.innerHTML += `Seu nome com letras maiúsculas: ${upperName} <br>`;

let lowerName = nome.toLowerCase();

console.log(lowerName);

document.body.innerHTML += `Seu nome com letras minúsculas: ${lowerName} <br>`;


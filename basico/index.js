
// Curso Javascript Básico

// Exemplo de um comentário em uma linha
/* Exemplo de um Comentário em várias 
linhas*/

// Em javacript podemos usar CamelCase exemplo: NomeCliente;

// As operações básicas são: + (Adição) -(Subtração) *(Multiplicação) e /(Divisão)

// JavaScript Generating Output:

console.log('Olá mundo!!');

//JavaScript Variables:

let NomeCliente = 'Paulo'; // Javascript é case sensitive

let nomeCliente = 'João'; // Iniciando uma variável

console.log(nomeCliente);

console.log(NomeCliente);

//Exercício: Cálculo do IMC do Alexandre
const nome = 'Alexandre';
const sobrenome = 'Lopes';
const idade = 38;
const peso = 85;
const altura = 1.70;
let imc;
let anoNascimento;
imc = (peso)/(altura*altura);
anoNascimento = (2021 - idade);
//console.log(nome,'tem',idade,'anos',',','pesa',peso,'kg','tem',altura,'m de altura e seu imc é de',imc);
//console.log(nome+ ' tem '+idade+' anos, pesa '+ peso+' kg tem '+ altura+' m de altura e seu imc é de '+ imc);

//Template Strings: são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
// Usa-se o Template Strings entre crase.
console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${altura}m de altura e seu imc é de ${imc}`);
console.log(`${nome}, nasceu em ${anoNascimento}.`);

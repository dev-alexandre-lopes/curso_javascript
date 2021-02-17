/*
O objeto Date é um objeto JavaScript integrado. Ele permite que você obtenha a hora local do usuário acessando o 
relógio do sistema do computador por meio do navegador. O objeto Date também fornece vários métodos para gerenciar, 
manipular e formatar datas e horas.

Criando um Objeto Data:

Ao contrário de outros objetos internos, como matrizes ou funções, as datas não têm uma forma literal 
correspondente: todos os objetos de data precisam ser criados usando a função construtora Date, que é Date ().
Existem quatro maneiras diferentes de criar um objeto Date em JavaScript.

Construtor:

new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

*/

//Criando um objeto data:

let d = new Date();
console.log(d);
console.log(d.toDateString()); // Display an abbreviated date string
console.log(d.toLocaleDateString()); // Display a localized date string
console.log(d.toISOString()); // Display the ISO standardized date string
console.log(d.toUTCString()); // Display a date string converted to UTC time
console.log('---------------------------------------------------------------')
// Apresenta data local:

console.log(d.toString()); // Display the full date string with local time zone
console.log(d.toTimeString()); // Display the time portion of the date
console.log(d.toLocaleTimeString()); // Display a localized time string
console.log('---------------------------------------------------------------')
//Pegando o dia mês e ano de uma data:

console.log(d.getDate()); // Display the day of the month
console.log(d.getDay()); // Display the number of days into the week (0-6)
console.log(d.getMonth()); // Display the number of months into the year (0-11)
console.log(d.getFullYear()); // Display the full year (four digits)
console.log('---------------------------------------------------------------')
//Pegando horas, minutos, segundos e milisegundos de uma data:

console.log(d.getHours()); // Display the number of hours into the day (0-23)
console.log(d.getMinutes()); // Display the number of minutes into the hour (0-59)
console.log(d.getSeconds()); // Display the seconds into the minute (0-59)
console.log(d.getMilliseconds()); // Display the number of milliseconds into second (0-999)
console.log(d.getTime()); // Display the number of milliseconds since 1/1/1970
console.log(d.getTimezoneOffset()); // Display the time-zone offset (from Greenwich Mean Time) in minutes
console.log('---------------------------------------------------------------')

//Setando ano mês e dia:
d.setFullYear(d.getFullYear() + 2);// Ano + 2 = 2023
console.log(d); // Display future date
console.log('---------------------------------------------------------------')

//Setando hora minuto segundo e milisegundo:
d.setHours(8);
d.setMinutes(30);
d.setSeconds(45);
d.setMilliseconds(600);
console.log(d); // Display future date
console.log('---------------------------------------------------------------')

//Contando dias, horas, minutos e segundos
const umDia = 60 * 60 * 24 * 1000 // Um dia em milisegungos
//let day = new Date(0 + umDia); //Marco 0-> Data 0 UNIX: 01/01/1970
let day = new Date(2021, 1, 14, 14, 14, 27, 1000);//0 - 11 meses    (ano, mes, dia, hora, min, seg, miliseg)
let day1 = new Date('2021-02-15 14:13:24'); //Formato de string
console.log(day.toString());
console.log(day1.toString());
console.log('---------------------------------------------------------------')


//Formatando Padrão de data Brasil:

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth()+1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
let data = new Date();
const dataBrasil = formataData(data);
console.log(`Data e hora de hoje: ${dataBrasil}`);
/*
Método Window setInterval():

O método setInterval() chama uma função ou avalia uma expressão em intervalos especificados (em milissegundos). 
O método setInterval() continuará chamando a função até que clearInterval() seja chamado ou a janela seja fechada. 
O valor de ID retornado por setInterval() é usado como o parâmetro para o método clearInterval(). 

Dica: 1000 ms = 1 segundo. 
Dica: para executar uma função apenas uma vez, após um número especificado de milissegundos, use o método setTimeout().

Sintaxe: setInterval(function, milliseconds, param1, param2, ...)


Método Window setTimeout():

O método setTimeout() chama uma função ou avalia uma expressão após um número especificado de milissegundos.

Dica: 1000 ms = 1 segundo.
Dica: a função é executada apenas uma vez. Se você precisar repetir a execução, use o método setInterval().
Dica: Use o método clearTimeout() para evitar que a função seja executada.
*/

//
function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
    });
}

//Chama a função mostraHora a cada 1s:
const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

//Chama a função uma única vez depois de 5s:
setTimeout(function(){
    clearInterval(timer); //Limpa o setInterval
}, 5000);





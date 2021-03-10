/*
Exercício:

Criar um Timer: Ao clicar no botão iniciar, começa uma contagem de 1 em 1 segundo. Ao clicar no botão pausar, a contagem é pausada
e a cor do dígito fica em vermelho. Ao clicar no botão zerar, zera a contagem e a cor fica normal.

*/
//Início do projeto

//Envolver o projeto dentro de uma função para tirar o escopo global
function relogio(){

const relogio = document.querySelector('.relogio');
//const iniciar = document.querySelector('.iniciar');
//const pausar = document.querySelector('.pausar');
//const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

/*Função que identifica qual elemento do HTML foi selecionado:
document.addEventListener('click', function(e){
    console.log(e.target)
})*/

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = "00:00:00"
        segundos = 0;
    }

})
//Função que Cria uma hora a partir dos segundos passados
function criaHoraSegundos(segundos) {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
//Função que inicia o relógio e faz a contagem
function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000);
}
}
relogio();


/*Observa o evento de click no botão iniciar
iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
})
//Observa o evento de click no botão pausar
pausar.addEventListener('click', function (e) {
    relogio.classList.add('pausado');
    clearInterval(timer);
})
//Observa o evento de click no botão zerar
zerar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    segundos = 0;
})*/
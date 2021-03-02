/*
Exercício:

Desenvolver uma página HTML que escreva a data de nascimento do usuário por extenso:

*/
//Capturar o evento de submit do formulário para que seja possível capturar os dados
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log('Evento capturado!');
    const diaNasc = e.target.querySelector('#dia');
    const mesNasc = e.target.querySelector('#mes')
    const anoNasc = e.target.querySelector('#ano')
    const dia = Number(diaNasc.value);
    const mes = Number(mesNasc.value);
    const ano = Number(anoNasc.value);
    const data = dataPad(ano, mes, dia)//Formato padrão de data
    const dataFinal = new Date(data);// Recebe a data
    const diadaSemana = dataFinal.getDay();// Recebe o dia 
    const dataBrasil = formataData(dataFinal);// Padrão de data do Brasil
    const nomedoDia = getnomedoDia(diadaSemana);// Nome do dia da Semana
    const mesdoAno = dataFinal.getMonth();
    const nomedoMes = getmesdoAno(mesdoAno);

    if (!dia) {
        setResultado('Dia inválido!', false)
        return;
    }
    if (!mes) {
        setResultado('Mês inválido!', false)
        return;
    }
    if (!ano) {
        setResultado('Ano inválido!', false)
        return;
    }

    const msg = `${nomedoDia}, ${dia} de ${nomedoMes} de ${ano}`;//Apresentando o resultado
    setResultado(msg, true)//Enviando a msg para apresentar no HTML

});

//Função para Ajustar a data:
function dataPad(ano, mes, dia) {
    const anoPad = ano;
    const mesPad = mes;
    const diaPad = dia;
    const data = `${anoPad},${mesPad},${diaPad}`
    return data
}

//Função para calcular o mês do ano:
function getmesdoAno(mes) {
    let mesdoAno;
    switch (mes) {
        case 0:
            mesdoAno = 'Janeiro'
            return mesdoAno;

        case 1:
            mesdoAno = 'Fevereiro'
            return mesdoAno;

        case 2:
            mesdoAno = 'Março'
            return mesdoAno;

        case 3:
            mesdoAno = 'Abril'
            return mesdoAno;

        case 4:
            mesdoAno = 'Maio'
            return mesdoAno;

        case 5:
            mesdoAno = 'Junho'
            return mesdoAno;

        case 6:
            mesdoAno = 'Julho'
            return mesdoAno;

        case 7:
            mesdoAno = 'Agosto'
            return mesdoAno;

        case 8:
            mesdoAno = 'Setembro'
            return mesdoAno;

        case 9:
            mesdoAno = 'Outubro'
            return mesdoAno;

        case 10:
            mesdoAno = 'Novembro'
            return mesdoAno;

        case 11:
            mesdoAno = 'Dezembro'
            return mesdoAno;
    }
}

//Função para calcular o dia da semana:
function getnomedoDia(diadaSemana) {
    let nomedoDia;
    switch (diadaSemana) {
        case 0:
            nomedoDia = 'Domingo'
            return nomedoDia;
        case 1:
            nomedoDia = 'Segunda-Feira'
            return nomedoDia;
        case 2:
            nomedoDia = 'Terça-Feira'
            return nomedoDia;
        case 3:
            nomedoDia = 'Quarta-Feira'
            return nomedoDia;
        case 4:
            nomedoDia = 'Quinta-Feira'
            return nomedoDia;
        case 5:
            nomedoDia = 'Sexta-Feira'
            return nomedoDia;
        case 6:
            nomedoDia = 'Sábado'
            return nomedoDia;
    }
}

//Função para ajustar o mês no formato Brasil:
function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

//Função para ajustar a data no formato Brasil:
function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

//Função para criar um parágrafo no HTML
function criaP() {
    const p = document.createElement('p')
    return p
}

//Função para escrever uma mensagem (HTML) dentro da div com id = resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = " ";
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }
    else {
        p.classList.add('paragrafo-vermelho');
    }
    p.innerHTML = (`${msg}`);
    resultado.appendChild(p);
}
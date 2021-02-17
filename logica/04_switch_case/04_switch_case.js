/*
Switch ..Case:
A instrução switch..case é uma alternativa à instrução if ... else if ... else, que faz quase a mesma coisa. 
A instrução switch ... case testa uma variável ou expressão em relação a uma série de valores até encontrar uma 
correspondência e, em seguida, executa o bloco de código correspondente a essa correspondência. Sua sintaxe é:
switch(x){
    case value1:
        // Code to be executed if x === value1
        break;
    case value2:
        // Code to be executed if x === value2
        break;
    ...
    default:
        // Code to be executed if x is different from all values
}
*/
//Calcular o dia da semana da sua data de nascimento:
const data = new Date('1983-09-02 12:00:00')// Dia do meu nascimento
const diadaSemana = data.getDay();
const dataBrasil = formataData(data);
const nomedoDia = getnomedoDia(diadaSemana);
console.log(`Data do meu nascimento: ${dataBrasil}`);
console.log(nomedoDia);

//Função para calcular o dia da semana:

function getnomedoDia(diadaSemana){
    let nomedoDia;
    switch (diadaSemana){
        case 0:
            nomedoDia = 'Domingo'
            return `Nesta data era um:${nomedoDia}`;
        case 1:
            nomedoDia = 'Segunda-Feira'
            return `Nesta data era uma:${nomedoDia}`;
        case 2:
            nomedoDia = 'Terça-Feira'
            return `Nesta data era uma:${nomedoDia}`;
        case 3:
            nomedoDia = 'Quarta-Feira'
            return `Nesta data era uma:${nomedoDia}`;
        case 4:
            nomedoDia = 'Quinta-Feira'
            return `Nesta data era uma:${nomedoDia}`;
        case 5:
            nomedoDia = 'Sexta-Feira'
            return `Nesta data era uma:${nomedoDia}`;
        case 6:
            nomedoDia = 'Sábado'
            return `Nesta data era um:${nomedoDia}`;

    }
}
//Função para ajustar o mês no formato Brasil:

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

//Função para ajustar a data no formato Brasil:

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth()+ 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

//Declarações Condicionais - If - Else
/*
Como muitas outras linguagens de programação, o JavaScript também permite escrever código que executa diferentes ações 
com base nos resultados de condições de teste lógico ou comparativo em tempo de execução. Isso significa que você pode 
criar condições de teste na forma de expressões que são avaliadas como verdadeiras ou falsas e com base nesses resultados, 
você pode executar determinadas ações.
Existem várias instruções condicionais em JavaScript que você pode usar para tomar decisões:
A declaração if
A instrução if ... else
A instrução if ... else if .... else

If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
*/


// Exemplo de if:

const hora = 10;
console.log(`A hora atual:${hora}h`);

if (hora <= 12) {
    console.log('Bom dia!');
};

// Exemplo de if else if:

// 0 - 11h -> Bom dia
//12 - 17 -> Boa tarde
//>18 -> Boa noite

const time = 04;

if (time >= 0 && time <= 11) {
    console.log('Bom dia!')
}
else if (time >= 12 && time <= 17) {
    console.log('Boa tarde!')
}
else if (time >= 18 && time <= 23) {
    console.log('Boa noite!')
}

//Testando condição verdadeira if e else somente:

const grana = false;

if (grana) {
    console.log('Vou sair de casa!')
}
else {
    console.log('Não vou sair de casa!')
}


// Exemplo if else if:

const numero = 16

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

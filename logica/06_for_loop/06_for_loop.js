/*
Estrutura de repetição: For Loop; For in; For of


O For Loop: repete um bloco de código, desde que uma determinada condição seja atendida. 
Normalmente é usado para executar um bloco de código por certo número de vezes. Sua sintaxe é:

        for(initialization; condition; increment) {
            // Code to be executed
        }

Os parâmetros da instrução for loop têm os seguintes significados: 

1) inicialização: é usada para inicializar as variáveis ​​do contador e é avaliada uma vez incondicionalmente antes 
da primeira execução do corpo do loop.

2) condição: é avaliada no início de cada iteração. Se for verdadeiro, as instruções de loop são executadas. 
Se for avaliado como falso, a execução do loop termina.

3) incremento: atualiza o contador de loop com um novo valor cada vez que o loop é executado.
*/

//Exemplo de aplicação: For Loop

//console.log('LINHA 0');
//console.log('LINHA 1');
//console.log('LINHA 2');
//console.log('LINHA 3');
//console.log('LINHA 4');
//console.log('LINHA 5');

// Incrementando em 1 unidade:

for(let i = 0; i<=5; i++){
    console.log(`Linha ${i}`)
};

//Decrementando em 10:

for(let k = 500; k>=400; k -=10){
    console.log(k)
};

//Verificando se um número é par ou impar:

for (let p = 0; p<=10; p++){
    const par = p%2 === 0 ? 'Par':'Impar';//Retorna True ou False
    console.log(p,par)
}

//Verificando o conteúdo de um Array:

const frutas = ['Maçã', 'Pêra', 'Banana', 'Mamão', 'Limão', 'Laranja', 'Abacaxi']
for (f = 0; f < frutas.length; f++){
    console.log(`Indice ${f}`, frutas[f]);
}


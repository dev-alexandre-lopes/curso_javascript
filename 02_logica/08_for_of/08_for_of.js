/*
Estrutura de repetição: For of

ES6 apresenta um novo loop for-of que nos permite iterar sobre arrays ou outros objetos iteráveis ​​(por exemplo, strings) com 
muita facilidade. Além disso, o código dentro do loop é executado para cada elemento do objeto iterável..

Ele retorna o valor:
*/

//Exemplo de aplicação: For of

const nome = ('Paulo Roberto')

for (letras of nome){
    console.log(letras)//Faz a iteração do valor de cada posição
}

//Exemplo de For each

const nome2 = ['Paulo', 'João', 'Ricardo']

nome2.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
});


/*
Resumo:

For Loop -> Geralmente com iteráveis (array, strings)

For in -> Retorna o índice ou chave (string, array e objetos)

For of -> Retorna o valor em si ( iteráveis, array, strings)
*/
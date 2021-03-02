/*
Escreva uma função que recebe um número e retorne o seguinte:

Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = Retorna o próprio número
Checar se um número é realmente um número - Retorna o próprio número
Use a função com números de 0 a 100

*/

function FizzBuzz(n) {
    if (typeof n !== 'number') return n;
    if (n % 3 == 0 && n % 5 == 0) return 'FizzBuzz';
    if (n % 3 == 0)return 'Fizz';
    if (n % 5 == 0)return 'Buzz';
    return n;
}

for (i=0; i<=100; i++){
    console.log(i,FizzBuzz(i))
}
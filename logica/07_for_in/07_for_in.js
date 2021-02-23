/*
Estrutura de repetição: For in

O For-in: é um tipo especial de loop que itera sobre as propriedades de um objeto ou os elementos de um array. 
A sintaxe genérica do loop for-in é:

        for(variable in object) {
            // Code to be executed
        }

O contador de loop, ou seja, a variável no loop for-in é uma string, não um número. Ele contém o nome da propriedade 
atual ou o índice do elemento da matriz atual.
*/


//Exemplo de apicação: For in em Array:
const frutas = ['Maçã', 'Pera', 'Banana', 'Abacaxi']

for (let i in frutas){
    console.log(frutas[i]);
    console.log(i);
}

//Exemplo de aplicação: For in com objeto
let pessoa = { "nome": "Claudio", "sobrenome": "Martins", "idade": "36" };

// Loop em todas as propriedades do objeto 
for (let prop in pessoa) {
    console.log(prop, pessoa[prop]);
    console.log(prop);

}



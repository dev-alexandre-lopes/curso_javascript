/*
Arrays:

Arrays são variáveis ​​complexas que nos permitem armazenar mais de um valor ou um grupo de valores em um único nome de variável. 
Os arrays de JavaScript podem armazenar qualquer valor válido, incluindo strings, números, objetos, funções e até mesmo 
outros arrays, tornando possível criar estruturas de dados mais complexas, como um array de objetos ou um array de arrays.

A maneira mais simples de criar um array em JavaScript é colocar uma lista de valores separados por vírgulas entre colchetes ([]). 

*/

// Criando um array de nomes:

const nomes = ["Paulo", "Maria", "Juliana"]

console.log(nomes)

// Acessando um elemento de um Array:

console.log(nomes[1]) //Retorna Maria

// Verificando o comprimento de um Array:

console.log(nomes.length) // Retorna 3 (elementos existentes)

// Fazendo um Looping dentro do Array:

for (let i=0; i<nomes.length; i++){
    console.log(nomes[i])

}
//Outra forma de fazer Looping no Array: Usando For of

for (let nome of nomes){
    console.log(nome)
}
//Outra forma de fazer Looping no Array: Usando For in

for (let k in nomes){
    console.log(nomes[k])
}

//Adicionando um elemento novo no Array: Método push()

nomes.push('Carlos')
nomes.push('Frederico','Ademir')
console.log(nomes)


//Adicionando um elemento novo no início do Array: Método unshift()
nomes.unshift('Roberto', 'Neto', 'Alex')
console.log(nomes)

//Removendo o último elemento de um Array: Método pop()

let ultimo = nomes.pop()
console.log(ultimo)
console.log(nomes)

//Removendo o primeiro elemento de um Array: Método shift()

let primeiro = nomes.shift()
console.log(primeiro)
console.log(nomes)

// Adicionando e Removendo elementos de qualquer posição em um Array: Método splice()
/*
Este método leva três parâmetros: o primeiro parâmetro é o índice no qual iniciar a emenda da matriz, é necessário; 
o segundo parâmetro é o número de elementos a serem removidos (use 0 se você não quiser remover nenhum elemento), é opcional; 
e o terceiro parâmetro é um conjunto de elementos de substituição, também é opcional
*/

nomes.splice(0,2) //Removendo  2 elementos a partir da posição 0
console.log(nomes)
nomes.splice(2,1,'Jose','Vitor')//Vai retirar Juliana na posição 2 e incluir Jose e Vitor a partir da posição 2
console.log(nomes)

//Criando uma string a partir de um Array: Método join()

/*
Pode haver situações em que simplesmente deseja-se criar uma string juntando os elementos de um array. 
Para fazer isso, você pode usar o método join(). Este método usa um parâmetro opcional que é uma string separadora que é 
adicionada entre cada elemento. Se você omitir o separador, o JavaScript usará vírgula (,) por padrão.
*/

const cores = ['Azul', 'Verde', 'Amarelo', 'Branco']
console.log(cores)

console.log(cores.join())//Transforma o array em string com a virgula
console.log(cores.join(""))//Transforma o array em string agrupando os elementos sem virgula
let cor = (cores.join(""))//Contando as letras de uma string formada a partir de um array
console.log(cor.length)
console.log(cores.join("-"))//Transforma o array em string agrupando os elementos sem virgula

// Criando uma string com o método toString():

console.log(cores.toString())// Cria uma String separando cada elemento do array por vírgula

//Extraindo uma porção de elementos de um array com o método slice()

let times = ['flamengo', 'vasco', 'botafogo', 'fluminense']
let fortes = times.slice(1,3)
console.log(times)
console.log(fortes)

//Mesclando (Merge) dois ou mais arrays: Método concat()
let pets = ["Cat", "Dog", "Parrot"]
let wilds = ["Tiger", "Wolf", "Zebra"]
console.log(pets.concat(wilds))
console.log(pets)
console.log(wilds)
let bugs = ["Ant", "Bee"]
console.log(pets.concat(wilds,bugs))

//Consultando se é um array:

console.log(pets instanceof Array)//Retorna True


//Pesquisando em um array:

/*
Se você deseja pesquisar um array por um valor específico, você pode simplesmente usar o indexOf() e o lastIndexOf(). 
Se o valor for encontrado, os dois métodos retornam um índice que representa o elemento do array. 
Se o valor não for encontrado, -1 é retornado. O método indexOf() retorna o primeiro encontrado, enquanto 
o lastIndexOf() retorna o último encontrado.
*/

let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
 
console.log(fruits.indexOf("Apple")); // Mostra 0
console.log(fruits.indexOf("Banana")); // imprime: 1
console.log(fruits.indexOf("Pineapple")); // imprime: -1

let arr = [2, 1, 3, 5, 9, 1, 8, 9, 7];
 

console.log(arr.indexOf(9, 2)); // Pesquisa o elemento 9 a partir da posição 2 -> Resultado posição: 4
 
console.log(arr.lastIndexOf(1)); // Pesquisa a última posição do elemento 1 -> Resultado posição 5

//Verificar se um array possui um elemento: Método includes()

console.log(arr.includes(7)) // Se o array possui o elemento 7

console.log(arr.includes(10)) // Se o array possui o elemento 10

console.log(arr.includes(3,4))// Se o array possui o elemento 3 a partir da posição 4

console.log(arr.includes(3,1))// Se o array possui o elemento 3 a partir da posição 1

//Encontrando um elemento dentro do array que satisfaça uma condição: Método find()

let result = arr.find(function(element) {
    return element > 4;
  });
  console.log(result); // imprime o valor 4

  //Encontrando o index de um elemento dentro do array que satisfaça uma condição: Método findIndex()

  let indice =  arr.findIndex(function(element){
      return element > 8;
  })
  console.log(indice); // imprime o valor 5

//Encontrando todos os elementos dentro do array que satisfaçam uma condição: Método filter()  

let filtro =  arr.filter(function(element){
    return element > 8;
})
console.log(filtro); // imprime o array: [9, 9]

// Classificando um Array: Método sort()

let casa = ['porta', 'janela', 'fogão', 'pia', 'panela', 'sofá',]

let apt = casa.sort()
console.log(casa)
console.log(apt)//Em ordem alfabética

//Revertendo a ordem dos elementos de um array: Método reverse()

let contagem = ['um', 'dois', 'três', 'quatro', 'cinco']

let inverso = contagem.reverse()

console.log(contagem)
console.log(inverso)

//Classificando arrays numéricos:

let numbers = [5,20,75,40,100,80,90]
console.log(numbers)
let ordem = numbers.sort()
console.log(ordem)

//Organizando em ordem crescente:
numbers.sort(function(a,b){
    return a - b;
})
console.log(numbers)

//Encontrando o valor máximo em u array:

function findMax(array){
    return Math.max.apply(null,array)
}

function findMin(array){
    return Math.min.apply(null,array)
}
console.log(findMax(numbers))
console.log(findMin(numbers))

//Classificando um Array de Objetos:

var pessoas = [
    { name: "Harry", age: 14 },
    { name: "Ethan", age: 30 },
    { name: "Peter", age: 21 },
    { name: "Clark", age: 42 },
    { name: "Alice", age: 16 }
];

console.log(pessoas)

//Classificando por idade

pessoas.sort(function(a,b){
    return a.age - b.age
})
console.log(pessoas)

//Classificando por Nome Ordem Alfabética

pessoas.sort(function(a, b) {
    let x = a.name.toLowerCase(); 
    let y = b.name.toLowerCase(); 
    if(x < y) {
        return -1;
    }
    if(x > y) {
        return 1;
    }
    
    return 0;
});

console.log(pessoas)
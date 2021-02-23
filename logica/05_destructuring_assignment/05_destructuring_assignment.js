/*
Atribuição via Desestruturação (destructuring assignment):

A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados 
de arrays ou objetos em variáveis distintas.

Em uma atribuição de desestruturação, o valor do lado direito do sinal de igualdade é um array ou objeto (um valor “estruturado”) 
e o lado esquerdo especifica um ou mais nomes de variável usando uma sintaxe que imita a sintaxe de array e objeto literal.

*/

//Desestruturação de Array:

//Atribuição Básica:

let [x,y] = [1,2]; // O mesmo que let x=1, y=2
[x,y] = [x+1,y+1]; // O mesmo que x = x + 1, y = y+1
[x,y] = [y,x]; // Troca o valor das duas variáveis
console.log([x,y]); // Imprime [3,2]
console.log('---------------------------------------------------------------')

let a = 'A';
let b = 'B';
let c = 'C';
console.log(a, b, c);
let numeros = [2, 5, 9];

//Atribuição separada da declaração:

[a, b, c] = [1, 4, 8];// atribuição direta
console.log(a, b, c);
[a, b, c] = numeros; // atribuição por outra variável
console.log(a, b, c);

// Trocando variáveis: 

[a, b, c] = ['C', 'B', 'A'] 
console.log(a, b, c);
console.log('---------------------------------------------------------------')

// Divisão de um Array: 

const numero1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

//Atribuindo somente alguns valores
const [um, ,tres, ,cinco, ,sete, ,nove] = numero1
console.log(numero1);
console.log(um,tres,cinco,sete,nove);

//Atribuindo o resto de um array para uma variável
const [primeiro, segundo, ...resto] = numero1;
console.log(numero1);
console.log(primeiro, segundo);
console.log(resto);
console.log('---------------------------------------------------------------')

//Arrays aninhados:
const numero2 = [ [15,28,32], [24,59,66], [72,83,19]]
const [,[,,num3],[,num2,]] = numero2;
console.log(num3);
console.log(num2);


//Analisando um array retornado de uma função:
function f() {
    return [109, 265];
  }
  
  var j, k;
  [j, k] = f();
  [,r] = f(); //Ignorando alguns valores retornados
  console.log(j); // 109
  console.log(k); // 265
  console.log(r); // 265



//Extraindo valores do resultado de uma expressão regular:

var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);//RegExp
console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL;
console.log(protocol); // "https"
console.log(fullpath);// "en-US/Web/JavaScript"

console.log('---------------------------------------------------------------')


//Desestruturação de Objeto:

let transparent = {r:255, g:189, b:54, a:1.0}; // Uma cor RGBA
let {r:red, g:green, b:blue} = transparent; 
console.log(red, green, blue);


//Objeto aninhado e desestruturação de array:
const pessoa = {
  //nome: 'Paulo',
  sobrenome: 'Martins',
  idade: '35',
  endereco:{ 
    //rua: 'Av Brasil', 
    numero: '15'},
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.endereco);

//const {nome = 'Carlos',sobrenome} = pessoa;
//console.log(nome, sobrenome);

const {endereco:{rua:ponto = 'Constantino Nery', numero}} = pessoa;
console.log(ponto, numero)

//Atribuição para variáveis com novos nomes:

const {nome:n = 'Fred', sobrenome} = pessoa;
console.log(n, sobrenome);

//Atribuição sem declaração: Precisa estar entre parênteses:

let num4, num5
({num4,num5} = {num4: 4, num5: 6})
console.log(num4, num5)


//For de iteração e desestruturação:
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: ni, family: { father: f } } of people) {
  console.log("Name: " + ni + ", Father: " + f);//Retirando os valores do objeto
}



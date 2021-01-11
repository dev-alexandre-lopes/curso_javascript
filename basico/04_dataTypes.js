// Tipos de dados primitivos: String, Number, Boolean, Undefined, Null, Object, Array, Function

/*  String:

    O tipo de dados string é usado para representar dados textuais (ou seja, sequências de caracteres). 
    Strings são criadas usando aspas simples ou duplas em torno de um ou mais caracteres.
*/

const apelido = 'Alex'; // String;

const nome = "Paulo"; // String;

console.log (apelido);

console.log (nome);

/*  Number:

    O tipo de dados de número é usado para representar números positivos ou negativos com ou sem casa decimal, ou números escritos usando notação exponencial, 
    por exemplo 1.5e-4 (equivalente a 1.5x10-4).
*/

const num = 15; // Exemplo de um número inteiro

let num1 = 80.49; // Exemplo de um número real(ponto flutuante)

let num2 = 14.3e+3 // Exemplo de um número exponencial 

let num3 = 10.5e-3 // Exemplo de um número exponencial 

console.log (num, num1, num2, num3);

console.log (typeof num)

// Verificando outros casos de números:

console.log (16 / 0);  // Output: Infinity

console.log (-16 / 0); // Output: -Infinity

console.log (16 / -0); // Output: -Infinity


/*
Enquanto NaN representa um valor especial Não-um-número. 
É o resultado de uma operação matemática inválida ou indefinida, como tirar a raiz quadrada 
de -1 ou dividir 0 por 0, etc.
*/

console.log("algum texto"/2); // Saída NaN

/*
    Boolean:
    
    O tipo de dado booleano pode conter apenas dois valores: verdadeiro (true) ou falso (false). 
    Normalmente é usado para armazenar valores como sim (verdadeiro) ou não (falso), 
    ativado (verdadeiro) ou desativado (falso), etc. 
*/

const aprovado = true // Booleano: V ou F

console.log (aprovado);

console.log (typeof aprovado)

/*
    Undefined:  

    O tipo de dado undefined só pode ter um valor - o valor especial undefined. Se uma variável 
    foi declarada, mas não foi atribuída um valor, tem o valor undefined.
*/

let Ka;

console.log (typeof Ka);

/*
    Null:

    Este é outro tipo de dado especial que pode ter apenas um valor - o valor nulo (null). 
    Um valor null significa que não há valor. 
    Não é equivalente a uma string vazia ("") ou 0, simplesmente não é nada.
*/

let g = null

console.log(g);

/*
    Object:
    
    O object é um tipo de dado complexo que permite armazenar coleções de dados.

    Um object contém propriedades, definidas como um par de valores-chave. 
    
    Uma chave de propriedade (nome) é sempre uma string, mas o valor pode ser qualquer tipo de dados, 
    
    como strings, números, booleanos ou tipos de dados complexos como matrizes, funções e outros objetos. 
    
*/

let vazioObject = {};

let pessoa = {"nome": "Clark", "sobrenome": "Kent", "idade": "36"};
 
let car = {
    "modelo": "BMW X3",
    "cor": "white",
    "portas": 5
}
console.log(vazioObject);
console.log(pessoa);
console.log(car);


/*
    Array:
    
    Um array é um tipo de objeto usado para armazenar vários valores em uma única variável. 
    Cada valor (também chamado de elemento) em um array tem uma posição numérica, conhecida 
    como seu índice, e pode conter dados de qualquer tipo - números, strings, booleanos, funções, objetos e até mesmo outras array. 
    O índice do array começa em 0, de modo que o primeiro elemento do array seja arr [0] e não arr [1].
*/
let cores = ["Red", "Yellow", "Green", "Orange"];
let cidades = ["London", "Paris", "New York"];
 
console.log (cores[0]);   
console.log (cidades[2]);  

/*
    Function:
    A function é um objeto que podemos chamar para que executar um bloco de código. 
    Como as funções são objetos, é possível atribuí-las a variáveis,
*/

let Ola = function(){ 
    return "Olá Mundo!"; 
}

console.log (typeof Ola) 
console.log (Ola());     
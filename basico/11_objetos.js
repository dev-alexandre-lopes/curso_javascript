// Objetos

/*
JavaScript é uma linguagem baseada em objetos e em JavaScript quase tudo é um objeto ou age como um objeto. 
Portanto, para trabalhar com JavaScript de forma eficaz e eficiente, precisamos entender como os objetos funcionam e 
também como criar seus próprios objetos e usá-los.

Um objeto JavaScript é apenas uma coleção de valores nomeados. Esses valores nomeados são geralmente chamados de propriedades 
do objeto. Um array é uma coleção de valores, onde cada valor tem um índice (uma chave numérica) que começa de zero e aumenta 
em um para cada valor. Um objeto é semelhante a um array, mas a diferença é que você mesmo define as chaves, como nome, idade, 
gênero e assim por diante. 
*/

//Criando Objetos:

let person = {
    nome: "João",
    idade: 28,
    genero: "masculino",
   
};

console.log(person.nome)

//Acessando propriedades do Objeto:

console.log(person.idade)

let book = {
    nome: "Harry Potter and the Goblet of Fire",
    autor: "J. K. Rowling",
    "data da publicação": "8 July 2000"
};

console.log(book.autor)
console.log(book["data da publicação"]);

// Criando uma factory: Função que cria objetos

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome:sobrenome,
        idade: idade,
    }
};

const pessoa1 = (criaPessoa('Vitor', 'Silva', '27'));
const pessoa2 = (criaPessoa('Carlos', 'Almeida', '52'));
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa2);
console.log(pessoa2.idade);

//Utilizando o this para operar os métodos dos objetos;

 let pessoa3 = {
    nome: 'Carlos',
    sobrenome: 'Feitoza',
    idade: '54', 
    fala(){
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome}!` )
        console.log(`Minha idade é: ${this.idade} anos` )
    },
    incrementa(){
        this.idade++;
    }
}
console.log(pessoa3);
pessoa3.incrementa()
pessoa3.fala()
pessoa3.incrementa()
pessoa3.fala()
pessoa3.incrementa()
pessoa3.fala()

//Fazendo Looping dentro das propriedades do Objeto:

for (let i in pessoa3){
    console.log(pessoa3[i]);
}
//Configurando as propriedades do objeto: Incluindo novas propriedades

pessoa3.pais = "Brasil"
pessoa3.tipoSangue = "O"
pessoa3.fatorRH = "Positivo"
pessoa3.corCabelo = "Castanho"
console.log(pessoa3)

//Deletando as propriedades do objeto:

delete pessoa3.corCabelo
console.log(pessoa3)

//Chamando métodos do objeto:

pessoa3.fala()


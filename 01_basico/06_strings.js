/*
Strings:

Uma string é uma sequência de letras, números, caracteres especiais e valores aritméticos ou 
combinação de todos. Strings podem ser criados colocando o literal de string (ou seja, caracteres 
de string) entre aspas simples (') ou aspas duplas ("). São indexadas, ou seja cada caractere tem 
um índice. O índice 0 representa o primeiro dígito.

As sequências de escape também são úteis para situações em que você deseja usar caracteres que não 
podem ser digitados em um teclado. Aqui estão algumas outras sequências de escape mais comumente 
usadas.

\n  é substituído pelo caractere de nova linha;
\t  é substituído pelo caractere de tabulação;
\r  é substituído pelo caractere de retorno de carro;
\b  é substituído pelo caractere backspace;
\\  é substituído por uma única barra invertida (\);

Propriedade e Métodos:

length       - Retorna o tamanho de uma string;
charAt()     - Retorna o caractere no índice especificado.
charCodeAt() - Retorno o caractere unicode da string.
indexOf()    - Retorna o índice ou posição da (primeira) ocorrência de uma "string" especificada dentro de uma string.
lastIndexOf()- Retorna o índice ou posição da (última) ocorrência da string especificada dentro de uma string.
search()     - Pesquisa um determinado pedaço de texto ou padrão dentro de uma string.
slice ()     - Método para extrair uma parte ou substring de uma string.
substring()  - Método para extrair uma seção da string dada com base nos índices inicial e final.
substr ()    - Método para extrair semelhante ao slice () com uma diferença sutil, o segundo parâmetro especifica 
               o número de caracteres a serem extraídos em vez do índice final.
replace()    - Método para substituir parte de uma string por outra string.
toUpperCase()- Método para converter uma string em maiúsculas.
toLowerCase()- Método para converter uma string em minúsculas.
split()      - Método que pode ser usado para dividir uma string em um array de strings.
padStart()   - Método que oferece suporte ao preenchimento no início de uma string. 
padEnd()     - Método que oferece suporte ao preenchimento no final de uma string. 
*/ 

// Criando uma String

let texto = "Um texto qualquer, de qualquer tamanho"; // Criando uma String

console.log (texto);

// Propriedade .length verifica o tamanho da string: 17

let tamanho = texto.length; 

console.log (tamanho);

// Verificando o valor na posição 6: t

console.log(texto[6]);

// Método charAt() identifica o valor de uma posição específica: m

console.log(texto.charAt(1));

// Método charCodeAt() retorna o caractere unicode da string.

console.log(texto.charCodeAt(1));

// Método indexOf retorna a posição da primeira ocorrência de uma string

let pos = texto.indexOf('texto'); 
console.log (pos);

//Exemplo de lastIndexOf

let text2 = ("Dia de sol quente no mês de janeiro. Todos os dias de sol são bons");

// Método lastIndexOf retorna a posição da ultima ocorrência de um string

let pos1 = text2.lastIndexOf('sol');
console.log (pos1);

//Forma de concatenar texto usando: Template Strings 

console.log (`${texto} em um lindo sábado`); 

// Pesquisando pou um padrão dentro da string com search(). Não suporta expressões regulares.

let str = "Color red looks brighter than color blue.";
console.log(str);
let pos2 = str.search("color");
console.log(pos2);

//Extraindo uma substring de uma string -> .slice(startIndex, endIndex).

let email = 'Esse é meu e-mail:joao@gmail.com';
let valorEmail = email.slice(18,32);
console.log(valorEmail);

// Extração de um número fixo de caracteres de uma string -> .substring(startIndex, endIndex)

let pos3 = email.substring(4,10);
console.log (pos3);

// Extração de um número fixo de caracteres de uma string -> .substr (startIndex, length)

let pos4 = email.substr(7, 25);
console.log (pos4);

//Substituindo o conteúdo de uma string com replace() -> .replace(regexp|substr, newSubstr)

let novoEmail= email.replace('joao@gmail.com', 'joaopaulo@hotmail.com');
console.log(novoEmail);

// Convertendo uma string para maiusculas com toUpperCase():

let word = 'maiuscula e minuscula';
let WORD = word.toUpperCase();
console.log (WORD)

// Convertendo uma string para maiusculas com toLowerCase():

let resultado = WORD.toLowerCase();
console.log (resultado);

// Dividindo uma string em um array com split -> .split(separator, limit)

let strFruta = 'Maça, Banana, Laranja, Mamão, Abacaxi, Goiaba'
let arrFruta = strFruta.split(",");
console.log(arrFruta);
console.log(arrFruta[0]);
console.log(arrFruta[1]);
console.log(arrFruta[2]);
console.log(arrFruta[3]);

let arrWord = word.split(" ");
console.log(arrWord);
console.log(arrWord[0]);
console.log(arrWord[1]);
console.log(arrWord[2]);
console.log(arrWord[3]);

//Preenchimento no início de uma string com padStart:

let num = '5';
num1 = num.padStart(4,0);
console.log(num1);
num2 = num.padEnd(4,0);
console.log(num2);

// Extraindo espaços de uma string com o trim()

wordSemespaco = word.trim();
console.log(wordSemespaco);

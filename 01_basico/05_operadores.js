/*
Operadores são símbolos ou palavras-chave que dizem ao mecanismo JavaScript para realizar algum 

tipo de ação. Por exemplo, o símbolo de adição (+) é um operador que informa ao mecanismo JavaScript 

para adicionar duas variáveis ​​ou valores, enquanto os símbolos igual a (==), maior que (>) 

ou menor que (<) são os operadores que informam ao mecanismo JavaScript para comparar duas 

variáveis ​​ou valores e assim por diante.

*/

// Tipos de Operadores: Aritméticos, Atribuição, String, Incremento e Decremento, Lógicos e Comparação

/* Operadores Aritméticos: 

    + (Adição)
    - (Subtração) 
    * (Multiplicação) 
    / (Divisão)
    **(Potenciação)
    % (Resto da Divisão)
    Precedência: (), **, * / %, + - 
*/


let VarA = 25;
let VarB = 5;
let soma = VarA + VarB;
let sub = VarA - VarB;
let mul = VarA * VarB;
let div = VarA / VarB;
let pot = VarA ** VarB;
let rest = VarA % 2;
let conta = (VarA*VarB)/(VarA-VarB) + 1// Observar a ordem de prioridade
console.log("*************************************************************************");
// Exibindo os resultados:
console.log(soma);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mul);
console.log(pot);
console.log(rest);
console.log(conta);
console.log("*************************************************************************");
/* Operadores de Atribuição: 

    =	Atribui	
    +=	Soma e Atribui 
    -=	Subtrai e Atribui
    *=	Multiplica e Atribui
    /=	Divide e Atribui o quociente
    %=	Divide e Atribui o módulo
*/

let VarC = 12;
let VarD = 6;
VarC += 20;
console.log(VarC);
VarD -= 3;
console.log(VarD);
VarC *= 2;
console.log(VarC);
VarD /= 2;
console.log(VarD);
VarC %= 2;
console.log(VarC);
console.log("*************************************************************************");
/* Operadores de String:

+	Concatenação
+=	Concatenação com atribuição

*/
let str1 = "Olá";
let str2 = " Mundo!";
 
console.log (str1 + str2); //Exemplo de concatenção de strings
 
str1 += str2;
console.log (str1); 
console.log("*************************************************************************");

/* Operadores de Incremento e Decremento:

++x	    Pre-incrementa
x++	    Post-incrementa
--x	    Pre-decrementa
x--	    Post-decrementa

*/

let x; // Declaring Variable
 
x = 10;
console.log (++x); // Outputs: 11
console.log (x);   // Outputs: 11
 
x = 10;
console.log (x++); // Outputs: 10
console.log (x);   // Outputs: 11
 
x = 10;
console.log (--x); // Outputs: 9
console.log (x);   // Outputs: 9
 
x = 10;
console.log (x--); // Outputs: 10
console.log (x);   // Outputs: 9
console.log("*************************************************************************");

/* Operadores Lógicos:

   &&	Operação lógica - And
   ||	Operação lógica - Or
   !	Operação lógica - Not
*/

/*
Chama-se ano bissexto o ano ao qual é acrescentado um dia extra, ficando com 366 dias, 
um dia a mais do que os anos normais de 365 dias, ocorrendo a cada quatro anos.
*/

// Cálculo de um ano bissexto:

let ano = 2020;
 
// Anos Bissextos são divisiveis por 400 ou por 4 mão não por 100
if((ano % 400 == 0) || ((ano % 100 != 0) && (ano % 4 == 0))){
    console.log (`${ano} é um ano bissexto.`);//Exemplo de uso de Template Strings
} else{
    console.log (`${ano} não é um ano bissexto.`);
}
console.log("*************************************************************************");
/* Operadores de Comparação:

    ==	Igual
    ===	Identico
    !=	Não igual ou diferente
    !==	Não identico
    <	Menor que
    >	Maior que
    >=	Maior ou igual
    <=	Menor ou igual
*/

let p = 25;
let y = 35;
let z = "25";
 
console.log (p == z);  // Outputs: true
console.log (p === z); // Outputs: false
console.log (p != y);  // Outputs: true
console.log (p !== z); // Outputs: true
console.log (p < y);   // Outputs: true
console.log (p > y);   // Outputs: false
console.log (p <= y);  // Outputs: true
console.log (p >= y);  // Outputs: false
console.log("*************************************************************************");



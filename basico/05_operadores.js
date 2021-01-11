/*
Operadores são símbolos ou palavras-chave que dizem ao mecanismo JavaScript para realizar algum 

tipo de ação. Por exemplo, o símbolo de adição (+) é um operador que informa ao mecanismo JavaScript 

para adicionar duas variáveis ​​ou valores, enquanto os símbolos igual a (==), maior que (>) 

ou menor que (<) são os operadores que informam ao mecanismo JavaScript para comparar duas 

variáveis ​​ou valores e assim por diante.

*/

// Tipos de Operadores: Aritméticos, Atribuição, String,  Incremento e Decremento, Lógicos e Comparação

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

// Exibindo os resultados:
console.log(soma);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mul);
console.log(pot);
console.log(rest);
console.log(conta);

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













/*
let contador = 1;
contador++; // Operador de Incremento, utilizado sempre com let
contador++;
contador++;
passo = 3
console.log(contador + passo);
console.log(--contador);

contador += passo;
console.log(contador);

//parseInt('5') -> Transforma string em número
//parserFloat('4.56')
*/
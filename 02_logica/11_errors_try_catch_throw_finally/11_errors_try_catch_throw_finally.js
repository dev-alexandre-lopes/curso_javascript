/*
Tratamento de erros em javascript: Try - Catch - Throw

Ao executar o código JavaScript, podem ocorrer diferentes erros. Os erros podem ser erros de codificação feitos pelo programador, 
erros devido a uma entrada errada e outras coisas imprevisíveis

A instrução try: permite que você teste erros em um bloco de código. 

A instrução catch: permite lidar com o erro. 

A instrução throw: permite criar erros personalizados. 

A instrução finally: permite que você execute o código, após try e catch, independentemente do resultado.

*/

//Exemplo de trativa de erro com: try e catch

//O Bloco try tenta executar o trecho de código e se ocorrer um erro vai para o bloco catch
try {
    console.log(naoexiste);
}
catch (err) {
    console.log("Não existe a variável")
}
console.log("******************************************************************************************************************")

//Exemplo de trativa de erro com: throw

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números!')//Esse é o erro gerado dentro da função
    }
    return x + y
}
//Essa parte do código é executada quando não há erros
try {
    console.log(soma(3, 3));
    console.log(soma('q', 3));
}
//Essa parte do código é executada quando há erros
catch (error) {
    // console.log(error);//Pega e apresenta o erro
    console.log("Algum erro ocorreu!")
}
console.log("******************************************************************************************************************")

//Exemplo de tratativa de erro com: finally

//Essa parte do código é executada quando não há erros
try {
    console.log(a);//Gerando um erro: variável não declarada
    console.log('Abri o arquivo');
    console.log('Manipulei o arquivo');
    console.log('Fechei o arquivo');
}
//Essa parte do código é executada quando há erros
catch (error) {
    //console.log(error);//Mostrando onde ocorreu e o tipo de erro
    console.log("Algum erro ocorreu!");
}
//Essa parte do código é sempre executada;
finally {
    console.log("FINALLY: Sempre sou executado!")
}
console.log("******************************************************************************************************************")

// Exemplo de um função que retorna a hora de um data qualquer, com uma tratativa de erro:

function retornaHora(data) {

    if (data && !(data instanceof Date)) {
        throw new TypeError("Aguardando uma instância de Data!");
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

}
//Bloco de Código com a trativa de erro:

try {
    const data = new Date('02-09-1983 12:48:32')
    const hora = retornaHora();
    console.log(hora);

}
catch (error) {
    console.log(error)
}
finally {
    console.log("Tenha um bom dia!")
}



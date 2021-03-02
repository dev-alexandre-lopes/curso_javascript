//Obs: Criar pequenas funções para resolver ação!

//Capturar o evento de submit do formulário para que seja possível capturar os dados
const form = document.querySelector('#formulario');

//Adicionar a escuta dos seguintes eventos: submit e função evento
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //console.log('Evento capturado!');
    //setResultado('Teste da função!')
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura')
    //console.log(inputPeso, inputAltura)
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //console.log(peso, altura)
    if (!peso) {
        setResultado('Peso inválido!', false)
        return;
    }
    if (!altura) {
        setResultado('Altura inválida!', false)
        return;
    }

    const imc = getIMC(peso, altura);//Calculando o IMC
    const nivelIMC = getNivelIMC(imc);//Calculando o nivel do IMC
    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;//Apresentando o resultado

    setResultado(msg, true)//Enviando a msg para apresentar no HTML

});

//Função para calcular o nível do IMC
function getNivelIMC(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.5) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//Função para calcular o IMC
function getIMC(peso, altura) {
    const imc = peso / altura ** 2;//Calculo do IMC
    return imc.toFixed(2);//Fixando 2 casas decimais
}

//Função para criar um parágrafo no HTML
function criaP() {
    const p = document.createElement('p')
    return p
}

//Função para escrever uma mensagem (HTML) dentro da div com id = resultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = " ";//Zera o HTML (limpa)
    //resultado.innerHTML = `<p>${msg}</p`
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-verde');
    }
    else {
        p.classList.add('paragrafo-vermelho');
    }
    p.innerHTML = (`${msg}`);
    resultado.appendChild(p);
}




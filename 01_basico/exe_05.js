
const numero = Number(prompt('Digite um número:'));

const numeroValor = document.getElementById('numeroTitulo')

numeroValor.innerHTML = numero

const raiz = document.getElementById('raizQuad')

raiz.innerHTML = Math.pow(numero,0.5)

const int = document.getElementById('numInt')

int.innerHTML = Number.isInteger(numero)

const NaoeNumero = document.getElementById('numNaN')

NaoeNumero.innerHTML = Number.isNaN(numero)

const ArrBaixo = document.getElementById('ArrBaixo')

ArrBaixo.innerHTML = Math.floor(numero)

const ArrCima = document.getElementById('ArrCima')

ArrCima.innerHTML = Math.ceil(numero)

const AjuDec = document.getElementById('AjuDec')

AjuDec.innerHTML = Number(numero.toFixed(2))


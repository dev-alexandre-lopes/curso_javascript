/*
Exercício:

Pegar a cor do background do body e aplicar no background dos parágrafos de uma div que está dentro do container
*/
{//Início do projeto
    const paragrafos = document.querySelector('.paragrafos');
    const pas = paragrafos.querySelectorAll('p')

    const estiloBody = getComputedStyle(document.body)
    const backgroundColorbody = estiloBody.backgroundColor
    console.log(backgroundColorbody)

    for (let p of pas) {
        p.style.backgroundColor = backgroundColorbody;
        p.style.color = "white";
    }

}

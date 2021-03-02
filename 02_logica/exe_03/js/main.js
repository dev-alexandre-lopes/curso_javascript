/*
Exercício:

Desenvolver um código em javascript que a partir de um array, cria-se os elementos abaixo no HTML:
p
div
footer
section
*/
{//Início do projeto
    const elementos = [
        { tag: 'p', texto: 'Precisa estudar bastante!' },
        { tag: 'div', texto: 'Praticar todos os dias!' },
        { tag: 'footer', texto: 'Fazer muitos projetos!' },
        { tag: 'section', texto: 'Treino leva a perfeição!' },
    ]
    const resultado = document.querySelector('#resultado');
    const div = document.createElement('div')
    for (let i = 0; i < elementos.length; i++) {
        let { tag, texto } = elementos[i]
        let tagCriada = document.createElement(tag);
        tagCriada.classList.add(tag);
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);
        resultado.appendChild(tagCriada);        
    }

//Outra forma de fazer:
    /*
      for (let i = 0; i < elementos.length; i++) {
        const tipo = elementos[i].tag
        const msg = elementos[i].texto
        if (tipo == 'p') {
            const p = document.createElement('p')//Cria elemento
            p.classList.add('paragrafo');//Cria uma Classe
            p.innerHTML = (`${msg}`);//Insere no HTML
            resultado.appendChild(p);//Add no DOM
        }
        if (tipo == 'div') {
            const d = document.createElement('div')
            d.classList.add('padrao');
            d.innerHTML = (`${msg}`);
            resultado.appendChild(d);
        }
        if (tipo == 'footer') {
            const f = document.createElement('footer')
            f.classList.add('footer');
            f.innerHTML = (`${msg}`);
            resultado.appendChild(f);
        }
        if (tipo == 'section') {
            const s = document.createElement('section')
            s.classList.add('section');
            s.innerHTML = (`${msg}`);
            resultado.appendChild(s);
        }
    }*/
}

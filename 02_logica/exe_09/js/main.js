/*
Exercício:

Criar um ToDo List usando o Local Storage
*/
//Início do projeto

//Envolver o projeto dentro de uma função para tirar o escopo global
function tarefas() {

    const inputTarefa = document.querySelector('.input-tarefa');//Em javascript usar CammelCase
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');


    inputTarefa.addEventListener('keypress', function (e) {
        //console.log(e)//Verifia qual tecla foi pressionada
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;//Se o input não for vazio
            criaTarefa(inputTarefa.value);
        }
    });

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerHTML = textoInput;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    function criaLi() {
        const li = document.createElement("li");
        return li
    }

    function limpaInput() {
        inputTarefa.value = "";
        inputTarefa.focus();

    }

    function criaBotaoApagar(li) {
        li.innerText += " ";
        const botaoApagar = document.createElement("button");
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'apagar');
        li.appendChild(botaoApagar);
    }
//Função que salva a tarefa num array
    function salvarTarefas(){
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];
        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        //Transforma um array em um String JSON
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        //Salva string no armazenamento local através de um JSON String
        localStorage.setItem('tarefas', tarefasJSON);
        
    }
    //Função cria a tarefa a partir do LocalStorage 
    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listadeTarefas = JSON.parse(tarefas);//Transforma para um array objeto
        //console.log(listadeTarefas);
        for (let tarefa of listadeTarefas){
            criaTarefa(tarefa);
        }
    }
    adicionaTarefasSalvas();
    
    btnTarefa.addEventListener('click', function () {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });

}
tarefas();




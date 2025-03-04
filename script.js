tarefas = []

function adicionarTarefa() {

    /*let cria uma variavel com o nome 'inputTarefa' que recebe o elemento que sera inserido no input do html*/
    const inputTarefa = document.getElementById("inputTarefa")
    //let cria uma variavel com nome 'tarefa', que vai receber o valor do inputTarefa(.value)e o valor de dentro do input que ira para a variavel tarefa. (O trim remove os espaços vazios nas extremidades)
    let tarefa = inputTarefa.value.trim()

    //cria uma variavel com nome mensagem para o paragrafo.
    const mensagem = document.getElementById("mensagem")

    //cria uma estrutura de decisão caso o 'input' esteja vazio ou com algo dentro
    if (tarefa == ""){
        //texto que fica abaixo do botão se campo tiver vazio
        let mensagemErro = "Digite uma tarefa para adiciona-lá!";
        //coloca a variavel 'mensagem' no texo do paragrafo
        mensagem.textContent = mensagemErro;
    }else{
        //texto que fica abaixo do botão se tudo tiver certo
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        //coloca a variavel 'mensagem' no texo do paragrafo
        mensagem.textContent = mensagemSucesso;
        //adiciona mais uma terefa 
        tarefas.push(tarefa)
        rendenizarTarefa()
        
        //limpa a caixa de texto depois de apertar o botão.
        inputTarefa.value = ""
    }

    function rendenizarTarefa(){
        const listaTarefa = document.getElementById("listaTarefa")
        listaTarefa.innerHTML = ""

        let i = 0
        for (i; i < tarefas.length; i++){
            let novaTarefa = document.getElementById("li")
            novaTarefa.textContent = tarefas[i]
            listaTarefa.appendChild(novaTarefa)
        }
    }
  }  

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

        //let cria uma variavel com nome listaTarefa, que iira refeber o elemento da    listaTarefa' do documento html.
        const listaTarefa = document.getElementById("listaTarefa")
    
        //let cria uma nova variavel com nome 'novaTarefa' que ira criar uma lista dentro da 'listaTarefa'.
        let novaTarefa = document.createElement("li")
    
        //novaTarefa recebe o elemento 'tarefa' que foi inserido no (inputtarefa)
        novaTarefa.textContent = tarefa
    
        //insere o conteudo da 'novaTarefa' que é a (li), na proxima lista criada.
        listaTarefa.appendChild(novaTarefa)

    }

    //limpa a caixa de texto depois de apertar o botão.
    inputTarefa.value = ""
  }  
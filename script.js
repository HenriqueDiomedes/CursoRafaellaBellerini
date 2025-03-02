

function adicionarTarefa() {
    //texto que fica abaixo do botão.
    let mensagem = "Tarefa adicionada com sucesso!";
    
    /*let cria uma variavel com o nome 'inputTarefa' que recebe o elemento que sera inserido no input do html*/
    let inputTarefa = document.getElementById("inputTarefa")
    
    //let cria uma variavel com nome 'tarefa', que vai receber o valor do inputTarefa(.value)e o valor de dentro do input que ira para a variavel tarefa.
    let tarefa = inputTarefa.value

    //coloca a variavel 'mensagem' no texo do paragrafo
    document.getElementById("mensagem").textContent = mensagem;

    //let cria uma variavel com nome listaTarefa, que iira refeber o elemento da    listaTarefa' do documento html.
    let listaTarefa = document.getElementById("listaTarefa")

    //let cria uma nova variavel com nome 'novaTarefa' que ira criar uma lista dentro da 'listaTarefa'.
    let novaTarefa = document.createElement("li")

    //novaTarefa recebe o elemento 'tarefa' que foi inserido no (inputtarefa)
    novaTarefa.textContent = tarefa

    //insere o conteudo da 'novaTarefa' que é a (li), na proxima lista criada.
    listaTarefa.appendChild(novaTarefa)

    //limpa a caixa de texto depois de apertar o botão.
    inputTarefa.value = ""
  }  
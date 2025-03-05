// Array para armazenar as tarefas
let tarefas = []

/**
 * Função para adicionar uma tarefa
 */
function adicionarTarefa() {
    // Seleciona o input de tarefa
    const inputTarefa = document.getElementById("inputTarefa")
    
    // Pega o valor do input e remove espaços em branco
    let tarefa = inputTarefa.value.trim()

    // Seleciona o parágrafo de mensagem
    const mensagem = document.getElementById("mensagem")

    // Verifica se a tarefa está vazia
    if (tarefa == "") {
        // Mostra mensagem de erro
        let mensagemErro = "Digite uma tarefa para adiciona-lá!";
        mensagem.textContent = mensagemErro;
    } else {
        // Mostra mensagem de sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        
        // Adiciona a tarefa ao array
        tarefas.push(tarefa)
        
        // Renderiza a lista de tarefas
        rendenizarTarefa()
    }

    // Limpa o input de tarefa
    inputTarefa.value = ""
}

/**
 * Função para renderizar a lista de tarefas
 */
function rendenizarTarefa() {
    // Seleciona a lista de tarefas
    const listaTarefas = document.getElementById("listaTarefas")
    
    // Limpa a lista de tarefas
    listaTarefas.innerHTML = ""

    // Itera sobre as tarefas
    for (let i = 0; i < tarefas.length; i++) {
        // Cria um novo item de lista
        let novaTarefa = document.createElement("li")
        
        // Define o texto do item de lista
        novaTarefa.textContent = tarefas[i]

        // Cria um botão para remover a tarefa
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        // Cria um botão para editar a tarefa
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)

        // Adiciona os botões ao item de lista
        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        
        // Adiciona o item de lista à lista de tarefas
        listaTarefas.appendChild(novaTarefa)
    }
}

/**
 * Função para remover uma tarefa
 * @param {number} i Índice da tarefa a ser removida
 */
function removerTarefa(i) {
    // Remove a tarefa do array
    tarefas.splice(i, 1)
    
    // Renderiza a lista de tarefas
    rendenizarTarefa()
}

/**
 * Função para editar uma tarefa
 * @param {number} i Índice da tarefa a ser editada
 */
function editarTarefa(i) {
    // Pergunta ao usuário a nova tarefa
    let tarefaEditada = prompt("Edite a tarefa:")
    
    // Verifica se a nova tarefa não está vazia
    if (tarefaEditada.trim() !== "") {
        // Edita a tarefa no array
        tarefas[i] = tarefaEditada
        
        // Renderiza a lista de tarefas
        rendenizarTarefa()
    }
}

/**
 * Função para limpar a lista de tarefas
 */
function limparLista() {
    // Limpa o array de tarefas
    tarefas.length = 0
    
    // Renderiza a lista de tarefas
    rendenizarTarefa()
    
    // Seleciona o parágrafo de mensagem
    const mensagem = document.getElementById("mensagem")
    
    // Mostra mensagem de sucesso
    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
}
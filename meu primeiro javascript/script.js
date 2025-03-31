let tarefas = [];

document.getElementById("adicionarBtn").addEventListener("click", adicionarTarefa);
document.getElementById("limparBtn").addEventListener("click", limparLista);

function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagem.textContent = "Erro! Digite uma tarefa!";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "green";
        tarefas.push(tarefa);
        renderizarTarefas();
    }

    inputTarefa.value = "";
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa, i) => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);
    });

    // Exibir ou ocultar o botão "Limpar Todas"
    const limparBtn = document.getElementById("limparBtn");
    limparBtn.style.display = tarefas.length > 0 ? "block" : "none";
}

function removerTarefa(i) {
    tarefas.splice(i, 1);
    renderizarTarefas();
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa:", tarefas[i]);
    if (tarefaEditada && tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        renderizarTarefas();
    }
}

function limparLista() {
    tarefas = [];
    renderizarTarefas();
    document.getElementById("mensagem").textContent = "Lista limpa com sucesso!";
}

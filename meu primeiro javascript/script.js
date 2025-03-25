function adicionarTarefa() {
    
    
          
          let inputTarefa = document.getElementById("inputTarefa")
          let tarefa = inputTarefa.value 

          let listaTarefas = document.getElementById("listaTarefas")
          let novaTarefa = document.createElement("li")
          novaTarefa.textContent = tarefa
          listaTarefas.appendChild(novaTarefa)

          let mensagem = "Tarefa adicionada com sucesso!"
          document.getElementById("mensagem").textContent = mensagem
      

          inputTarefa.value = ""

  }
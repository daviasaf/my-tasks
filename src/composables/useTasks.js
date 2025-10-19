import { ref, onMounted } from "vue";

let isErrorForm = ref(false);




let taskStorage = localStorage.getItem("tasks");
let tasks = ref(JSON.parse(taskStorage) || []);
let idTask = ref(0);

let userTaskName = ref("");
let userTaskDesc = ref("");



function erroDetectadoForm() {
  isErrorForm.value = true;
}
function semErroDetectadoForm() {
  isErrorForm.value = false;
}


export function useTasks() {
  function updateId() {
    // Operação ternária que verifica se o array é menor que 0, se sim, ele mapeia todos os itens no array
    // e pega o maior deles com o Math.max, tem que usar o spread operator para espalhar em um array
    // Caso contrário, enviará o valor 0 para começar a contagem
    idTask.value =
      tasks.value.length > 0 ? Math.max(...tasks.value.map((m) => m.id)) : 0;
  }
  onMounted(() => {
    updateId();
  });

  function stringifyTask() {
    const taskString = JSON.stringify(tasks.value);
    localStorage.setItem("tasks", taskString);
  }

  function addTask(nome, desc) {
    let item = {
      nome: nome,
      desc: desc,
      id: (idTask.value += 1),
    };
    let nomeValido = item.nome.trim().length > 0;
    let descValido = item.desc.trim().length > 0;
    if (nomeValido && descValido) {
      tasks.value.push(item);
      stringifyTask();
      return semErroDetectadoForm();
    }
    erroDetectadoForm();
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter((tr) => tr.id != id);
    stringifyTask();
    updateId();
  }

  function updateTask(nome, desc, id) {
    if (nome && desc) {
      tasks.value = tasks.value.map((task) => {
        if (task.id == id) {
          const tarefaAtualizada = {
            nome,
            desc,
            id,
          };
          return tarefaAtualizada;
        }
        return task;
      });
    }
    stringifyTask();
  }

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    updateId,
    userTaskName,
    userTaskDesc,
    erroDetectadoForm,
    semErroDetectadoForm,
    isErrorForm,
  };
}

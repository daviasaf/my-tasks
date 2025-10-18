<script setup>
import { ref, onMounted } from "vue";
import CardTask from "../components/CardTask.vue";
import Button from "../components/Button.vue";
import inputText from "../components/InputText.vue";
import MensagemErro from "../components/MensagemErro.vue";


let userTaskName = ref("");
let userTaskDesc = ref("");
let isError = ref(false);

let taskStorage = localStorage.getItem("tasks");
let tasks = ref(JSON.parse(taskStorage) || []);

// Config ID das tarefas
let idTask = ref("");
function atualizarIdTask() {
  // Operação ternária que verifica se o array é menor que 0, se sim, ele mapeia todos os itens no array
  // e pega o maior deles com o Math.max, tem que usar o spread operator para espalhar em um array
  // Caso contrário, enviará o valor 0 para começar a contagem
  idTask.value =
    tasks.value.length > 0 ? Math.max(...tasks.value.map((m) => m.id)) : 0;
}
onMounted(() => {
  atualizarIdTask();
});

// Funções
function enviarDados() {
  let item = {
    nome: userTaskName.value,
    desc: userTaskDesc.value,
    id: (idTask.value += 1),
  };
  let nomeValido = item.nome.trim().length > 0;
  let descValido = item.desc.trim().length > 0;
  console.log(nomeValido);
  console.log(nomeValido);
  if (nomeValido && descValido) {
    console.log(nomeValido);
    console.log(descValido);
    tasks.value.push(item);
    let taskString = JSON.stringify(tasks.value);
    localStorage.setItem("tasks", taskString);
    semErroDetectado();
    limparInputs();
    return;
  }
  erroDetectado();
}
function deletandoTask(idTaskDeletar) {
  tasks.value = tasks.value.filter((tr) => tr.id != idTaskDeletar);
  let taskString = JSON.stringify(tasks.value);
  localStorage.setItem("tasks", taskString);
  atualizarIdTask();
}
function atualizandoTask(tarefaAtualizada) {
  tasks.value = tasks.value.map((task) => {
    if (task.id == tarefaAtualizada.id) {
      return tarefaAtualizada;
    }
    return task;
  });
}
function limparInputs() {
  userTaskName.value = "";
  userTaskDesc.value = "";
}
function erroDetectado() {
  isError.value = true;
}
function semErroDetectado() {
  isError.value = false;
}
</script>

<template>
  <main class="h-auto flex flex-col my-5">
    <!-- Área de escrever as tarefas -->
    <form
      @submit.prevent="enviarDados"
      :class="isError ? 'with-error' : 'no-error'"
      class="min-w-35 w-3/4 sm:w-3/5 md:w-2/5 grid grid-cols-1 gap-4 bg-gray-100 border-2 p-5 mx-auto mb-5 rounded"
    >
      <p class="flex justify-center items-start text-2xl">Escreva sua tarefa</p>
      <inputText nameLabel="Nome da tarefa" nameInput="user-task" v-model="userTaskName" ></inputText>
      <inputText nameLabel="Descrição da tarefa" nameInput="user-task-desc" v-model="userTaskDesc"></inputText>
      <Button #buttonContent>Enviar</Button>
      <MensagemErro v-show="isError" ></MensagemErro>
    </form>
    <!-- Área de mostrar as tarefas -->
    <div v-show="tasks.length > 0" class="flex flex-wrap justify-around">
      <CardTask
        @deletarTask="deletandoTask"
        @atualizarTask="atualizandoTask"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </main>
</template>

<style scoped>
.with-error {
  border: 2px solid oklch(80.8% 0.114 19.571);
  border-radius: 4px;

  #titulo {
    border-bottom: 1px solid oklch(80.8% 0.114 19.571);
  }
}
.no-error {
  border: 2px solid oklch(92.5% 0.084 155.995);
}
</style>

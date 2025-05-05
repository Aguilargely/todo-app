<template>
    <q-input filled v-model="newTask" label="Nueva tarea" @keyup.enter="handleAdd">
      <template v-slot:append>
        <q-btn icon="add" @click="handleAdd" flat round dense />
      </template>
    </q-input>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useTaskStore } from '../../stores/taskStore'
  
  const newTask = ref('')
  const taskStore = useTaskStore()
  
  function handleAdd() {
    if (newTask.value.trim() !== '') {
      taskStore.addTask(newTask.value.trim())
      newTask.value = ''
    }
  }
</script>

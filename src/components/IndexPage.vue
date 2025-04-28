<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding>
        <div class="q-gutter-md">
          <q-input
            filled
            v-model="newTask"
            label="Nueva tarea"
            @keyup.enter="addTask"
          >
            <template v-slot:append>
              <q-btn icon="add" @click="addTask" flat round dense />
            </template>
          </q-input>

          <q-list bordered separator>
            <q-item v-for="(task, index) in tasks" :key="index">
              <q-item-section avatar>
                <q-checkbox v-model="task.done" />
              </q-item-section>

              <q-item-section>
                <div :class="{ 'text-strike': task.done }">{{ task.text }}</div>
              </q-item-section>

              <q-item-section side>
                <q-btn icon="delete" color="red" flat round dense @click="deleteTask(index)" />
              </q-item-section>
            </q-item>
          </q-list>

        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ text: newTask.value.trim(), done: false })
    newTask.value = ''
  }
}

function deleteTask(index) {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.text-strike {
  text-decoration: line-through;
}
</style>

<template>
  <q-page padding>
    <div class="q-gutter-md">
      <TaskInput />
      <TaskList :tasks="taskStore.activeTasks" :routePath="route.path" />
    </div>
  </q-page>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'
import { useRoute } from 'vue-router'
import TaskInput from '../components/Content/TaskInput.vue'
import TaskList from '../components/Content/TaskList.vue'

const taskStore = useTaskStore()
const route = useRoute()
</script>

<template>
  <q-page padding>
    <div class="q-gutter-md">
      <TaskList :tasks="taskStore.completedTasks" :routePath="route.path" />
    </div>
  </q-page>
</template>

<script setup>
import TaskList from '../components/Content/TaskList.vue'
import { useTaskStore } from '../stores/taskStore'
import { useRoute } from 'vue-router'

const taskStore = useTaskStore()
const route = useRoute()
</script>

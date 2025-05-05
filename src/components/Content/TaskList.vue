<template>
  <q-list bordered separator>
    <q-item v-for="task in tasks" :key="task.id">
      
      <!-- Checkbox solo visible en /create -->
      <q-item-section avatar v-if="routePath === '/create'">
        <q-checkbox v-model="task.done" />
      </q-item-section>

      <q-item-section>
        <div :class="{ 'text-strike': task.done }">{{ task.text }}</div>
      </q-item-section>

      <q-item-section side>
        <q-btn
          icon="delete"
          color="red"
          flat
          round
          dense
          @click="handleDelete(task)"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { useTaskStore } from '../../stores/taskStore'

const props = defineProps(['tasks', 'routePath'])
const taskStore = useTaskStore()

function handleDelete(task) {
  if (props.routePath === '/deleted') {
    // Eliminar definitivamente
    taskStore.removeTask(task.id)
  } else {
    // Marcar como eliminado
    taskStore.deleteTask(task.id)
  }
}
</script>

<style scoped>
.text-strike {
  text-decoration: line-through;
}
</style>

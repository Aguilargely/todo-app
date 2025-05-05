import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([])

  const activeTasks = computed(() => tasks.value.filter(t => !t.done && !t.deleted))
  const completedTasks = computed(() => tasks.value.filter(t => t.done && !t.deleted))
  const deletedTasks = computed(() => tasks.value.filter(t => t.deleted))

  function addTask(text) {
    tasks.value.push({ id: Date.now(), text, done: false, deleted: false })
  }

  function deleteTask(id) {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.deleted = true
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return {
    tasks,
    activeTasks,
    completedTasks,
    deletedTasks,
    addTask,
    deleteTask,
    removeTask
  }
})

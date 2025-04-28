<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>Lista de Tareas</q-toolbar-title>

      <q-btn flat label="Crear" @click="goTo('/')" />
      <q-btn flat label="Completadas" @click="goTo('/completed')" />
      <q-btn flat label="Eliminadas" @click="goTo('/deleted')" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path) {
  router.push(path)
}
</script>



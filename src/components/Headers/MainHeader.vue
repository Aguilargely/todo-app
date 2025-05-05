<template>
  <q-toolbar class="header-bg">
    <div>
      <q-btn flat @click="goTo('/')">
        <q-img src="/src/assets/images/Home.png" style="width: 3em" />
      </q-btn>
    </div>

    <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>

    <q-btn flat label="Crear" @click="goTo('/create')" />
    <q-btn flat label="Completadas" @click="goTo('/completed')" />
    <q-btn flat label="Eliminadas" @click="goTo('/deleted')" />
  </q-toolbar>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const pageTitle = ref('Lista de Tareas')

function goTo(path) {
  router.push(path)
}

watch(
  () => route.meta.title,
  (newTitle) => {
    pageTitle.value = newTitle || 'Lista de Tareas'
  },
  { immediate: true }
)
</script>


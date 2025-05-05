<template>
    <q-page class="q-px-xl q-py-lg bg-grey-2 items-center justify-center">
      <div class="flex row full-width full-height items-center justify-center q-gutter-x-lg q-gutter-y-md">
        <div class="col-5" v-for="tab in tabs">
          <CardHome
            :title="tab.title"
            :description="tab.description"
            :to="tab.to">
          </CardHome>
        </div>
      </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import CardHome from '../components/Content/CardHome.vue'
const tabs = ref([
  {
    title: 'Crear Tareas',
    description: 'Crea cuantas tareas quieras realizar',
    to: 'create'
  },
  {
    title: 'Tareas Completadas',
    description: 'Aquí podrás ver todas las tareas que hayas completado',
    to: 'completed'
  },
  {
    title: 'Tareas Eliminadas',
    description: 'Aquí podrás ver todas las tareas que hayas eliminado',
    to: 'deleted'
  }
])
</script>

<style scope>
.row {
  max-width: none;
}
</style>
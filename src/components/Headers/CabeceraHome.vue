<template>
  <div class="header-background flex">
    <q-toolbar class="no-wrap column">
      <div
        class="flex full-width items-center justify-end q-pt-sm no-padding no-margin q-gutter-x-lg"
      >
      </div>
      <div class="flex column full-width full-height q-pb-xl items-center justify-center">
        <div class="flex q-my-xl">
          <q-toolbar-title class="text-center text-uppercase text-h4 text-weight-medium"> Bienvenido a tu lista de tareas</q-toolbar-title>
        </div>
        <div class="flex text-center justify-center text-h6">
          <span> Maneja tus actividades facilmente</span>
        </div>
      </div>
    </q-toolbar>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header-background {
  background-color: #6d00b6;
  background-position: right;
  background-size: auto 500px;
  min-height: 40vh;
  /* height: 50%; */
}
.manual-usuario {
  color: white;
  text-decoration: underline;
}
</style>

<script setup>
import { QLayout, QPageContainer } from 'quasar'
import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    
    <MainHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>


<style scoped>



</style>

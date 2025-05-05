<script setup>
import { QLayout, QPageContainer } from 'quasar'
import MainHeader from './components/Headers/MainHeader.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <component :is="route.meta.header"/>
      <div v-if="!route.meta.hideNavbar">
        <MainHeader />
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
</style>

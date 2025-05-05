<template>
    <div class="flex items-center justify-center q-ma-lg row card-item q-pa-lg bg-white">
      <div class="column flex items-start justify-center col-9 m-2">
        <span class="text-h6 text-weight-medium text-uppercase">{{ title }}</span>
        <span class="q-my-md text-subtitle3">{{ description }}</span>
      </div>
      <div class="flex col-3 full-height text-h1 items-center justify-center">
        <q-avatar size="150px" class="m-2">
          <img :src="getIcon(title)" alt="uk-flag">
        </q-avatar>
      </div>
      <q-btn :to="to"> Acceder</q-btn>
    </div>
</template>
  
<script setup>
    import image1 from '/src/assets/images/Picture1.png'
    import image2 from '/src/assets/images/Picture2.png'
    import image3 from '/src/assets/images/Picture3.png'
    const props = defineProps({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
    });
  
    const getIcon = (title) => {
      switch (title) {
        case 'Crear Tareas':
          return image1
        case 'Tareas Completadas':
          return image2
        case 'Tareas Eliminadas':
          return image3
        default:
          return ''
      }
    };
</script>
  
<style lang="scss" scoped>
  .card-item {
    border-radius: 4px;
  }
  .row {
    padding: 24px;
  }
</style>
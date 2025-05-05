import { createApp } from 'vue'
import App from './App.vue'

// Quasar
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Router
import router from './router'

// Pinia
import { createPinia } from 'pinia'

// Estilos personalizados (si tienes)
import './assets/styles/main.css'

const app = createApp(App)

// Usar Pinia
const pinia = createPinia()
app.use(pinia)

// Usar Quasar
app.use(Quasar, { plugins: {} })

// Usar Router
app.use(router)

app.mount('#app')

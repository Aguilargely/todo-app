import { createRouter, createWebHistory } from 'vue-router'
import CreatePage from '../pages/Create.vue'
import CompletedPage from '../pages/Completed.vue'
import DeletedPage from '../pages/Deleted.vue'
import HomePage from '../pages/Home.vue'
import CabeceraHome from '../components/Headers/CabeceraHome.vue'

const routes = [
  { path: '/', component: HomePage,
    meta: {
      header: CabeceraHome,
      hideNavbar: true,
    }
  },
  { path: '/create', component: CreatePage, meta: { title: 'Crear tareas' } },
  { path: '/completed', component: CompletedPage, meta: { title: 'Tareas completadas' } },
  { path: '/deleted', component: DeletedPage, meta: { title: 'Tareas eliminadas' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

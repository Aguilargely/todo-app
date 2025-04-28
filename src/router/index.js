import { createRouter, createWebHistory } from 'vue-router'
import CreatePage from '../pages/Create.vue'
import CompletedPage from '../pages/Completed.vue'
import DeletedPage from '../pages/Deleted.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component: CreatePage },
  { path: '/completed', component: CompletedPage },
  { path: '/deleted', component: DeletedPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

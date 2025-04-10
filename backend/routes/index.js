import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Rastreio from '../pages/Rastreio.vue'
import Pagamento from '../pages/Pagamento.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rastreio',
    name: 'Rastreio',
    component: Rastreio
  },
  {
    path: '/pagamento',
    name: 'Pagamento',
    component: Pagamento
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

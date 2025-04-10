import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Cadastro from './pages/Cadastro.vue'
import Carrinho from './pages/Carrinho.vue'
import Pagamento from './pages/Pagamento.vue'
import Rastreio from './pages/Rastreio.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/cadastro', component: Cadastro },
  { path: '/carrinho', component: Carrinho },
  { path: '/pagamento', component: Pagamento },
  { path: '/rastreio', component: Rastreio }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

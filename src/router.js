import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Estudiante from './views/Estudiante.vue'
import Pregunta from './views/Pregunta.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: Estudiante
  },
  {
    path: '/pregunta',
    name: 'pregunta',
    component: Pregunta
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

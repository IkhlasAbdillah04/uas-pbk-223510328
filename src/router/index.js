import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WeatherWidget',
      component: WeatherWidget
    }
  ]
})

export default router

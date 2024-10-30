import { createRouter, createWebHistory } from 'vue-router'
import InitPage from './components/init-page.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitPage }
  ]
});
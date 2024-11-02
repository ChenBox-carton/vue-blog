import { createRouter, createWebHistory } from 'vue-router'
import InitPage from './components/init-page.vue';
import Chat from './components/chat.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitPage },
    { path: '/note', component: Chat }
  ]
});

export default router;
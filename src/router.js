import { createRouter, createWebHistory } from 'vue-router'
import InitPage from './components/init-page.vue';
import Note from './components/note.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitPage },
    { path: '/note', component: Note }
  ]
});

export default router;
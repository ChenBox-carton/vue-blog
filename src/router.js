import { createRouter, createWebHistory } from 'vue-router'
import InitPage from './components/init-page.vue'
import Login from './components/login.vue'
import Collection from './components/navigate-link/collection.vue'
import Projects from './components/navigate-link/projects.vue'
import Note from './components/navigate-link/note.vue'
import Chat from './components/navigate-link/chat.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitPage },
    { path: '/collection', component: Collection },
    { path: '/projects', component: Projects },
    { path: '/note', component: Note },
    { path: '/chat', component: Chat },
    { path: '/login', component: Login }
  ]
});

export default router;
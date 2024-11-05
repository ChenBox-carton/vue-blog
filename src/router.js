import { createRouter, createWebHistory } from 'vue-router'
import InitPage from './components/init-page.vue'
import Login from './components/login.vue'
import AboutMe from './components/navigate-link/aboutMe.vue'
import Projects from './components/navigate-link/projects.vue'
import Note from './components/navigate-link/note.vue'
import Chat from './components/navigate-link/chat.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitPage },
    { path: '/aboutMe', component: AboutMe },
    { path: '/projects', component: Projects },
    { path: '/note', component: Note },
    { path: '/chat', component: Chat },
    { path: '/login', component: Login }
  ]
});

export default router;
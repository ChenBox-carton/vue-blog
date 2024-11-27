import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('./components/init-page.vue') },
    { path: '/collection', name: 'collection', component: () => import('./components/navigate/collection.vue') },
    { path: '/projects', name: 'projects', component: () => import('./components/navigate/projects.vue') },
    { path: '/note', name: 'note', component: () => import('./components/navigate/note.vue') },
    { path: '/chat', name: 'chat', component: () => import('./components/navigate/chat.vue') },
    { path: '/login', name: 'login', component: () => import('./components/login.vue') }
  ]
});

export default router;
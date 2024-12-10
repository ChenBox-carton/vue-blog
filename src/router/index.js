import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main.vue'
import Test from '../views/test.vue'
import Login from '../views/login.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/note', name: 'Note', component: Note },
  { path: '/test', name: 'Test', component: Test },
  { path: '/login', name: 'Login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
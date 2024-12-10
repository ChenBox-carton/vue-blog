import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './router'
import 'boxicons/css/boxicons.min.css'

const app = createApp(App)
app.use(router)
app.mount('#app')


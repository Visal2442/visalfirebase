import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Router ========
import router from './router/index';

// Mount the app ---------
const app =createApp(App)
app.use(router)
app.mount('#app')


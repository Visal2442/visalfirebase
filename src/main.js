import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia';

// Router ========
import router from './router/index';

// Mount the app ---------
const pinia = createPinia()
const app =createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')


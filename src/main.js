import { createApp } from 'vue';
import App from './App.vue';

// Vuetify ======
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

// Pinia ===== 
import { createPinia } from 'pinia';

// Router ======
import router from './router/route';

loadFonts()
const pinia = createPinia()
const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount('#app')

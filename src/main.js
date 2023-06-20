import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { createPinia } from 'pinia';
import '@mdi/font/css/materialdesignicons.css';

// Router ========
import router from './router/route';

// Vuetify ========
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Mount the app ---------
const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
    components,
    directives
})
// const vuetify = createVuetify();

app.use(router)
app.use(vuetify)
// app.use(vuetify,{
//     iconfont:'mdi'
// })
app.use(pinia)
app.mount('#app')


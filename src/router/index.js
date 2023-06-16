import {createRouter, createWebHistory} from 'vue-router';
/*
Components
*/
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Login from '@/views/LoginView.vue';
import UserDetail from '@/views/UserDetailView.vue'
import NotFound from '@/views/NotFoundView.vue';

/*
Routes
*/
const routes =[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/about',
        name:'About',
        component:About
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/user/detail/:userId',
        name:'UserDetail',
        component:UserDetail
    },
    {
        // 404 Not Found page 
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:NotFound
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router;
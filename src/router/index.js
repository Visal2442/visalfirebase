import {createRouter, createWebHistory} from 'vue-router';

const routes =[
    {
        path:'/',
        name:'Home',
        component:()=>import('../components/Home.vue'),
    },
    {
        path:'/about',
        name:'About',
        component:()=>import('../components/About.vue'),
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../components/Login.vue'),
    },
    {
        path:'/user/detail/:id',
        name:'UserDetail',
        component:()=>import('../views/UserDetail.vue'),
    },
    {
        // 404 Not Found page 
        path:'/:catchAll(.*)',
        name:'NotFound',
        component:()=>import('../views/NotFound.vue'),
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router;
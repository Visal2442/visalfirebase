import {createRouter, createWebHistory} from 'vue-router';
/*
Components
*/
import Home from '@views/HomeView.vue';
import Book from '@views/BookView.vue';
import User from '@views/UserView.vue';
import UserDetail from '@views/UserDetailView.vue'
import NotFound from '@views/NotFoundView.vue';
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
        path:'/books',
        name:'Books',
        component:Book
    },
    {
        path:'/users',
        name:'Users',
        component:User
    },
    {
        path:'/maps',
        name:'Maps',
        component:Book
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
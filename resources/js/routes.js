import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import App from './layout/Main.vue'
const AdminLogin = () => import('./components/admin/auth/Login.vue')
const AdminRegister = () => import('./components/admin/auth/Register.vue')
const AdminDashboard = () => import('./components/admin/Dashboard.vue')


const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    routes: [
   
    
    {
        name: 'AdminLogin',
        path:'/admin/login', 
        component:AdminLogin
    },
    {
        name: 'AdminRegister',
        path:'/admin/register', 
        component:AdminRegister
     },
    {
        name: 'AdminDashboard',
        path:'/admin/dashboard', 
        component:AdminDashboard
    }

]


})
export default router;
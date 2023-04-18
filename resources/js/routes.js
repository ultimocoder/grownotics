import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import App from './layout/Main.vue'
const AdminLogin = () => import('./components/admin/auth/Login.vue' /* webpackChunkName: "resource/js/components/category/list" */)


const BrandList = () => import('./components/admin/brand/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    routes: [
   
    {
        name: 'BrandList',
        path:'/admin/brand', 
        component:BrandList
    },
    {
        name: 'AdminLogin',
        path:'/admin/login', 
        component:AdminLogin
    }
   

]


})
export default router;
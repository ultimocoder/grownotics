import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import App from './layout/Main.vue'
import axios from 'axios'
const AdminLogin = () => import('./components/admin/auth/Login.vue')
// const AdminRegister = () => import('./components/admin/auth/Register.vue')
const AdminDashboard = () => import('./components/admin/Dashboard.vue')
const AdminCategory = () => import('./components/admin/categories/Category.vue')
const AdminSubcategory = () => import('./components/admin/subcategories/Subcategory.vue')
 const AdminBrand = () => import('./components/admin/brands/Brand.vue')


const Home = () => import('./components/Home.vue')

// const getToken = async() => {
//     await axios.get('/sanctum/csrf-cookie')
// }
const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    // await: getToken(),
    routes: [
        {
            name: 'home',
            path:'/', 
            component:Home
        },
    {
        name: 'AdminLogin',
        path:'/admin/login', 
        component:AdminLogin
    },
    // {
    //     name: 'AdminRegister',
    //     path:'/admin/register', 
    //     component:AdminRegister
    // },
    {
        name: 'AdminDashboard',
        path:'/admin/dashboard', 
        component:AdminDashboard
    },
    {
        name: 'AdminCategory',
        path:'/admin/category', 
        component:AdminCategory
    },
    {
        name: 'AdminSubcategory',
        path:'/admin/subcategory', 
        component:AdminSubcategory
    }, 
    {
        name: 'AdminBrand',
        path:'/admin/brand', 
        component:AdminBrand
    }

]


})
export default router;

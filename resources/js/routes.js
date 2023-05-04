import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import App from './layout/Main.vue'
import axios from 'axios'
const AdminLogin = () => import('./components/admin/auth/Login.vue')
const AdminRegister = () => import('./components/admin/auth/Register.vue')
const AdminDashboard = () => import('./components/admin/Dashboard.vue')
const AdminCategory = () => import('./components/admin/categories/Category.vue')
const AdminSubcategory = () => import('./components/admin/subcategories/Subcategory.vue')
const AdminBrand = () => import('./components/admin/brand/Brand.vue')
const AdminProduct = () => import('./components/admin/products/Product.vue')
const ForgotPassword = () => import('./components/admin/auth/ForgotPassword.vue')
const ResetPassword = () => import('./components/admin/auth/ResetPasswordForm.vue')
const Dynamic = () => import('./components/admin/dynamic/Dynamic.vue')

const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    meta: {
        reload: false,
    },
    // await: getToken(),
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
     },
     {
        name: 'ForgotPassword',
        path:'/forget-password', 
        component:ForgotPassword
    },
    {
        name: 'ResetPassword',
        path:'/reset-password',
        component:ResetPassword
    },
    {
        name: 'AdminProduct',
        path:'/admin/product', 
        component:AdminProduct
    },
    {
        name: 'Dynamic',
        path:'/admin/dynamic', 
        component:Dynamic
    }

]


})
export default router;

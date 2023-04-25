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
const AdminBrand = () => import('./components/admin/brand/Brands.vue')
const ForgotPassword = () => import('./components/admin/auth/ForgotPassword.vue')
const ResetPasswordForm = () => import('./components/admin/auth/ResetPasswordForm.vue')

const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
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
        path: '/reset-password', 
        name: 'reset-password', 
        component: ForgotPassword, 
        meta: { 
        auth:false 
        } 
    },
    {
        path: '/update-password/:token', 
        name: 'reset-password-form', 
        component: ResetPasswordForm, 
        meta: { 
            auth:false 
        } 
    }

]


})
export default router;

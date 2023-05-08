import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import App from './layout/Main.vue'
import axios from 'axios'
import store from './store'
const AdminLogin = () => import('./components/admin/auth/Login.vue')
const AdminRegister = () => import('./components/admin/auth/Register.vue')
const AdminDashboard = () => import('./components/admin/Dashboard.vue')
const AdminCategory = () => import('./components/admin/categories/Category.vue')
const AdminSubcategory = () => import('./components/admin/subcategories/Subcategory.vue')

 const AdminBrand = () => import('./components/admin/brands/Brand.vue')
 const AdminProduct = () => import('./components/admin/product/Product.vue')
 const Dynamic = () => import('./components/admin/dynamic/Dynamic.vue')
const AdminFileUpload=()=>import('./components/admin/media/FileUpload.vue');

const ForgotPassword = () => import('./components/admin/auth/ForgotPassword.vue')
const ResetPasswordForm = () => import('./components/admin/auth/ResetPasswordForm.vue')


const Home = () => import('./components/Home.vue')

// const getToken = async() => {
//     await axios.get('/sanctum/csrf-cookie')
// }
const router = new createRouter({
    mode: "history",
    history: createWebHistory(),
    // await: getToken(),
    meta:{
      reload:false,
    },
    routes: [

        {
            name: 'home',
            path:'/', 
            component:Home
        },
        {
            name: 'AdminFileUpload',
            path:'/admin/media-manager', 
            component:AdminFileUpload,
            meta : {requireAuth: true}
        },

    {
        name: 'AdminLogin',
        path:'/admin/login', 
        component:AdminLogin,
        meta : {guest: true}
    },
    {
        name: 'AdminRegister',
        path:'/admin/register', 
        component:AdminRegister
     },
    {
        name: 'AdminDashboard',
        path:'/admin/dashboard', 
        component:AdminDashboard,
        meta : {requireAuth: true}
    },
    {
        name: 'AdminCategory',
        path:'/admin/category', 
        component:AdminCategory,
        meta : {requireAuth: true}
    },
    {
        name: 'AdminSubcategory',
        path:'/admin/subcategory', 
        component:AdminSubcategory,
        meta : {requireAuth: true}

    }, 

    

    {
        name: 'AdminBrand',
        path:'/admin/brand', 
        component:AdminBrand,
        meta : {requireAuth: true}


     },
     {
        path: '/reset-password', 
        name: 'reset-password', 
        component: ForgotPassword, 
        
    },
    {

        path: '/update-password/:token', 
        name: 'reset-password-form', 
        component: ResetPasswordForm, 
        

    }, 
    {
      name: 'AdminProduct',
      path:'/admin/product', 
      component:AdminProduct,
      meta : {requireAuth: true}
  },
  {
      name: 'Dynamic',
      path:'/admin/dynamic', 
      component:Dynamic,
      meta : {requireAuth: true}
  }

]


})
// middleware 


router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      }
      next("/admin/login");
    } else {
      next();
    }
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isLoggedIn) {
        next("admin/dashboard");
        return;
      }
      next();
    } else {
      next();
    }
  });
export default router;

import {createApp} from 'vue'
import { createStore } from 'vuex'
import { createRouter,createWebHistory} from 'vue-router'
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"


const router = new createRouter({
        mode: "history",
        history: createWebHistory(),
        routes: [
        {path:'/', component:Home},
        {path:'/login', component:Login},
        {path:'/register', component:Register},

  ]


})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) ) {
        if (Auth.check()) {
            next();
            return;
        } else {
            router.push('/login');
        }
    } else {
        next();
    }
});

export default router;


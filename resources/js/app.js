require('./bootstrap');

import { createApp } from "vue"
import { createStore } from 'vuex'
import { BootstrapVue3 } from 'bootstrap-vue-3'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter,createWebHistory} from 'vue-router'
import router from './router'
//import store from './store'
import App from './layouts/App'



const app = createApp({
 	 el: '#app',
	components: {App},
	
}).use(BootstrapVue3).use(router).mount('#app')



   

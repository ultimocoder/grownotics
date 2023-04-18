import './bootstrap';

import { createApp } from "vue";
import { createStore } from 'vuex';
import axios from 'axios'

import VueAxios from 'vue-axios'
import { createRouter,createWebHistory} from 'vue-router'
import router from './routes'
//import store from './store'
import App from './layout/Main'









 
 const app = createApp({
 	 el: '#app',
	components: {App},
	
}).use(router).mount('#app')


import './bootstrap';

import { createApp } from "vue";
import { createStore } from 'vuex';
import axios from 'axios'

import VueAxios from 'vue-axios'
import { createRouter,createWebHistory} from 'vue-router'
import router from './routes'
//import store from './store'
import App from './layout/Main'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';









 
 const app = createApp({
 	 el: '#app',
	components: {App},
	
}).use(router).mount('#app')


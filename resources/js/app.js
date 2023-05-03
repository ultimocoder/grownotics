import './bootstrap';

import { createApp } from "vue";
import { createStore } from 'vuex';
import axios from 'axios'

import VueAxios from 'vue-axios'
import { createRouter,createWebHistory} from 'vue-router'
import router from './routes'
import store from './store';

import App from './layout/Main'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

window.Vue = require("vue").default;


axios.defaults.withCredentials = true
axios.defaults.baseURL= 'http://localhost:8000/api/'
const token = localStorage.getItem('token')
if(token){
  axios.defaults.headers.common['Authorization'] = token
}

axios.interceptors.response.use(undefined, function (error) {
	if (error) {
	  const originalRequest = error.config;
	  if (error.response.status === 401 && !originalRequest._retry) {
		  originalRequest._retry = true;
		  store.dispatch('logout')
		  return router.push('/login')
	  }
	  else{
		store.commit('handle_error',JSON.parse(error.response.data.error));
	  }
	}
  })


 






 
 const app = createApp({
	store,
 	 el: '#app',
	components: {App},
	
}).use(router).mount('#app')


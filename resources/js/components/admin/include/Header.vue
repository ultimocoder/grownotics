<template>
    <div>
        <h1>Testing Header</h1>
        <button  @click="logout_user"  onclick="logout_user()">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {

            }
        }
        ,
        methods:{
  
  //user login function and api call
   logout_user(){
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    window.location.href = 'login';
   }
}
    }
</script>

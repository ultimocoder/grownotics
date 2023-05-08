<template>
    <div class="container">
       
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <Header></Header>
  
                    <div class="card-body">
                        
                        <router-link to="/home">Go to Home</router-link>
                        <router-link to="/login">Go to login</router-link>
                        <router-link to="/register">Go to register</router-link>
                         <router-view />
                     </div>
                    <Footer></Footer>
                    
                </div>
            </div>
        </div>
    </div>
</template>
   
<script>
     import Header from '../components/admin/include/Header.vue';
     import Footer from '../components/admin/include/Footer.vue';
    export default {
        components: {
            Header,
            Footer
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
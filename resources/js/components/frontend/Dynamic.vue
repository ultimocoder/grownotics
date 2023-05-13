<template>
    <AdminHeader></AdminHeader>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header" v-if="pagecontent == ''">
                        <center>Page Not found</center>
                    </div>
                    <div class="card-header" v-else>
                        <div v-for="(pagecon, index) in pagecontent" :key="index">
                            <div v-html="pagecon.text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter></AdminFooter>
</template>
<script>
import AdminHeader  from './include/Header.vue';
import AdminFooter  from './include/Footer.vue';
export default {
    name:"category",
    components: {
        AdminHeader,
        AdminFooter,
  },
    data(){
        return {
            pagecontent:''
        }
    },
    mounted:function(){
        this.getpages() //method1 will execute at pageload
    },
    methods:{
    getpages(){
     var currentUrl = window.location.href.split('http://127.0.0.1:8000/pages/');
     let currentObj = this;
     axios.get('http://127.0.0.1:8000/api/getpages/'+currentUrl)
     .then((response) =>{
       currentObj.pagecontent = response.data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   }
 }

}
</script>

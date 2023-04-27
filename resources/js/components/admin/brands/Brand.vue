<template>
    <AdminHeader></AdminHeader>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Brand</h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="addBrand">
                            <div class="row">
                                <div class="col-10">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Brand Name</label>
                                        <input type="hidden" v-model="form.id" class="form-control" >
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter Brand Name">
                                    </div>
                                    <p v-if="errors.name">{{ String(errors.name)  }}</p>
                                  
                                </div>
                                <div class="col-2" style="margin-top:22px;">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>                                
                                    </div>
                                </div>
                            </div>
                        </form>
                        {{ output.message }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Brand List</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Brand Name</th>
                                    <th scope="col">Brand Slug</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <!-- <tbody>
                                    <tr v-for="(brand, index) in brands.data">
                                        <th scope="row">{{brands.length}}</th>
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{brand.name}}</td>
                                    <td>{{brand.slug}}</td>
                                    <td>
                                        <a @click.prevent="editBrand(brand.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteBrand(brand.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody> -->
                                <tbody v-if="brands">
                                    <tr v-for="(brand,index) in brands.data" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ brand.name }}</td>
                                        <td>{{ brand.slug }}</td>
                                        <td>
                                        <a @click.prevent="editBrand(brand.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteBrand(brand.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td align="center" colspan="3">No record found.</td>
                                    </tr>
                                </tbody>










                            </table>
                            <Bootstrap4Pagination :data="brands" @pagination-change-page="getBrand"/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter></AdminFooter>
</template>

<script>
import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import AdminHeader  from '../include/Header.vue';
import AdminFooter  from '../include/Footer.vue';
export default {
    name:"brand",
    components: {
        AdminHeader,
        AdminFooter,
        Bootstrap4Pagination
  },
    data(){
        return {
            form:{
                name: '',
                id: ''
            },
            output:'',
            errors: '',
            brands:{

            } 
        }
    },
    mounted:function(){
        this.getBrand() //method1 will execute at pageload
    },
    methods:{
   
   //user login function and api call
   addBrand(){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/addbrand',this.form)
     .then((response) =>{
       currentObj.output = response.data;
       this.getBrand();
       this.form.name='';
       this.form.id='';
       this.form.name.reset();
     }).catch((e)=>{
       
         this.errors = e.response.data.errors;
     })
   },
   getBrand(page=1){
   
     let currentObj = this;  
     axios.get(`http://127.0.0.1:8000/api/getbrand?page=${page}`)
     .then((response) =>{
       currentObj.brands = response.data;
     

     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   deleteBrand(id){
   
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/deletebrand/'+id)
     .then((response) =>{
       currentObj.categories = response.data;
       this.getcategory()
     })
   },
   editBrand(id){
     let currentObj = this; 
     axios.get('http://127.0.0.1:8000/api/editbrand/'+id)
     .then((response) =>{
       currentObj.form = response.data;
     })
   }
 }

}
</script>
<style scoped>
    .pagination{
        margin-bottom: 0;
    }
</style>
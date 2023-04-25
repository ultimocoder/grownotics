
<template>
    <AdminHeader></AdminHeader>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Category</h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="addcategory">
                            <div class="row">
                                <div class="col-10">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Category Name</label>
                                        <input type="hidden" v-model="form.id" class="form-control" placeholder="Enter Category Name">
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter Category Name">
                                    </div>
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
                        <h3>Category List</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Category Slug</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category, index) in categories">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                    <td>
                                        <a @click.prevent="edit(category.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteCategory(category.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter></AdminFooter>
</template>

<script>
import AdminHeader  from '../include/Header.vue';
import AdminFooter  from '../include/Footer.vue';
export default {
    name:"category",
    components: {
        AdminHeader,
        AdminFooter
  },
    data(){
        return {
            form:{
                name: '',
                id: ''
            },
            output:'',
            categories:{

            } 
        }
    },
    mounted:function(){
        this.getcategory() //method1 will execute at pageload
    },
    methods:{
   
   //user login function and api call
   addcategory(){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/addcategory',this.form)
     .then((response) =>{
       currentObj.output = response.data;
       this.getcategory();
       this.form.name='';
       this.form.id='';
       this.form.name.reset();
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   getcategory(){
    
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getcategory')
     .then((response) =>{
      

       currentObj.categories = response.data;
     

     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   deleteCategory(id){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/deletecategory/'+id)
     .then((response) =>{
       currentObj.categories = response.data;
       this.getcategory()
     })
   },
   edit(id){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/editcategory/'+id)
     .then((response) =>{
       currentObj.form = response.data;
     })
   }
 }

}
</script>
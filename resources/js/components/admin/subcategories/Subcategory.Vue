<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<template>
    <AdminHeader></AdminHeader>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Sub Category</h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="addcategory">
                            <div class="row">
                                <div class="col-5">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Sub Category Name</label>
                                        <input type="hidden" v-model="form.id" class="form-control" placeholder="Enter Category Name">
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter Category Name">
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Category Name</label>
                                        <select v-model="form.sub_cat" class="form-control" id="exampleFormControlSelect1">
                                            <option v-for="(category, index) in categories" :value="category.id">{{ category.name }}</option>
                                        </select>
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
                        <h3>Sub Category List</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Sub Category Name</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Sub Category Slug</th>
                                    <th scope="col">Active/Deactive</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(subcategory,index) in subcategories.data" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{subcategory.name}}</td>
                                    <td>{{subcategory.cat_name}}</td>
                                    <td>{{subcategory.slug}}</td>
                                    <td><label class="switch">
                                        <input type="checkbox" v-if="subcategory.status == 0" @change="active_deactive([subcategory.id, 1])">
                                        <input type="checkbox" v-else="subcategory.status == 1" @change="active_deactive([subcategory.id, 0])" checked>
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a @click.prevent="edit(subcategory.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteCategory(subcategory.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Bootstrap4Pagination align="center"
        :data="subcategories"
        @pagination-change-page="getsubcategory"
    />
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
    name:"subcategory",
    components: {
        AdminHeader,
        AdminFooter,
        Bootstrap4Pagination,
  },
    data(){
        return {
            form:{
                name: '',
                id: ''
            },
            output:'',
            categories:{

            }, 
            subcategories:{

            } 
        }
    },
    mounted:function(){
        this.getcategory(); //method1 will execute at pageload
        this.getsubcategory(); //method1 will execute at pageload
    },
    methods:{
    addcategory(){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/addsubcategory',this.form)
     .then((response) =>{
       currentObj.output = response.data;
       this.getsubcategory();
       this.form.name='';
       this.form.sub_cat='';
       this.form.id='';
       this.form.name.reset();
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   getcategory(){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getoptioncategory')
     .then((response) =>{
       currentObj.categories = response.data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   active_deactive(id) {
        let currentObj = this;  
        axios.post('http://127.0.0.1:8000/api/active_deactive_subcategory/'+id)
        // .then((response) =>{
        //     currentObj.subcategories = response.data;
        //     this.getproduct()
        // })
    },
   getsubcategory(){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getsubcategory')
     .then(({data}) =>{
       currentObj.subcategories = data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   deleteCategory(id){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/deletesubcategory/'+id)
     .then(({response}) =>{
       currentObj.subcategories = response.data;
       this.getsubcategory()
     })
   },
   edit(id){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/editsubcategory/'+id)
     .then((response) =>{
       currentObj.form = response.data;
     })
   }
 }
}
</script>

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
                                <div class="col-2" v-if="selected != ''" style="margin-top:22px;">
                                    <div class="form-group">
                                        <button type="button" @click="multipledelete" class="btn btn-danger">Delete Multiple</button>                                
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
                                    <th scope="col"><input type="checkbox" v-model="selectAll"></th>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Category Slug</th>
                                    <th scope="col">Active/Deactive</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category,index) in categories.data" :key="index">
                                    <th scope="row"><input type="checkbox" v-model="selected" :value="category.id" number></th>
                                    <th>{{index+1}}</th>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                    <td><label class="switch">
                                        <input type="checkbox" v-if="category.status == 0" @change="active_deactive([category.id, 1])">
                                        <input type="checkbox" v-else="category.status == 1" @change="active_deactive([category.id, 0])" checked>
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a @click.prevent="edit(category.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteCategory(category.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Bootstrap4Pagination align="center"
        :data="categories"
        @pagination-change-page="getcategory"></Bootstrap4Pagination>
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
    name:"category",
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
            selected: [],
            procat:{

            } 
        }
    },
    mounted:function(){
        this.getcategory() //method1 will execute at pageload
        this.getcat() //method1 will execute at pageload
    },
    computed: {
        selectAll: {
            get: function () {
                return this.procat ? this.selected.length == this.procat.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.procat.forEach(function (pro) {
                        selected.push(pro.id);
                    });
                }

                this.selected = selected;
            }
        }
    },
    methods:{
    multipledelete(){
    let selected = this.selected
    axios.post(`http://127.0.0.1:8000/api/deletemultiplecat`, selected)
    .then(({ data }) => {
        this.getcategory();
        this.getcat();
        currentObj.output = data;
    }).catch((e) => {
        this.errors = e.response.data.errors;
    })
   },
   //user login function and api call
   addcategory(){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/addcategory',this.form)
     .then((response) =>{
       currentObj.output = response.data;
       this.getcategory();
       this.getcat();
       this.form.name='';
       this.form.id='';
       this.form.name.reset();
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   async getcategory(page=1){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getcategory?page='+page)
     .then(({data}) =>{
       currentObj.categories = data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   getcat(){
        let currentObj = this;  
        axios.get('http://127.0.0.1:8000/api/getcat')
        .then((response) =>{
        currentObj.procat = response.data;
        }).catch((e)=>{
            this.errors = e.response.data.errors;
        })
    },
   active_deactive(id) {
        let currentObj = this;  
        axios.post('http://127.0.0.1:8000/api/active_deactive_category/'+id)
        // .then((response) =>{
        //     currentObj.subcategories = response.data;
        //     this.getproduct()
        // })
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

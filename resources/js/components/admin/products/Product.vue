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
                        <h3>Product</h3>
                    </div>
                    <div class="card-body">
                        <form @submit="addproduct" enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Product Name</label>
                                        <input type="hidden" v-model="form.id" class="form-control" placeholder="Enter Category Name">
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter Category Name">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Category Name</label>
                                        <select v-model="form.cat_id" class="form-control" id="exampleFormControlSelect1" v-on:change="onChangesub(this.form.cat_id)">
                                            <option v-for="(category, index) in categories" :value="category.id">{{ category.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Sub Category Name</label>
                                        <select v-model="form.sub_cat_id" class="form-control" id="exampleFormControlSelect1">
                                            <option v-for="(sub_cats, index) in sub_cat" :value="sub_cats.id">{{ sub_cats.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Brand Name</label>
                                        <select v-model="form.brand_id" class="form-control" id="exampleFormControlSelect1">
                                            <option v-for="(brand, index) in brands" :value="brand.id">{{ brand.name }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Product Price</label>
                                        <input type="number" v-model="form.price" class="form-control" placeholder="Enter Category Name">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Product Discounted Price</label>
                                        <input type="number" v-model="form.dis_price" class="form-control" placeholder="Enter Category Name">
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Product Description</label>
                                        <textarea v-model="form.product_des" class="form-control" id="exampleFormControlSelect1"></textarea>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Product Image</label>
                                        <input type="file" class="form-control" v-on:change="onChange" :key="fileInputKey">
                                    </div>
                                </div>
                                <div class="col-2" style="margin-top:22px;">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary">Submit</button>                                
                                    </div>
                                </div>
                            </div>
                        </form>
                        {{ output }}
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
                        <h3>Product List</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Product Category</th>
                                    <th scope="col">Product Sub Category</th>
                                    <th scope="col">Product Brand</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Product Discounted Price</th>
                                    <th scope="col">Product Description</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Active/Deactive</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product,index) in products.data" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{product.name}}</td>
                                    <td>{{product.cat_name}}</td>
                                    <td>{{product.sub_cat_name}}</td>
                                    <td>{{product.brand_name}}</td>
                                    <td>{{product.price}}</td>
                                    <td>{{product.dis_price}}</td>
                                    <td>{{product.product_des}}</td>
                                    <td><img :src="'/images/'+product.feturer_image" alt="image" width="100" height="100" /></td>
                                    <td><label class="switch">
                                        <input type="checkbox" v-if="product.status == 0" @change="active_deactive([product.id, 1])">
                                        <input type="checkbox" v-else="product.status == 1" @change="active_deactive([product.id, 0])" checked>
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a @click.prevent="edit(product.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deleteproduct(product.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                        <Bootstrap4Pagination align="center"
        :data="products"
        @pagination-change-page="getproduct"
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
// import Pagination from '@/Components/Pagination'
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
            products:{
                type:Object,
                default:null

            }, 
            sub_cat:{

            }, 
            categories:{

            }, 
            subcategories:{

            }, 
            brands:{

            },
            fileInputKey: 0 
        }
    },
    mounted:function(){
        this.getproduct(); //method1 will execute at pageload
        this.getcategory(); //method1 will execute at pageload
        this.getbrands(); //method1 will execute at pageload
    },
    methods:{
    async  getproduct(page=1){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getproduct?page='+page)
     .then(({data}) =>{
        currentObj.products = data;
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
    onChangesub(id){
        let currentObjedit = this;
        axios.get('http://127.0.0.1:8000/api/product-return-sub-category/'+id)
        .then(function (response) {
            currentObjedit.sub_cat = response.data;
        });
    },
    onChange(e) {
        this.file1 = e.target.files[0];
    },
    active_deactive(id, value) {
        let currentObj = this;  
        axios.post('http://127.0.0.1:8000/api/active_deactive_product/'+id)
        // .then((response) =>{
        //     currentObj.subcategories = response.data;
        //     this.getproduct()
        // })
    },
    addproduct(e){
    e.preventDefault();
    let existingObj = this;
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    let data = new FormData();
    data.append('id', this.form.id);
    data.append('name', this.form.name);
    data.append('cat_id', this.form.cat_id);
    data.append('sub_cat_id', this.form.sub_cat_id);
    data.append('brand_id', this.form.brand_id);
    data.append('price', this.form.price);
    data.append('dis_price', this.form.dis_price);
    data.append('product_des', this.form.product_des);
    data.append('file1', this.file1);
    axios.post('http://127.0.0.1:8000/api/addproduct', data, config)
        .then((response) =>{
            existingObj.output = response.data;
            this.getproduct();
            this.form.id = '',
            this.form.name = '',
            this.form.cat_id = '',
            this.form.sub_cat_id = '',
            this.form.brand_id = '',
            this.form.price = '',
            this.form.dis_price = '',
            this.form.product_des = '',
            this.fileInputKey++;
        })
        .catch(function (err) {
            existingObj.output = err;
        });
   },
   getbrands(){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getoptionbrand')
     .then((response) =>{
       currentObj.brands = response.data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   deleteproduct(id){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/deleteproduct/'+id)
     .then((response) =>{
       currentObj.subcategories = response.data;
       this.getproduct()
     })
   },
   edit(id){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/editproduct/'+id)
     .then((response) =>{
       currentObj.form = response.data;
     })
   }
 }
}
</script>

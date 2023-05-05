<style>
.images_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

}

.images_wrapper .img_box {
  list-style: none;
  position: relative;
  width: 21%;
  background: #fff;
  border: solid 1px #eff0f2;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px rgba(33, 43, 54, 0.15);
}

.images_wrapper .img_box:hover {
  box-shadow: none;
}

.images_wrapper .img_box img {
  width: 100%;
  max-height: 250px;
  min-height: 250px;
}

.images_wrapper .image_name {
  font-size: 20px;
}

.images_wrapper .images_ex {
  font-size: 16px;
  color: #777777;
}

.images_wrapper .icon {
  color: white;
  font-size: 27px;
  padding: 5px;
  height: 30px;
  background: #e03a1d;
  width: 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.images_wrapper .icon2 {
  color: white;
  font-size: 27px;
  padding: 5px;
  height: 30px;
  background: #441de0;
  width: 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}


.images_wrapper .img_box:hover .overlay {
  opacity: 1;
}

.images_wrapper .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background: rgba(78, 181, 41, 0.3);
  border-radius: 18px;
}
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
                        <form v-on:submit.prevent="addproduct">
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
                                <div class="col-1" v-if="form.feturer_image">
                                    <div class="form-group">
                                        <img :src="'/media/'+form.feturer_image" alt="image" width="100" height="100" />
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <input type="hidden" v-model="form.feturer_image" class="form-control">
                                        <button style="margin-top: 32px; margin-left: 28px;" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl" @click="getMedia(1)">Upload Image</button>
                                    </div>
                                </div>
                                <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-xl">
                                    <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Image Gallery</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <DropZone :maxFiles="Number(10000000000)" url="http://127.0.0.1:8000/api/filestore" :uploadOnDrop="true"
                                            :multipleUpload="true" :parallelUpload="3" @uploaded="getMedia()" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <ul class="images_wrapper" v-if="medias">
                                                <li class="img_box" v-for="(media, index) in medias.data" :key="index">
                                                <img class="collegecardimage rounded " v-bind:src="'/media/' + media.name" />
                                                <div class="image_name">{{ media.original_name }}</div>
                                                <div class="images_ex">{{ media.extension }}</div>
                                                <div class="overlay">
                                                    <a href="#" @click.prevent="deleteMedia(media.id)" class="icon" title="Delete Image">
                                                    <i class="fa fa-trash"></i>
                                                    </a>
                                                    <a href="#" data-dismiss="modal" @click.prevent="selectMedia(media.name)" class="icon2" title="Select Image">
                                                    <i class="fa fa-trash"></i>
                                                    </a>

                                                </div>
                                                </li>
                                                </ul>
                                                <Bootstrap4Pagination :data="medias" @pagination-change-page="getMedia" />
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
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
                                    <th scope="col"><th><input type="checkbox" v-model="selectAll"></th></th>
                                    <th scope="col">Sr No.</th>
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
                                    <th scope="row"><input type="checkbox" v-model="selected" :value="product.id" number></th>
                                    <th>{{index+1}}</th>
                                    <td>{{product.name}}</td>
                                    <td>{{product.cat_name}}</td>
                                    <td>{{product.sub_cat_name}}</td>
                                    <td>{{product.brand_name}}</td>
                                    <td>{{product.price}}</td>
                                    <td>{{product.dis_price}}</td>
                                    <td>{{product.product_des}}</td>
                                    <td><img :src="'/media/'+product.feturer_image" alt="image" width="100" height="100" /></td>
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
import DropZone from 'dropzone-vue';
import 'dropzone-vue/dist/dropzone-vue.common.css';
// import Pagination from '@/Components/Pagination'
export default {
    name:"subcategory",
    components: {
        AdminHeader,
        DropZone,
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
            medias:{

            }, 
            subcategories:{

            }, 
            brands:{

            },
            getprod:{

            },
            selected: []
        }
    },
    mounted:function(){
        this.getproduct(); //method1 will execute at pageload
        this.getcategory(); //method1 will execute at pageload
        this.getbrands(); //method1 will execute at pageload
        this.getMedia(); //method1 will execute at pageload
        this.getpro(); //method1 will execute at pageload
    },
    computed: {
        selectAll: {
            get: function () {
                return this.getprod ? this.selected.length == this.getprod.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.getprod.forEach(function (pro) {
                        selected.push(pro.id);
                    });
                }

                this.selected = selected;
            }
        }
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
   multipledelete(){
    let selected = this.selected
    axios.post(`http://127.0.0.1:8000/api/deletemultipleproduct`, selected)
    .then(({ data }) => {
        this.getproduct();
        this.getpro();
        currentObj.output = data;
    }).catch((e) => {
        this.errors = e.response.data.errors;
    })
   },
   getMedia(page) {
      let currentObj = this;
      axios.get(`http://127.0.0.1:8000/api/getfile?page=${page}`)
        .then(({ data }) => {
          currentObj.medias = data;
        }).catch((e) => {
          this.errors = e.response.data.errors;
        })
    },
    selectMedia(name) {
       let currentObj = this;
       currentObj.form.feturer_image = name;
    },
    deleteMedia(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
       
        if (result.isConfirmed) {
          axios.get(`http://127.0.0.1:8000/api/deletefile/`+id)
          .then((response) =>{
          this.medias = response.data;
          this.getMedia();
          toast.success('Your file has been deleted.!',{
                autoClose: 3000,
            });   
         })
        }
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
    getpro(){
        let currentObj = this;  
        axios.get('http://127.0.0.1:8000/api/getpro')
        .then((response) =>{
        currentObj.getprod = response.data;
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
    active_deactive(id, value) {
        let currentObj = this;  
        axios.post('http://127.0.0.1:8000/api/active_deactive_product/'+id)
        // .then((response) =>{
        //     currentObj.subcategories = response.data;
        //     this.getproduct()
        // })
    },
    addproduct(){
    let existingObj = this;
    let data = new FormData();
    data.append('id', this.form.id);
    data.append('name', this.form.name);
    data.append('cat_id', this.form.cat_id);
    data.append('sub_cat_id', this.form.sub_cat_id);
    data.append('brand_id', this.form.brand_id);
    data.append('price', this.form.price);
    data.append('dis_price', this.form.dis_price);
    data.append('product_des', this.form.product_des);
    data.append('feturer_image', this.form.feturer_image);
    axios.post('http://127.0.0.1:8000/api/addproduct', data)
        .then((response) =>{
            existingObj.output = response.data;
            this.getproduct();
            this.getpro();
            this.form.id = '',
            this.form.name = '',
            this.form.cat_id = '',
            this.form.sub_cat_id = '',
            this.form.brand_id = '',
            this.form.price = '',
            this.form.dis_price = '',
            this.form.product_des = '',
            this.form.feturer_image = ''
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

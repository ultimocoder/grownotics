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
                        <h3>Dynamic Pages</h3>
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="dynamic">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Page Title</label>
                                        <input type="hidden" v-model="form.id" class="form-control" placeholder="Enter Category Name">
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter Category Name">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Page Content</label>
                                        <textarea id="editor1" name="editor1" v-model="form.text"></textarea>
                                    </div>
                                </div>
                                <div class="col-4" style="margin-top:10px;">
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
                                    <th scope="col"><input type="checkbox" v-model="selectAll"></th>
                                    <th scope="col">Sr No.</th>
                                    <th scope="col">Page Title</th>
                                    <th scope="col">Page Text</th>
                                    <th scope="col">Page Slug</th>
                                    <th scope="col">Active/Deactive</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(page,index) in pages.data" :key="index">
                                    <th scope="row"><input type="checkbox" v-model="selected" :value="page.id" number></th>
                                    <th>{{index+1}}</th>
                                    <td>{{page.name}}</td>
                                    <td>{{page.text}}</td>
                                    <td>{{page.slug}}</td>
                                    <td><label class="switch">
                                        <input type="checkbox" v-if="page.status == 0" @change="active_deactive([page.id, 1])">
                                        <input type="checkbox" v-else="page.status == 1" @change="active_deactive([page.id, 0])" checked>
                                        <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a @click.prevent="edit(page.id)" type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit" title="Edit"></i></a> 
                                        <a @click.prevent="deletepage(page.id)" class="btn btn-danger" href="#" ><i class="fa fa-trash" title="Delete"></i></a>
                                    </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                        <Bootstrap4Pagination align="center"
        :data="pages"
        @pagination-change-page="getdynamic"
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
import {onMounted, ref} from "vue";
// import Pagination from '@/Components/Pagination'
export default {
    name:"subcategory",
    props:["content"],
    components: {
        AdminHeader,
        AdminFooter,
        Bootstrap4Pagination,
  },
    setup(props){
            const content = ref(props.content)
            let ckEditor;
            onMounted(()=>{
                ckEditor = window.CKEDITOR.replace("editor1")
                ckEditor.setData(content.value)
            })
        },
    data(){
        return {
            form:{
                name: '',
                id: ''
            },
            text: '',
            output:'',
            pages:{
                type:Object,
                default:null

            },
            selected: [],
            propage: {

            }
        }
    },
    mounted:function(){
        this.getdynamic(); //method1 will execute at pageload
        this.getpage(); //method1 will execute at pageload
    },
    computed: {
        selectAll: {
            get: function () {
                return this.propage ? this.selected.length == this.propage.length : false;
            },
            set: function (value) {
                var selected = [];

                if (value) {
                    this.propage.forEach(function (pro) {
                        selected.push(pro.id);
                    });
                }

                this.selected = selected;
            }
        }
    },
    methods:{
    async  getdynamic(page=1){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/getdyanmic?page='+page)
     .then(({data}) =>{
        currentObj.pages = data;
     }).catch((e)=>{
         this.errors = e.response.data.errors;
     })
   },
   multipledelete(){
    let selected = this.selected
    axios.post(`http://127.0.0.1:8000/api/deletemultiplepage`, selected)
    .then(({ data }) => {
        this.getdynamic();
        this.getpage();
        currentObj.output = data;
    }).catch((e) => {
        this.errors = e.response.data.errors;
    })
   },
   getpage(){
        let currentObj = this;  
        axios.get('http://127.0.0.1:8000/api/getpage')
        .then((response) =>{
        currentObj.propage = response.data;
        }).catch((e)=>{
            this.errors = e.response.data.errors;
        })
    },
    dynamic(){
    let existingObj = this;
    var text = CKEDITOR.instances.editor1.getData();
    let data = new FormData();
    data.append('id', this.form.id);
    data.append('name', this.form.name);
    data.append('text', text);
    axios.post('http://127.0.0.1:8000/api/addpage', data)
    .then((response) =>{
        this.getdynamic();
        this.getpage();
        existingObj.output = response.data.message;
        this.form.id = '',
        this.form.name = '',
        CKEDITOR.instances.editor1.setData( '', function() { this.updateElement(); } )
    })
    .catch(function (err) {
        existingObj.output = err;
    });
   },
   deletepage(id){
     let currentObj = this;  
     axios.post('http://127.0.0.1:8000/api/deletepage/'+id)
     .then((response) =>{
       currentObj.subcategories = response.data;
       this.getdynamic()
       this.getpage()
     })
   },
   active_deactive(id) {
        let currentObj = this;  
        axios.post('http://127.0.0.1:8000/api/active_deactive_dynamic/'+id)
        // .then((response) =>{
        //     currentObj.subcategories = response.data;
        //     this.getproduct()
        // })
    },
   edit(id){
     let currentObj = this;  
     axios.get('http://127.0.0.1:8000/api/editpage/'+id)
     .then((response) =>{
       currentObj.form = response.data;
       CKEDITOR.instances.editor1.setData( response.data.text, function() { this.updateElement(); } )
     })
   }
 }
}
</script>

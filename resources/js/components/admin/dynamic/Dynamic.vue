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
                                        <input type="hidden" v-model="form.id" class="form-control" >
                                        <input type="text" v-model="form.name" class="form-control" placeholder="Enter page Name">
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
                                    <th scope="col">Page Title</th>
                                    <th scope="col">Page Text</th>
                                    <th scope="col">Page Slug</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(page,index) in pages.data" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{page.name}}</td>
                                    <td>{{page.text}}</td>
                                    <td>{{page.slug}}</td>
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

            }
        }
    },
    mounted:function(){
        this.getdynamic(); //method1 will execute at pageload
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
     })
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
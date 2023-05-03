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
  left: 50%;
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
</style>

<template>
  <AdminHeader></AdminHeader>
  <div style="height: 200px; width: 500px;">
    <DropZone :maxFiles="Number(10000000000)" url="http://127.0.0.1:8000/api/filestore" :uploadOnDrop="true"
      :multipleUpload="true" :parallelUpload="3" @uploaded="getMedia" />

  </div>
  <ul class="images_wrapper" v-if="medias">

    <li class="img_box" v-for="(media, index) in medias.data" :key="index">
      <img class="collegecardimage rounded " v-bind:src="'/media/' + media.name" />
      <div class="image_name">{{ media.original_name }}</div>
      <div class="images_ex">{{ media.extension }}</div>
      <div class="overlay">
        <a href="#" @click.prevent="deleteMedia(media.id)" class="icon" title="User Profile">
          <i class="fa fa-user"></i>
        </a>

      </div>
    </li>
  </ul>
  <Bootstrap4Pagination :data="medias" @pagination-change-page="getMedia" />
  <AdminFooter></AdminFooter>
</template>
<script>

import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import 'dropzone-vue/dist/dropzone-vue.common.css';
import AdminHeader from '../include/Header.vue';
import AdminFooter from '../include/Footer.vue';
import Swal from 'sweetalert2';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';



import DropZone from 'dropzone-vue';
export default {
  name: "FileUpload",
  components: {
    AdminHeader,
    AdminFooter,
    DropZone,
    Bootstrap4Pagination,
   },
  data() {
    return {
      form: {
        name: '',
        id: ''
      },
      output: '',
      errors: '',
      medias: {

      }
    }
  },
  mounted: function () {
    this.getMedia() //method1 will execute at pageload
  },
  methods: {
    getMedia(page = 1) {
      let currentObj = this;
      axios.get(`http://127.0.0.1:8000/api/getfile?page=${page}`)
        .then(({ data }) => {
          currentObj.medias = data;


        }).catch((e) => {
          this.errors = e.response.data.errors;
        })
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
        
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // );
          this.getMedia();
          toast.success('Your file has been deleted.!',{
                autoClose: 3000,
            });   
          
        
         })
         



         
        }
      })



    }


  },


}
</script>
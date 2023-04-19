<template>
    <div class="vue-tempalte">
       <b-form @submit="onSubmit" @reset="onReset" v-if="show">
       <h3>Sign In</h3>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input type="password"
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

     
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  
       
    </div>
</template>
<script>

import Swal from 'sweetalert2'
  export default {
    mounted() {  
            console.log('Component mounted.')  
        },  
    data() {
      return {
        lists: [],
        form: {
          email: '',
          password: ''
        },
       
        show: true
      }
    },
    methods: {
     
      onSubmit(event) {
          axios.post('/api/login', this.form)
         .then((resp) =>{
          console.log(resp);
          //this.loadlist();
          //reset form
         this.form.email = '';
         this.form.password = '';
         if(resp["data"]["status"] == "error")
         {
           Swal.fire({
            title: 'OPPS',
            text:   "error",
            icon: 'warning',
          
        });
         }
         else
         {
           Swal.fire({
            title: 'Hurry',
            text:   "You have been logged-in successfully",
            icon: 'success',
          
        });
         }
          
      })
         .catch((e)=>{
          console.log(e);
           Swal.fire({
          title: 'Hurry',
          text:   e,
          icon: 'warning',
          
        });
      })
        event.preventDefault()
        //alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.password = ''
        this.form.email = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
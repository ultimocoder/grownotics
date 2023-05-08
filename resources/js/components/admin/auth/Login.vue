<template>
  <!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
        <title>Grownotics</title>
     </head>
     <body>
        <section class="sign_in_wrapper padd-100">
           <div class="animation_img">
              <img class="posi_abslt animate_down" src="/img/grapes.png" alt="" />
              <img class="posi_abslt animate_2" src="/img/animate_2.png" alt="" />
              <img class="posi_abslt animate_3" src="/img/animate_3.png" alt="" />
              <img class="posi_abslt animate_4" src="/img/animate_2.png" alt="" />
              <img class="posi_abslt animate_5" src="/img/animate_5.png" alt="" />
              <img class="posi_abslt animate_6" src="/img/animate_6.png" alt="" />
              <img class="posi_abslt grapes22" src="/img/grape_22.png" alt="" />
           </div>
           <div class="container">
              <div class="row align-items-center">
                 <div class="col-lg-7">
                    <img class="w-100 posi_rela" src="/img/PngItem_464176 1.png" alt="sign in image" />
                 </div>
                 <div class="col-lg-5 before_img_cut">
                  <h2>Welcome back to Gronotics.</h2>
                 
                   <p>{{ error }}</p>
                   <!-- <div v-for="(errorArray, idx) in errors" :key="idx">
                     <div v-for="(allErrors, idx) in errorArray" :key="idx">
                        <span class="text-danger">{{ allErrors}} </span>
                     </div>
                           </div> -->
                    <form v-on:submit.prevent="login_user">
                       <div class="form-group">
                          <label>Email</label>
                          <div class="input-group mb-2">
                             <div class="input-group-prepend">
                                <div class="input-group-text">
                                   <img src="/img/email.png" alt="" />
                                </div>
                             </div>
                             <input type="email" class="form-control" v-model="form.email">
                            
                          </div>
                        
                          <p v-if=errors.email>{{ String(errors.email) }}</p>
                          
                       </div>
                       <div class="form-group">
                          <label>Password</label>
                          <div class="input-group mb-2">
                             <div class="input-group-prepend">
                                <div class="input-group-text">
                                   <img src="/img/lock.png" alt="" />
                                </div>
                             </div>
                             <input type="password" class="form-control" v-model="form.password">
                          </div>
                          <p v-if=errors.password>{{ String(errors.password) }}</p>
                          <div class="d-flex forgot_password_flex">
                             <div class="remender">
                                <div class="form-check custom-control custom-checkbox">
                                   <input type="checkbox" class="custom-control-input" id="exampleCheck1">
                                   <label class="custom-control-label" for="exampleCheck1">Remember me</label>
                                </div>
                             </div>
                             <div class="forgot_password"><router-link to="/reset-password"> Forgot Password</router-link>
                         <router-view /></div>
                          </div>
                       </div>
                       <button type="submit" class="btn btn-primary sign_btn">Sign In</button>
                    </form>
                    <div class="social_media">
                       <ul class="d-flex">
                          <li><a href="#"><img src="/img/Google.png" alt="" /></a></li>
                          <li><a href="#"><img src="/img/Facebooklogo.png" alt="" /></a></li>
                       </ul>
                    </div>
                    <div class="sign_up_account">Don't have an Account?<span><router-link to="/admin/register"> Sign Up</router-link>
                         <router-view /></span>
                     </div>
                 </div>
              </div>
           </div>
        </section>
     </body>
  </html>
</template>
<script>
  export default {
      data(){
      return {
        output: '',
        errors: '',
        error:'',
        form:{
          email: '',
          password: ''
          
        }
      }
    },
      methods:{
  
        //user login function and api call
         login_user(){
          axios.post('http://127.0.0.1:8000/api/postLogin',this.form)
          .then((resp) =>{
         //  alert(resp.data.status);
            if(resp.data.status=='success'){
              
               const token = 'Bearer '+resp.data.access_token
               const user = resp.data.user
               localStorage.setItem('token', token)
               axios.defaults.headers.common['Authorization'] = token
               //this.$router.push('dashboard')
               window.location.href = 'dashboard';
            }else{
              
                localStorage.removeItem('token')
                this.errors = e.resp.data.errors;
            }
          }).catch((e)=>{
          
              this.errors =  e.response.data;
              this.error =  e.response.data.error;
              console.log(this.errors);
          })
        }
      }
      
    }

</script>


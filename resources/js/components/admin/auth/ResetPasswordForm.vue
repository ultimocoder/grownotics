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
                   <h2>Update password</h2>
                    <p></p>
                      <form autocomplete="off" @submit.prevent="resetPassword" method="post">
                          <div class="form-group">
                              <label for="email">E-mail</label>
                              <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                          </div>
                          <div class="form-group">
                              <label for="email">Password</label>
                              <input type="password" id="password" class="form-control" placeholder="" v-model="password" required>
                          </div>
                          <div class="form-group">
                              <label for="email">Confirm Password</label>
                              <input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation" required>
                          </div>
                          <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                     <div class="social_media">
                        <ul class="d-flex">
                           <li><a href="#"><img src="/img/Google.png" alt="" /></a></li>
                           <li><a href="#"><img src="/img/Facebooklogo.png" alt="" /></a></li>
                        </ul>
                     </div>
                     <div class="sign_up_account">Don't have an Account?<span> <router-link to="admin/register"> Sign Up</router-link>
                         <router-view /></span></div>
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
        token: null,
        email: null,
        password: null,
        password_confirmation: null,
        has_error: false
      }
     },
       methods:{
          resetPassword(){
           let currentObj = this;  
           axios.post('http://127.0.0.1:8000/api/reset-password',{
                token: this.$route.params.token,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(result => {
                // console.log(result.data);
                this.$router.push({name: 'AdminLogin'})
            }, error => {
                console.error(error);
            });
         }
       }
       
     }
 </script>


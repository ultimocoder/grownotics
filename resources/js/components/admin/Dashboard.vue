<template>
    <AdminHeader></AdminHeader>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card shadow-sm">
                    <div class="card-header">
                        <h3>Dashboard</h3>
                    </div>
                    <div class="card-body">
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AdminFooter></AdminFooter>
</template>

<script>
import  AdminHeader  from './include/Header.vue';
import  AdminFooter  from './include/Footer.vue';
export default {
    name:"dashboard",
    components: {
        AdminHeader,
        AdminFooter
  },
    data(){
        return {
            
        }
    }
}
</script>
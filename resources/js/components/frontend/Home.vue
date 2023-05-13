<template>
    <AdminHeader></AdminHeader>
        <h1>Home page</h1>
    <AdminFooter></AdminFooter>
</template>
<script>
import AdminHeader  from './include/Header.vue';
import AdminFooter  from './include/Footer.vue';
export default {
    name:"category",
    components: {
        AdminHeader,
        AdminFooter,
    },
 }
</script>
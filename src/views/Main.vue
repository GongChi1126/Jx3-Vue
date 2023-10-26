<template>
    <Navbar></Navbar>
    <router-link to="/test">go to test</router-link>
    <router-view></router-view>
</template>
<script>
import { useRouter } from 'vue-router'
// import { ref } from 'vue'
import Navbar from '../components/Navbar.vue';
const router = useRouter()
</script>
<style scoped></style>
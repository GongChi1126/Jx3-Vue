<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>
<script setup lang="js">
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue';
// import { ref } from 'vue'
const router = useRouter()
</script>
<style scoped></style>
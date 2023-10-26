<template>
    <Navbar></Navbar>
    <div class="mainbody">
        <router-link to="/add" class="btn btn-dark">新增角色</router-link>
        <hr>
        <div class="table-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>門派</th>
                        <th>等級</th>
                        <th>體型</th>
                        <th>角色ID</th>
                        <th>精力</th>
                        <th>耐力</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ job, nevel, body, gameName, endurance, energy } in roles">
                        <td>{{ job }}</td>
                        <td>{{ nevel }}</td>
                        <td>{{ body }}</td>
                        <td>{{ gameName }}</td>
                        <td>{{ energy }}</td>
                        <td>{{ endurance }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
    
<script setup lang='js'>
import Navbar from '@/components/Navbar.vue';
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios';
const router = useRouter()
const apiUrl = import.meta.env.VITE_API_JAVAURL;
const roles = ref([])
const role = () => {
    const API_URL = apiUrl + '/all'
    console.log(API_URL)
    axios.post(API_URL).then((response) => {
        console.log(response.data)
        roles.value = response.data
    })
}
role()
</script>
    
<style scoped>
.mainbody {
    width: 80%;
    margin: 0 auto;
}
</style>
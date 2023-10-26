<template>
    <div class="mainbody">
        <button type="button" class="btn btn-dark" @click="role">查詢角色</button>
        <hr>
        <div class="table-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>門派</th>
                        <th>等級</th>
                        <th>體型</th>
                        <th>角色ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ job, nevel, body, gameName } in roles">
                        <td>{{ job }}</td>
                        <td>{{ nevel }}</td>
                        <td>{{ body }}</td>
                        <td>{{ gameName }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
    
<script setup lang='js'>
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
        roles.value = response.data
    })
}
</script>
    
<style scoped>
.mainbody {
    width: 80%;
    margin: 0 auto;
}
</style>
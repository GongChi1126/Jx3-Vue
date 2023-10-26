<template>
    <Navbar></Navbar>
    <div style="display: flex; justify-content: center">
        <div class="mainbody">
            <h3>門派</h3>
            <select class="form-select" aria-label="Default select example" v-model="job">
                <option selected>請選擇</option>
                <option value="成男">成男</option>
                <option value="成女">成女</option>
                <option value="正太">正太</option>
                <option value="蘿莉">蘿莉</option>
            </select>
            <h3>等級</h3>
            <input type="text" class="form-control" v-model="name">
            <h3>體型</h3>
            <select class="form-select" aria-label="Default select example" v-model="body">
                <option selected>請選擇</option>
                <option value="成男">成男</option>
                <option value="成女">成女</option>
                <option value="正太">正太</option>
                <option value="蘿莉">蘿莉</option>
            </select>
            <h3>角色ID</h3>
            <input type="text" class="form-control" v-model="nevel">
            <h3>精力</h3>
            <input type="text" class="form-control" v-model="energy">
            <h3>耐力</h3>
            <input type="text" class="form-control" v-model="endurance">

            <button type="button" class="btn btn-dark" @click="addrole">新增</button>
            <button type="button" class="btn btn-dark" @click="goBack">返回</button>
        </div>

    </div>
</template>
    
<script setup lang='js'>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const job = ref("");
const name = ref("");
const body = ref("請選擇");
const nevel = ref("");
const energy = ref("");
const endurance = ref("");
const router = useRouter();
const apiUrl = import.meta.env.VITE_API_JAVAURL;
const goBack = () => {
    router.push("/role");
}

const addrole = () => {
    const API_URL = apiUrl + '/addrole'
    const roledata = {
        job: job.value,
        name: name.value,
        body: body.value,
        nevel: nevel.value,
        energy: energy.value,
        endurance: endurance.value,
    }
    console.log(roledata);
    //
    axios.post(API_URL, roledata).then(() => {
        router.push("/role");
    })
}

</script>
    
<style scoped>
.mainbody {
    width: 80%;
    margin: 0 auto;
}

.mainbody input {
    width: 50%;
    margin-bottom: 10px;
}

.mainbody select {
    width: 50%;
    margin-bottom: 10px;
}
</style>
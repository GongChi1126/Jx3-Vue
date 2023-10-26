<template>
    <Navbar></Navbar>
    <router-view></router-view>
    <div class="main-box">
        <div class="box">
            <router-link to="/role" class="router">
                <h1>我的角色</h1>
            </router-link>
        </div>
        <div class="box">
            <router-link to="/test" class="router">
                <h1>我的物品</h1>
            </router-link>
        </div>
    </div>
    <div class="main-box">
        <div class="box">
            <router-link to="" class="router">
                <h1>交易平台</h1>
            </router-link>
        </div>
        <div class="box">
            <router-link to="" class="router">
                <h1>交易平台</h1>
            </router-link>
        </div>
    </div>
</template>
<script setup lang="js">
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
// import { ref } from 'vue'
const router = useRouter()
</script>
<style scoped>
.main-box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center
}

.box {
    width: 500px;
    height: 300px;
    background-color: rgba(168, 156, 156, 0.61);
    border-radius: 15px;
    margin: 10px;
}

.router {
    color: #1b1a1a;
    font-size: 20px;
    font-weight: bolder;
    text-decoration: none;
}
</style>
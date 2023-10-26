
<template>
  <h1>次數{{ count }}</h1>
  <button type="button" class="btn btn-dark" @click="add">+</button>
  <button type="button" class="btn btn-dark" @click="reduce">-</button>
</template>

<script setup lang="js">
import { ref } from 'vue'
const count = ref(0)
const add = () => {
  count.value++
}

const reduce = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>


<style scoped></style>

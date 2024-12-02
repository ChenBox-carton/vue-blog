<template>
  <navigate />
  <rain />
  <div class="initPage">
    <img src="/icon-images/box.jpg" alt="box-image" width="360px" height="360px">
    <h1>Hello! Wellcome to #CCC.</h1>
  </div>
  <div class="initText">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import navigate from './navigate/navigate.vue';
import rain from './rain-effect.vue';

const text = ref("");
</script>

<style scoped>
.initPage {
  display: flex;
  padding-top: 100px;
}

.initPage img {
  margin: 100px;
  padding: 20px;
  background-color: rgba(160, 160, 160, 0.5);
  border: 10px solid #000;
  border-radius: 50px;
  transition: all 0.4s ease;
}

.initPage h1 {
  margin: 242.5px auto;
  font-size: 50px;
  transition: font-size 0.4s ease;
}

/* RWD */

@media(max-width: 1000px) {
  .initPage img {
    display: none;
  }
  .initPage h1 {
    font-size: 30px;
  }
}

@media(max-width: 450px) {
  .initPage h1 {
    font-size: 30px;
  }

  .initText {
    margin: 30px 60px;
  }
}
</style>
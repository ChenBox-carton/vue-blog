<template>
  <navigate />
  <rainEffect />
  <div class="initPage">
    <img src="/icon-images/box.jpg" alt="box-image" width="360px" height="360px">
    <h1>Hello! Wellcome to #CCC.</h1>
  </div>
  <div class="initText">
    <h2>About the Web:</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import navigate from './navigate/navigate.vue';
import rainEffect from './rainEffect.vue';

const text = ref("就只是一時興起，想寫的一個網站沒什麼特別的原因，未來應該會更新不少內容。");
</script>

<style scoped>
.initPage {
  display: flex;
  padding-top: 100px;
}

.initPage h1 {
  margin: 242.5px auto;
  font-size: 50px;
}

.initPage img {
  margin: 100px;
  padding: 20px;
  background-color: rgba(160, 160, 160, 0.5);
  border: 10px solid #000;
  border-radius: 50px;
}

@media(max-width: 1000px) {
  .initPage img {
    display: none;
  }
}

@media(max-width: 660px) {
  .initPage h1 {
    font-size: 30px;
  }

  .initText {
    margin: 30px 60px;
  }
}

/* initText */
.initText {
  padding: 50px;
  margin: 60px 120px;
  border-radius: 100px;
  background-color: rgba(30, 30, 30, 0.5);
}

.initText h2 {
  font-size: 30px;
}

.initText p {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 20px;
}
</style>
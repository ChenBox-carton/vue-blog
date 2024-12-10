<template>
  <Nav/>
  <div class="main-container">
    <div class="main-label">
      <img src="../assets/images/box.jpg" alt="images">
      <h1>Hello! Wellcome to #CCC.</h1>
    </div>
  </div>
</template>

<script setup>
import Nav from '../components/navigation-bar.vue';
</script>

<style scoped>
.main-container {
  width: 100%;
}

.main-label {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 136px;
}

.main-label img {
  width: 320px;
  height: 320px;
  padding: 32px;
  background-color: rgba(200, 200, 200, 0.4);
  border: 6px solid #000;
  border-radius: 64px;
}

.main-label h1 {
  font-size: 36px;
}

@media (max-width: 750px) {
  .main-label img {
    display: none;
  }
  .main-label h1 {
    margin-top: 136px;
  }
}
</style>
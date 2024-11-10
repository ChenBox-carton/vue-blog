<template>
<navigate/>
<div class="container">
  <button class="creatNote">
    <i class='bx bxs-plus-square'></i>
  </button>
</div>
</template>

<script setup>
import navigate from '../navigate.vue';
</script>

<style scoped>
.creatNote {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 10px;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.creatNote i {
  font-size: 40px;
  color: #000;
  transition: all 0.4s ease;
}

.creatNote:hover {
  background-color: #ffaf01;
}

.creatNote i:hover {
  transform: scale(1.2);
}
</style>
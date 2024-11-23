<template>
  <navigate/>
  <rainEffect/>
  <div class="collectionBody">
    <div class="imageCollection">
      <div class="imageSlider">
        <div class="sliderItem">
          <img src="/collection-images/monogatari.jpg" alt="monogatari-image" width="800px">
        </div>

        <div class="sliderControls">
          <span class=""></span>
          <span class=""></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigate from './navigate.vue';
import rainEffect from '../rainEffect.vue';
</script>

<style scoped>
.collectionBody {
  width: 100%;
  height: 100%;
  padding-top: 150px;
}

.imageCollection {
  display: flex;
  align-items: center;
  justify-content: center;
}

.imageSlider {
  position: relative;
  width: 800px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
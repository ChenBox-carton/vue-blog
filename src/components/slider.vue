<template>
  <div class="slider-container">
    <img
      :src="images[index].src"
      :class="{ active: isActive }"
      alt="slider-images"
    >
    <div class="slider-controllers">
      <span class="slider-left prev" @click="moveSlider(-1)">
        <i class='bx bxs-left-arrow'></i>
      </span>
      <span class="slider-right next" @click="moveSlider(1)">
        <i class='bx bxs-right-arrow'></i>
      </span>
    </div>
    <div class="slider-indicators">
      <span 
      v-for="(image, indicatorsIndex) in images"
      :key="indicatorsIndex"
      :class="{ active: indicatorsIndex === index}"
      @click="jumpToSlider(indicatorsIndex)">
    </span>
    </div>
    <h2>{{ images[index].title }}</h2>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps ({
  images: {
    type: Array,
    required: true,
  },
})

let index = ref(0);
let isActive = ref(true);

const moveSlider = (direction) => {
  index.value = (index.value + direction + props.images.length) % props.images.length;
}

const jumpToSlider = (sliderIndex) => {
  index.value = sliderIndex;
}
</script>

<style>
.slider-container {
  display: flex;
  align-items: center;
  width: 800px;
  overflow: hidden;
  position: relative;
  border: 4px solid rgba(200, 200, 200, 0.5);
  border-radius: 32px;
}

.slider-container img {
  width: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.slider-container img.active {
  opacity: 1;
}

.slider-container h2 {
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 50%;
  bottom: 32px;
  transform: translateX(-50%);
}

.slider-controllers span{
  width: 36px;
  height: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 80, 80, 0.8);
  background: rgba(200, 200, 200, 0.8);
}

.slider-controllers .prev {
  left: 0;
  border-radius: 0 12px 12px 0;
}

.slider-controllers .next {
  right: 0;
  border-radius: 12px 0 0 12px;
}

.slider-indicators {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 16px;
}

.slider-indicators span {
  cursor: pointer;
  margin: 0 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}

.slider-indicators span.active {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
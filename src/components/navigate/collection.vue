<template>
  <navigate/>
  <rainEffect/>
  <div class="collectionBody">
    <div class="imageCollection">
      <div class="imageSlider">
        <div class="sliderItem">
          <img 
            :src="images[sliderIndex - 1]" 
            :class="{ active: isActive }"
            alt="slider-images">
        </div>
        <div class="sliderControls">
          <span class="slider-left prev" @click="changeSlider(-1)">
            <i class='bx bxs-left-arrow'></i>
          </span>
          <span class="slider-right next" @click="changeSlider(1)">
            <i class='bx bxs-right-arrow'></i>
          </span>
        </div>

        <div class="sliderIndicators">
          <span
            v-for="(image, index) in images"
            :key="index"
            :class="{ active: sliderIndex === index + 1 }"
            :style="{ 
              width: sliderIndex === index + 1 ? '20px' : '10px',
              background: sliderIndex === index + 1 ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)'
            }"
            @click="moveTo(index + 1)"
          ></span>
        </div>

        <div class="sliderText">
          <h3 
            v-for="(title, index) in titles" 
            :key="index" 
            :class="{ active: sliderIndex === index + 1 }">
            {{ title }}
          </h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import navigate from './navigate.vue';
import rainEffect from '../rainEffect.vue';
import 'boxicons/css/boxicons.min.css';

const images = [
  '/collection-images/biisu-biisu.jpg',
  '/collection-images/monogatari.jpg',
  '/collection-images/witch-spring.jpg',
];

const titles = [
  'Yotsugi Ononoki',
  'Monogatari',  
  'Witch Spring',
];

let sliderIndex = ref(1);
let isActive = ref(true);

const changeSlider = (direction) => {

  isActive.value = !isActive.value;

  setTimeout(() => {
    sliderIndex.value += direction;
    if (sliderIndex.value < 1) sliderIndex.value = images.length;
    if (sliderIndex.value > images.length) sliderIndex.value = 1; 
  }, 400)

  setTimeout(() => {
    isActive.value = !isActive.value;
  }, 600)
};

const moveTo = (index) => {
  isActive.value = !isActive;
  
  setTimeout(() => {
    sliderIndex.value = index;
  }, 400)

  setTimeout(() => {
    isActive.value = !isActive.value;
  }, 600)
};
</script>

<style scoped>
.collectionBody {
  padding-top: 150px;
}

.imageCollection {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageSlider {
  position: relative;
  width: 1000px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
}

.imageSlider img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.imageSlider img.active {
  opacity: 1;
}

.sliderControls span{
  cursor: pointer;
  position: absolute;
  width: 35px;
  height: 70px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  line-height: 70px;
  color: #404040;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sliderControls span i {
  font-size: 20px;
}

.sliderControls span:hover {
  color: #202020;
  background: rgba(255, 255, 255, 0.8);
}

.sliderControls .prev {
  left: 0;
  border-radius: 0 10px 10px 0;
}

.sliderControls .next {
  right: 0;
  border-radius: 10px 0 0 10px;
}

.sliderIndicators {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
}

.sliderIndicators span {
  cursor: pointer;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  transition: all 0.4s ease;
}

.sliderIndicators span:hover {
  background: rgba(255, 255, 255, 0.8);
}

.sliderText {
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;
}

.sliderText h3 {
  position: absolute;
  bottom: 60px;
  font-size: 24px;
  letter-spacing: 2px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.sliderText h3.active {
  opacity: 1;
}

@media (max-width: 850px){
  .imageSlider {
    width: 400px;
    height: 225px;
  }
}
</style>
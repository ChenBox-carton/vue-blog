<template>
  <navigate/>
  <rainEffect/>
  <div class="collectionBody">
    <div class="imageCollection">
      <div class="imageSlider">
        <div class="sliderItem">
          <img src="/collection-images/monogatari.jpg" alt="monogatari-image">
          <!-- <img src="/collection-images/shin-megami-tensei-iii.jpg" alt="SMT-III-image"> -->
          <img src="/collection-images/witch-spring.jpg" alt="witch-spring-image">
        </div>
        <div class="sliderControls">
          <span class="slider-left prev"><</span>
          <span class="slider-right next">></span>
        </div>

        <div class="sliderIndicators">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="sliderText">
          <h3>Monogatari</h3>
          <h3>Witch Spring</h3>
          <h3>Shin Megami Tensei III</h3>
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
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
}

.imageSlider img {
  width: 100%;
  height: 100%;
  position: absolute;
}

.sliderControls span{
  cursor: pointer;
  position: absolute;
  width: 35px;
  height: 70px;
  top: 50%;
  transform: translateY(-50%);
  font-family: "Agdasima";
  text-align: center;
  line-height: 70px;
  font-size: 50px;
  color: #404040;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.4s ease;
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
  width: 30px;
  height: 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: all 0.4s ease;
}

.sliderIndicators span:hover {
  background: rgba(255, 255, 255, 0.8); 
}

@media (max-width: 850px){
  .imageSlider {
    width: 400px;
    height: 225px;
  }
}
</style>
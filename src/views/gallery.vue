<template>
  <Nav/>
  <div class="gallery-container">
    <Slider :images="images"/>
  </div>
</template>

<script setup>
import Nav from '../components/navigation-bar.vue';
import Slider from '../components/slider.vue';
import WitchSpring from '../assets/images/collection-images/witch-spring.jpg';
import Biisu from '../assets/images/collection-images/biisu-biisu.jpg'

const images = [{
  id: 1,
  title: "Witch-Spring",
  src: WitchSpring
},
{
  id: 2,
  title: "Biisu-Biisu",
  src: Biisu
}]
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
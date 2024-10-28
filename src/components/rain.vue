<template>
  <div ref="frontRow" class="rain front-row" v-html="frontRowDrops"></div>
  <div ref="backRow" class="rain back-row" v-html="backRowDrops"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const frontRowDrops = ref('');
const backRowDrops = ref('');

function makeItRain() {
  let increment = 0;
  let drops = '';
  let backDrops = '';

  while (increment < 100) {
    const randoHundo = Math.floor(Math.random() * 100) + 1;
    const randoFiver = Math.floor(Math.random() * 4) + 2;
    increment += randoFiver;

    drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
              </div>`;
    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                    <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  </div>`;
  }

  frontRowDrops.value = drops;   
  backRowDrops.value = backDrops;
}

onMounted(() => {
  makeItRain();
});
</script>

<style>
.rain {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.rain.back-row {
  display: block;
  z-index: 1;
  bottom: 60px;
  opacity: 0.5;
}

.drop {
  position: absolute;
  top: 140px;
  bottom: 100%;
  width: 15px;
  height: 120px;
  pointer-events: none;
  animation: drop 2s linear infinite;
}

@keyframes drop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}

.stem {
  width: 1px;
  height: 60%;
  margin-left: 5px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.25));
  animation: stem 2s linear infinite;
}

@keyframes stem {
  0% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

<template>
  <div class="background">
    <div ref="frontRow" class="rain front-row"></div>
    <div ref="backRow" class="rain back-row"></div>
    <div class="toggles">
      <div @click="toggleSplat" class="splat-toggle toggle">SPLAT</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const frontRow = ref(null);
const backRow = ref(null);

function makeItRain() {

  let increment = 0;
  let drops = '';
  let backDrops = '';

  while (increment < 100) {
    const randoHundo = Math.floor(Math.random() * 98) + 1;
    const randoFiver = Math.floor(Math.random() * 4) + 2;

    increment += randoFiver;

    drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
              </div>`;
    backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver * 2 - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
                    <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                    <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
                  </div>`;
  }

  frontRow.value.innerHTML = drops;
  backRow.value.innerHTML = backDrops;
}

function toggleSplat() {
  document.body.classList.toggle('splat-toggle');
  makeItRain();
}

onMounted(async () => {
  await nextTick();
  makeItRain();
});
</script>

<style scoped>
.background {
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background: linear-gradient(to bottom, #606060, #101010);
}

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
  bottom: 100%;
  width: 15px;
  height: 120px;
  pointer-events: none;
  animation: drop 2s linear infinite;
}

@keyframes drop {
  0% {
    transform: translateY(0vh);
  }
  90% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(100vh);
  }
}

.stem {
  width: 1px;
  height: 60%;
  margin-left: 7px;
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

.splat {
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  animation: splat 2s linear infinite;
  display: block;
}

body.splat-toggle .splat {
  display: none;
}

@keyframes splat {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}

.toggles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.toggle {
  position: absolute;
  left: 25px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  text-align: center;
  font-family: sans-serif;
  font-size: 10px;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.toggle:active {
  background-color: rgba(255, 255, 255, 0.3);
}

.splat-toggle {
  top: 120px;
}
</style>

<template>
  <div class="rain">
    <canvas ref="canvas" class="rain-canvas"></canvas>
  </div>
  <button class="rain-switch" @click = "switchRain">
    <i class='bx bxs-cloud-rain cloud-rain-icon' v-if="raining"></i>
    <i class='bx bxs-cloud cloud-icon' v-else></i>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);
let context = null;
let rainDrops = [];
let animation;
const raining = ref(true);

class RainDrop {
  constructor (x, y, speed, length) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.length = length;
  }

  fall (height) {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0 - this.length;
    }
  }

  draw(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x, this.y + this.length);
    context.strokeStyle = 'rgba(170, 200, 225, 0.5)';
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.stroke();
  }
}

const createRainDrops = (num, width, height) => {
  rainDrops = [];
  for (let i = 0; i < num; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const speed = Math.random() * 4 + 1;
    const length = Math.random() * 20 + 1;
    rainDrops.push(new RainDrop(x, y, speed, length))
  }
}

const animateRain = (width, height) => {
  context.clearRect(0, 0, width, height);
  rainDrops.forEach(drop => {
    drop.fall(height);
    drop.draw(context);
  });
  animation = requestAnimationFrame(() => {
    animateRain(width, height);
  })
}

const initializeCanvas = () => {
  if (!raining.value) return;
  const canvasElement = canvas.value;

  if (!canvasElement) return;
  if (animation) cancelAnimationFrame(animation);

  context = canvasElement.getContext('2d');
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;

  createRainDrops(50, canvasElement.width, canvasElement.height);
  animateRain(canvasElement.width, canvasElement.height);
}

const switchRain = () => {
  raining.value = !raining.value;
  if (raining.value) {
    initializeCanvas();
  } else {
    rainDrops = [];
    context.clearRect(0, 0, width, height);
  }
}

onMounted(() => {
  initializeCanvas();
  window.addEventListener('resize', initializeCanvas);
})
</script>

<style scoped>
.rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.rain-canvas {
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.rain-switch {
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 10px;
  bottom: 10px;
  background-color: #202020;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  
}

.rain-switch i {
  color: #fff;
  font-size: 16px;
  transition: color 0.4s ease, font-size 0.4s ease;
}

.rain-switch:hover {
  .cloud-rain-icon,
  .cloud-icon {
    color: rgb(255, 155, 0);
    font-size: 20px;
    animation: flashing 2s infinite alternate;
  }
}
</style>


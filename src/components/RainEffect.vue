<template>
  <div class="rain-container">
    <canvas ref="canvas" class="rain-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const canvas = ref(null);
let context = null;
let rainDrops = [];
let animationFrameId;

// RainDrop Class
class RainDrop {
  constructor(x, y, speed, length) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.length = length;
  }

  fall(height) {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0 - this.length;
    }
  }

  draw(context) {
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x, this.y + this.length);
    context.strokeStyle = 'rgba(174,194,224,0.5)';
    context.lineWidth = 1;
    context.lineCap = 'round';
    context.stroke();
  }
}

function createRainDrops(num, width, height) {
  rainDrops = [];
  for (let i = 0; i < num; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const speed = Math.random() * 4 + 2;
    const length = Math.random() * 20 + 10;
    rainDrops.push(new RainDrop(x, y, speed, length));
  }
}

function animateRain(width, height) {
  context.clearRect(0, 0, width, height);
  rainDrops.forEach(drop => {
    drop.fall(height);
    drop.draw(context);
  });
  animationFrameId = requestAnimationFrame(() => animateRain(width, height));
}

onMounted(() => {
  const canvasElement = canvas.value;
  context = canvasElement.getContext('2d');

  const resizeCanvas = () => {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    createRainDrops(100, canvasElement.width, canvasElement.height);
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animateRain(canvasElement.width, canvasElement.height);

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas);
    cancelAnimationFrame(animationFrameId);
  });
});
</script>

<style scoped>
.rain-container {
  position: fixed;
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
}
</style>

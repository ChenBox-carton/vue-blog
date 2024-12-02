<template>
  <div class="rain-container" v-if="isRaining">
    <canvas ref="canvas" class="rain-canvas"></canvas>
  </div>
  <button class="rainSwitch" @click="switchRain">
    <i class='bx bxs-cloud-rain rain' v-if="isRaining"></i>
    <i class='bx bxs-cloud cloud' v-else></i>
  </button>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';

const canvas = ref(null);
let context = null;
let rainDrops = [];
let animationFrameId;
const isRaining = ref(true);

// 動畫物件繪製
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

// 停止動畫
function stopRain() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId); // 停止動畫
    animationFrameId = null;
  }
  if (context) {
    context.clearRect(0, 0, canvas.value.width, canvas.value.height); // 清除畫布
  }
}

// 初始化
function initializeCanvas() {
 
  stopRain(); // 停止

  // 繪製
  const canvasElement = canvas.value;
  context = canvasElement.getContext('2d');
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  
  createRainDrops(50, canvasElement.width, canvasElement.height)
  animateRain(canvasElement.width, canvasElement.height);
}

const switchRain = () => {
  isRaining.value = !isRaining.value;
  
  // 切換為下雨
  if (isRaining.value) {
    nextTick(() => {
      // 完全渲染完畢後初始化畫布
      initializeCanvas();
    });
  // 切換為無雨
  } else {
    stopRain();
  }
};

// 當螢幕大小變動時
const resizeCanvas = () => {

  const canvasElement = canvas.value;
  if (canvasElement) {
    // 停止動畫
    stopRain();

    // 調整視窗大小
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;
    
    //生成雨
    if (isRaining.value) {
        createRainDrops(100, canvasElement.width, canvasElement.height);
        animateRain(canvasElement.width, canvasElement.height);
    }
  }
}

onMounted(() => {
  
  // 初始化時綁定事件監聽器
  window.addEventListener('resize', resizeCanvas);

  initializeCanvas();

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
  z-index: -1;
}

.rainSwitch {
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #202020;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  position: fixed;
  left: 10px;
  bottom: 10px;
  transition: all 0.4s ease;
}

.rainSwitch:hover {
  color: #ffaf01;
  .rain, .cloud {
    animation: flashing 1s infinite alternate;
  }
}

@keyframes flashing {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>

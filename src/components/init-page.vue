<template>
  <Navigate/>
  <RainEffect/>
  <div class="initArea">
    <img src="/images/box.jpg" alt="box-image" width="360px" height="360px">
    <h1></h1>
  </div>
  <div class="initText">
    <h2>About the Web:</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import Navigate from './navigate.vue';
import RainEffect from './rainEffect.vue';
const text = "就只是一時興起，想寫的一個網站沒什麼特別的原因，未來應該會更新不少內容。";
</script>

<style scoped>
/* initArea */
.initArea {
  display: flex;
}

.initArea h1 {
  margin: auto;
  font-size: 50px;
}

.initArea h1::after {
  content: "";
  animation: typing 4s linear 1;
  animation-fill-mode: forwards;
}

@keyframes typing {
  0% {
    content: "H";
  }
  4% {
    content: "He";
  }
  8% {
    content: "Hel";
  }
  12% {
    content: "Hell";
  }
  16% {
    content: "Hello";
  }
  20% {
    content: "Hello!";
  }
  24% {
    content: "Hello! ";
  }
  28% {
    content: "Hello! W";
  }
  32% {
    content: "Hello! We";
  }
  36% {
    content: "Hello! Wel";
  }
  40% {
    content: "Hello! Welk";
  }
  44% {
    content: "Hello! Welk";
  }
  48% {
    content: "Hello! Well";
  }
  52% {
    content: "Hello! Wellc";
  }
  56% {
    content: "Hello! Wellco";
  }
  60% {
    content: "Hello! Wellcom";
  }
  64% {
    content: "Hello! Wellcome ";
  }
  68% {
    content: "Hello! Wellcome t";
  }
  72% {
    content: "Hello! Wellcome tt";
  }
  76% {
    content: "Hello! Wellcome tt";
  }
  80% {
    content: "Hello! Wellcome to ";
  }
  84% {
    content: "Hello! Wellcome to #";
  }
  88% {
    content: "Hello! Wellcome to #";
  }
  92% {
    content: "Hello! Wellcome to #C";
  }
  96% {
    content: "Hello! Wellcome to #CC";
  }
  100% {
    content: "Hello! Wellcome to #CCC";
  }
}

.initArea img {
  margin: 100px;
  padding: 20px;
  background-color: rgba(160,160, 160, 0.5);
  border: 10px solid #000;
  border-radius:50px;
}

@media(max-width: 1000px) {
  .initArea img {
    display: none;
  }
}

@media(max-width: 660px) {
  .initArea h1 {
    font-size: 30px;
  }
}

/* initText */
.initText {
  padding: 50px;
  margin: 60px 120px;
  border-radius: 100px;
  background-color: rgba(30, 30, 30, 0.5);
}

.initText h2 {
  font-size: 30px;
}

.initText p {
  font-family: "Noto Sans TC", sans-serif;
  font-size: 20px;
}
</style>
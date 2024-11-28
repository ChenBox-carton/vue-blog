<template>
    <div class="navContainer">
      <div class="navLeft">
          <div class="mainIcon">
              <button @click="navigateTo('/login')">
                  <img src="/icon-images/icon.jpg" alt="box-images" width="40px" height="40px">
              </button>    
          </div>
          <ul class="nav">
              <li><router-link to = "/collection">Collection</router-link></li>
              <li><router-link to = "/projects">Projects</router-link></li>
              <li><router-link to = "/note">Note</router-link></li>
              <li><router-link to = "/chat">Chat</router-link></li>
          </ul>
          <div class="miniNav">
              <button @click="showMini()">
                  <i class='bx bx-menu'></i>
              </button>
          </div>
      </div>
      <div class="navRight">
          <div class="navSocial">
              <button @click="navigateTo('/')">
                  <img src="/icon-images/home.jpg" alt="home-images" width="40px" height="40px">
              </button>
              <button @click="openUrl('https://discord.gg/PCV5sr8v')">
                  <img src="/icon-images/discord.jpg" alt="discord-images" width="40px" height="40px">
              </button>
              <button @click="openUrl('https://github.com/ChenBox-carton')">
                  <img src="/icon-images/github.jpg" alt="github-images" width="40px" height="40px">
              </button>
              <button @click="">
                  <img src="/icon-images/etc.jpg" alt="etc-images" width="40px" height="40px">
              </button>
          </div>
          <div class="loginIcon">
              <button @click="navigateTo('/login')">
                  <img src="/icon-images/login.jpg" alt="login-images" width="35px" height="35px">
              </button>
          </div>
      </div>
    </div>
    <transition name="fade">
      <div class="miniNavContent" v-show="miniContent">
          <button @click="navigateTo('/')">
              <i class='bx bx-home' ></i>
          </button>
          <button @click="openUrl('https://discord.gg/PCV5sr8v')">
              <i class='bx bxl-discord-alt'></i>
          </button>
          <button @click="openUrl('https://github.com/ChenBox-carton')">
              <i class='bx bxl-github' ></i>
          </button>
          <button @click="navigateTo('/login')">
              <i class='bx bx-log-in'></i>
          </button>
      </div>
  </transition>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import 'boxicons/css/boxicons.min.css';
  
  const router = useRouter();
  const miniContent = ref(false);
  
  const navigateTo = (path) => {
      router.push(path);
  }
  
  const openUrl = (url) => {
      window.open(url, '_blank');
  }
  
  const showMini = () => {
      miniContent.value = !miniContent.value;
  }
  
  
  const checkScreenWidth = () => {
    if (window.innerWidth > 1080) {
      miniContent.value = false;
    }
  };
  
  onMounted(() => {
    window.addEventListener('resize', checkScreenWidth);
  });
  </script>
  
  <style scoped>
  .navContainer {
      font-size: 24px;
      font-family: "Agdasima", sans-serif;
      width: 100%;
      height: 100px;
      background: #252525;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navLeft {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .navRight {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .mainIcon {
      width: 60px;
      height: 60px;
      display: flex;
      border-radius: 50%;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
  }
  
  .mainIcon img,
  .loginIcon img, 
  .navSocial button img {
      z-index: 3;
  }
  
  .mainIcon button,
  .navSocial button, 
  .loginIcon button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: transparent;
      cursor: pointer;
      border: none;
      outline: none;
  }
  
  .nav { 
      margin-left: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
      transition: all 0.4s ease;
      list-style-type: none;
      z-index: 3;
  }
  
  .nav li a {
      color: #fff;
      text-decoration: none; 
      position: relative;
  }
  
  .miniNav {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: 20px;
      z-index: 3;
      transition: all 0.4s ease; 
  }
  
  .miniNav button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      border: none;
      border-radius: 25%;
      background-color: #404040;
      cursor: pointer;
      font-size: 30px;
      transition: background-color 0.4s ease;
  }
  
  .miniNavContent {
      position: fixed;
      z-index: 2;
      top: 120px;
      right: 20px;
      width: 200px;
      height: 50px;
      background: #404040;
      border: 10px solid #202020;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
  }
  
  .miniNavContent button {
      font-size: 20px;
      background-color: #404040;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: color 0.4s ease;
  }
  
  .navSocial {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 100px;
      background-color: #fff;
      padding: 10px;
      margin-right: 60px;
      gap: 20px; 
  }
  
  .loginIcon {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25%;
      background-color: #fff;
      position: relative;
      overflow: hidden;
      cursor: pointer;
  }
  
  /*RWD*/
  @media(max-width: 600px) {
     .nav {
          margin-left: 20px;
          gap: 20px;
      }
     .nav a {
          font-size: 20px;
      }
      .mainIcon {
          display: none;
      }
  
  }
  
  @media(max-width: 1080px) {
      .navSocial, .loginIcon {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
      }
      .miniNav {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease, visibility 0.5s ease;
      }
  }
  
  @media(min-width: 1081px) {
      .navSocial, .loginIcon {
          opacity: 1;
          visibility: visible;
          transition: opacity 0.5s ease, visibility 0.5s ease;
      }
      .miniNav {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
      }
  }
  
  /* 動畫 */
  
  /* 填充icon背景*/
  .mainIcon::after, 
  .loginIcon::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #ffaf01;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform 0.8s ease;
      z-index: 1;
  }
  
  .mainIcon:hover::after, 
  .loginIcon:hover::after{
      transform: scaleY(1);
  }
  
  /* icon放大 */
  .mainIcon img,
  .loginIcon img,
  button img {
      transition: transform 0.4s ease;
  }
  
  .mainIcon:hover img,
  .loginIcon:hover img,
  .navSocial button:hover img {
      transform: scale(1.2);
  }
  
  /* nav線 */
  .nav a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #ffaf01;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s ease;
      z-index: 1;
  }
  
  .nav a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
  }
  
  /* nav 變色 and 彈跳 */
  .nav a{
      transition: color 0.4s ease;
  }
  
  .nav a:hover{
      color: #ffaf01;
  }
  
  .nav li{
      transition: transform 0.4s cubic-bezier(0, -0.5, 0, 2);
  }
  
  .nav li:hover{
      transform: translateY(-2px)
  }
  
  /* novS */
  .navSocial button::before {
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      background-color: #ffaf01;
      border-radius: 50%;
      opacity: 0;
      transform: scale(0.5);
      transition: transform 0.4s ease, opacity 0.4s ease;
      z-index: 1;
  }
  
  .navSocial button:hover::before {
      opacity: 1;
      transform: scale(1);
  }
  
  /* miniNav */
  .miniNav button:hover {
      background-color: #606060;
  }
  
  .miniNavContent button:hover {
      color: #ffaf01
  }
  
  .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
      opacity: 0;
  }
  </style>
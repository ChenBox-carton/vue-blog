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
            <button>
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
            <button @click="switchRain()">
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
</template>

<script setup>
import { useRouter } from 'vue-router';
import 'boxicons/css/boxicons.min.css';

const router = useRouter();

const navigateTo = (path) => {
    router.push(path);
}

const openUrl = (url) => {
    window.open(url, '_blank');
}

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
.navSocial button img{
    z-index: 3;
}

.nav { 
    margin-left: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    transition: all 0.4s ease;
}

ul {
    list-style-type: none;
    z-index: 3;
}

.nav a {
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
    transition: background-color 0.4s ease;
}

.miniNav button:hover {
    background-color: #606060;
}

.miniNav button i {
    font-size: 30px;
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

.mainIcon button,
.navSocial button, 
.loginIcon button{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
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

/* ----------動畫---------- */

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

</style>
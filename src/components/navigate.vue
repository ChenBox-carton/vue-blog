<template>
  <div class="container">
    <div class="navLeft">
        <div class="mainIcon">
            <img src="/images/icon.jpg" alt="box-images" width="40px" height="40px">
        </div>
        <ul class="nav">
            <li><a href="#">AboutMe</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Images</a></li>
            <li><a href="#">Archives</a></li>
        </ul>
    </div>
    <div class="navRight">
        <div class="navSocial">
            <button>
                <img src="/images/home.jpg" alt="home-images" width="40px" height="40px">
            </button>
            <button>
                <img src="/images/discord.jpg" alt="discord-images" width="40px" height="40px">
            </button>
            <button>
                <img src="/images/github.jpg" alt="github-images" width="40px" height="40px">
            </button>
            <button>
                <img src="/images/question.jpg" alt="question-images" width="40px" height="40px">
            </button>
        </div>
        <div class="loginIcon">
            <img src="/images/login.jpg" alt="login-images" width="35px" height="35px">
        </div>
    </div>
  </div>
</template>

<script setup>
    
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap");

.container {
    font-size: 24px;
    font-family: "Agdasima", sans-serif;
    width: 100%;
    height: 100px;
    background: #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
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

.navSocial button {
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
@media (max-width: 660px) {
  .nav {
        margin-left: 40px;
        gap: 30px;
  }
}

@media(max-width: 1080px) {
    .navSocial, .loginIcon {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }
}

@media(min-width: 1081px) {
    .navSocial, .loginIcon {
        opacity: 1;
        visibility: visible;
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
.loginIcon img {
    transition: transform 0.4s ease;
}   

.mainIcon:hover img,
.loginIcon:hover img {
    transform: scale(1.2);
}

/* nav白線 */
.nav a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: #fff;
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

/* novS 按鈕放大 */
button img {
    transition: transform 0.4s ease;
}

.navSocial button:hover img {
    transform: scale(1.2);
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
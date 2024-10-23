<template>
  <div class="container">
    <div class="mainIcon">
      <img src="/images/icon.jpg" alt="box-images" width="40px" height="40px">
    </div>
    <ul class="nav">
      <a href="#">About Me</a>
      <a href="#">Projects</a>
      <a href="#">Images</a>
      <a href="#">Log in</a>
    </ul>
  </div>
</template>

<script setup>
    
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap");

.container {
    font-size: 24px;
    font-family: "Agdasima";
    width: 100%;
    height: 80px;
    background: #252525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px 40px 20px;
}

.mainIcon {
    width: 60px;
    height: 60px;
    display: flex;
    border-radius: 50%;
    background-color: #fff;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.mainIcon img {
    margin: 0 auto;
    z-index: 9999;
}

.nav{
    display: flex;
    gap: 80px;
}

.nav a{
    color: #fff;
    text-decoration: none; 
    position: relative;
    padding: 5px 0;
}

/*RWD*/
@media (max-width: 600px) {
  .nav {
      justify-content: center;
      gap: 40px;
  }
}

/*動畫*/

/* 填充icon背景*/
.mainIcon::after{
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
    z-index: 2;
}

.mainIcon:hover::after{
    transform: scaleY(1);
}

/* icon放大 */
.mainIcon img {
    transition: transform 0.4s ease;
}   

.mainIcon:hover img {
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
    z-index: 2;
}

.nav a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
}

/* nav變色 */
.nav a {
    transition: color 0.4s ease;
}

.nav a:hover {
    color: #ffaf01;
}

</style>
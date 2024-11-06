<template>
  <div class="container">
    <div class="logo">
      <img src="/images/icon.jpg" alt="icon-image">
      <router-link to = "/">#CCC</router-link>
    </div>
    <form class="inputArea">
      <label for="userName">UserName:</label>
      <div class="customInput">
        <input type="text" name="userName" placeholder="Your Name">
      </div>
      <label for="password">Password:</label>
      <div class="customInput">
        <input type="password" name="password" placeholder="Your Password">
      </div>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #252525, #505050);
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fff;
  border-radius: 100px;
  top: 20px;
  left: 20px;
  gap: 10px;
  overflow: hidden;
}

.logo img {
  width: 60px;
  height: 60px;
  padding: 10px;
  z-index: 3;
}

.logo a {
  font-family: "Agdasima";
  font-size: 30px;
  color: #000;
  text-decoration:none;
  padding-right: 20px;
  z-index: 3;
}

.inputArea {
  background-color: rgba(160,160, 160, 0.5);
  padding: 20px;
  border-radius: 30px;
}

/* 動畫 */
.logo::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #ffaf01;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.8s ease;
    z-index: 1;
}

.logo:hover::after {
    transform: scaleX(1);
}
</style>
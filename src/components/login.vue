<template>
  <div class="container">
    <div class="logo">
      <img src="/images/icon.jpg" alt="icon-image">
      <router-link to = "/">#CCC</router-link>
    </div>
    <form class="inputArea">
      <div class="title">
        <h1>Login #CCC</h1>
        <img src="/images/login-box.jpg" alt="login-box-images">
      </div>
      <label for="userName">UserName:</label>
      <div class="customInput">
        <input type="text" name="userName" placeholder="Your Name">
        <img src="/images/user.jpg" alt="user-image">
      </div>
      <label for="password">Password:</label>
      <div class="customInput">
        <input type="password" name="password" placeholder="Your Password">
        <img src="/images/lock.jpg" alt="lock-image">
      </div>
      <button>Login</button>
      <div class="link">
        <router-link to = "#">Forget Password?</router-link>
        <router-link to = "#">No Account?</router-link>
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
  width: 500px;
  border-radius: 30px;
  background-color: rgba(160,160, 160, 0.5);
  box-shadow: 50px;
  font-family: "Agdasima";
  padding: 40px 30px;
}

.inputArea label {
  font-size: 24px;
  letter-spacing: 0.05rem;
  margin-top: 20px;
  display: block;
  margin-top: 16px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
}

.title h1 {
  font-size: 32px;
  letter-spacing: 0.1rem;
}

.title img {
  width: 30px;
  height: 30px;
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
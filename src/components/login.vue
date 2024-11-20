<template>
  <rainEffect/>
  <div class="container">
    <div class="logo">
      <img src="/images/icon.jpg" alt="icon-image">
      <router-link to = "/">#CCC</router-link>
    </div>
    <form class="inputForm">
      <div class="title">
        <h1>Login #CCC</h1>
        <i class='bx bx-box'></i>
      </div>
      <label for="userName">UserName:</label>
      <div class="inputStyle">
        <input type="text" name="userName" placeholder="Your Name">
        <i class='bx bxs-user'></i>
      </div>
      <label for="password">Password:</label>
      <div class="inputStyle">
        <input type="password" name="password" placeholder="Your Password">
        <i class='bx bxs-lock-alt'></i>
      </div>
      <button class="Submit">Login</button>
      <div class="links">
        <router-link to = "#">Forget Password?</router-link>
        <router-link to = "#">No Account?</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import 'boxicons/css/boxicons.min.css';
import rainEffect from './rainEffect.vue';
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.title i {
  font-size: 30px;
}

.inputForm {
  width: 500px;
  border-radius: 30px;
  background-color: rgba(160,160, 160, 0.5);
  box-shadow: 50px;
  font-family: "Agdasima";
  padding: 40px 30px;
}

.inputForm label {
  font-size: 20px;
  letter-spacing: 0.05rem;
  margin-top: 20px;
  display: block;
  margin-top: 16px;
}

.inputForm .inputStyle {
  position: relative;
}

.inputForm .inputStyle i {
  color: #fff;
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
  transform: all 4s ease;
}

.inputForm .inputStyle input {
  color: #fff;
  font-size: 16px;
  width: 100%;
  height: 40px;
  border: 2px solid #202020;
  border-radius: 6px;
  background-color: #202020;
  outline: none;
  text-indent: 10px;
  margin-top: 4px;
  transition: all 0.4s ease;
}

.inputForm .Submit {
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  font-family: "Agdasima";;
  background-color: #202020;
  border: 2px solid #202020;
  border-radius: 12px;
  margin-top: 50px;
  letter-spacing: 0.2rem;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
}

.inputForm .links {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.inputForm .links a {
  color: #fff;
  padding: 0 20px;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  text-underline-offset: 4px;
  transition: all 0.4s ease;
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

.inputForm .inputStyle input:focus {
  border-color: #ffaf01;
}

.inputForm .inputStyle input:focus + i {
  color: #ffaf01;
}

.inputForm .Submit:hover {
  color: #ffaf01;
}

.inputForm .links a:hover {
  color: #ffaf01;
  text-decoration: underline;
}
</style>
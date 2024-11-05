<template>
  <div class="container">
    <div class="logo">
      <img src="/images/icon.jpg" alt="icon-image" width="60px">
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
  background-image: linear-gradient(to bottom, #252525, #505050)
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
  gap: 20px;
}

.logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  padding: 10px;
}

.inputArea {
  background-color: rgba(160,160, 160, 0.5);
  padding: 20px;
  border-radius: 30px;
}
</style>
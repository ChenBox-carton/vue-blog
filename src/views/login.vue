<template>
  <div class="login-container">
    <div class="logo">
      <router-link to="/">
        <i class="bx bx-home"></i>
        <span>#CCC</span>
      </router-link>
    </div>
    <form action="" method="" class="form">
      <div class="form-label">
        <span>Login #CCC</span>
        <i class="bx bx-box"></i>
      </div>
      <div class="form-input">
        <label for="username">UserName:</label>
        <div class="input-style">
          <input type="text" name="username" placeholder="Your Name" />
          <i class="bx bxs-user"></i>
        </div>
        <label for="password">Password:</label>
        <div class="input-style">
          <input type="password" name="password" placeholder="Your Password" />
          <i class="bx bxs-lock-alt"></i>
        </div>
      </div>
      <input type="submit" name="submit" value="Login" class="form-submit" />
      <div class="form-help">
        <router-link to="#">Forget Password?</router-link>
        <router-link to="#">No Account?</router-link>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(200, 200, 200, 1);
  border-radius: 100px;
  overflow: hidden;
  transition: background-color 0.4s ease;
}

.logo a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo a i {
  color: rgba(25, 25, 25, 1);
  font-size: 24px;
  padding: 8px;
  transition: color 0.4s ease;
}

.logo a span {
  font-size: 16px;
  font-weight: 600;
  color: rgba(25, 25, 25, 1);
  transition: color 0.4s ease;
  padding-right: 16px;
  transition: color 0.4s ease;
}

.logo:hover {
  background-color: rgba(255, 180, 0, 1);
}

.logo:hover a i {
  color: #fff;
}

.logo:hover a span {
  color: #fff;
}

.form {
  width: 480px;
  border-radius: 32px;
  background-color: rgba(200, 200, 200, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
}

.form-label {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.form-input label {
  font-size: 16px;
  letter-spacing: 0.8px;
}

.form-input .input-style {
  position: relative;
  margin-bottom: 16px;
}

.form-input .input-style input {
  color: #fff;
  width: 100%;
  height: 36px;
  background-color: rgba(25, 25, 25, 0.4);
  border: 2px solid rgba(200, 200, 200, 0.8);
  border-radius: 8px;
  text-indent: 8px;
  transition: border-color 0.4s ease;
}

.form-input .input-style i {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  transition: color 0.4s ease;
}

.form-input .input-style input:focus {
  border-color: rgba(255, 180, 0, 1);
}

.form-input .input-style input:focus + i {
  color: rgba(255, 180, 0, 1);
}

.form-submit {
  width: 100%;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  background-color: rgba(25, 25, 25, 0.6);
  border: 2px solid rgba(200, 200, 200, 0.8);
  border-radius: 8px;
  padding: 4px;
  margin: 16px 0;
  transition:
    color 0.4s ease,
    border-color 0.4s ease;
}

.form-submit:hover {
  color: rgba(255, 180, 0, 1);
  border-color: rgba(255, 180, 0, 1);
}

.form-help {
  display: flex;
  justify-content: space-around;
}

.form-help a {
  font-size: 16px;
  letter-spacing: 0.8px;
  color: #fff;
  position: relative;
  transition: color 0.4s ease;
}

.form-help a:hover {
  color: rgba(255, 180, 0, 1);
}

/* form-help 底下的白線 */
.form-help a:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.6px;
  border-radius: 3.2px;
  background-color: rgba(200, 200, 200, 1);
  transform: scaleX(0);
  transform-origin: right;
  transition:
    transform 0.4s ease,
    background-color 0.1s ease;
  z-index: 1;
}

.form-help a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
  background-color: rgba(255, 180, 0, 1);
}
</style>

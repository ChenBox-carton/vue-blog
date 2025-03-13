<template>
  <div class="navigation-container">
    <ul class="navigation-link">
      <li><router-link to="/gallery">圖庫</router-link></li>
      <li><router-link to="/">紀錄</router-link></li>
      <li><router-link to="/test">測試</router-link></li>
    </ul>
    <img
      class="navigation-icon"
      src="../assets/images/icon.jpg"
      alt="images"
      width="48px"
      height="48px"
    />
    <ul class="navigation-link-outside">
      <button @click="openNav('/')"><i class="bx bx-home"></i></button>
      <button @click="openUrl('https://discord.gg/uNjBDNYRFX')">
        <i class="bx bxl-discord-alt"></i>
      </button>
      <button @click="openUrl('https://github.com/chaohangz/vueBlog')">
        <i class="bx bxl-github"></i>
      </button>
      <button @click="openNav()"><i class="bx bx-link"></i></button>
      <button @click="openNav('login')"><i class="bx bxs-log-in"></i></button>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const openUrl = (url) => {
  window.open(url, '_blank');
};

const openNav = (path) => {
  router.push(path);
};
</script>

<style>
.navigation-container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgba(25, 25, 25, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border: 3.2px solid rgba(200, 200, 200, 0.5);
  border-radius: 16px;
  margin: 24px 0;
}

.navigation-link,
.navigation-link-outside,
.navigation-link-login {
  display: flex;
  align-items: center;
  position: absolute;
}

.navigation-link {
  left: 32px;
  gap: 16px;
  transition:
    left 0.4s ease,
    gap 0.4s ease;
}

.navigation-link-outside {
  background-color: rgba(200, 200, 200, 0.5);
  right: 32px;
  gap: 8px;
  padding: 4px;
  border-radius: 32px;
  transition:
    right 0.4s ease,
    gap 0.4s ease;
}

.navigation-icon {
  background-color: rgba(200, 200, 200, 1);
  border-radius: 50%;
  padding: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navigation-link li a {
  font-size: 16px;
  position: relative;
  transition: color 0.4s ease;
}

.navigation-link li a:hover {
  color: rgba(255, 180, 0, 1);
}

/* navigation-link 底下的白線 */
.navigation-link li a:after {
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

.navigation-link li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
  background-color: rgba(255, 180, 0, 1);
}

.navigation-link-outside button {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  color: rgba(25, 25, 25, 1);
  background-color: rgba(200, 200, 200, 0.5);
  padding: 4px;
  transition:
    color 0.4s ease,
    background-color 0.4s ease;
}

.navigation-link-outside button:hover {
  color: #fff;
  background-color: rgba(255, 165, 0, 1);
}

@media (max-width: 750px) {
  .navigation-link {
    left: 16px;
    gap: 8px;
  }
  .navigation-link-outside {
    right: 16px;
    gap: 4px;
  }
  .navigation-icon {
    display: none;
  }
}
</style>

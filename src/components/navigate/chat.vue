<template>
  <navigate/>
  <rain/>
  <div class="chatContent">
    <p>None</p>
  </div>
  </template>
  
  <script setup>
  import navigate from './navigate.vue';
  import rain from '../rain-effect.vue'
  </script>
  
  <style scoped>
  .chatContent {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 350px;
    width: 300px;
    height: 100px;
    background: #fff;
    border-radius: 10px;
    color: #000;
    font-size: 30px;
  }
  </style>
<template>
  <Nav/>
  <div>
    <h1>Test Page</h1>
    <p>這是測試頁面。</p>
  </div>
  <Card :cards="data"/>
</template>

<script setup>
import Nav from '../components/navigation-bar.vue';
import Card from '../components/card.vue';
const data = [{
  id: 1,
  title: "測試一",
  content: "無",
},
{
  id: 2,
  title: "測試二",
  content: "無",
},
{
  id: 3,
  title: "測試三",
  content: "無",
}]
</script>

<style scoped>

</style>
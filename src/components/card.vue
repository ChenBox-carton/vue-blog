<template>
  <div class="card-container">
    <div 
      class="card"
      v-for="card in cards"
      :key="card.id"
    >
      <div class="card-body">
        <h2 class="card-title">{{ card.title }}</h2>
        <p class="card-content">{{ card.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  cards: {
    type: Array,
    require: true,
  },
});
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 16px;
}

.card-title {
  font-size: 1.5rem;
  margin: 0 0 10px;
}

.card-content {
  font-size: 1rem;
  color: #666;
}
</style>
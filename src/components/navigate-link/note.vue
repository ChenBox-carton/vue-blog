<template>
<navigate/>
<div class="container">
    <div v-for="note in notes" :key="note.id" class="note">
      <p>{{ note.content }}</p>
      <p>{{ note.id }}</p>
    </div>

    <button class="creatNote" @click="showForm = !showForm">
      <i class='bx bxs-plus-square'></i>
    </button>

    <div v-if="showForm" class="form-overlay">
      <div class="form-container">
        <input v-model="noteLabel" type="text" class="textLabel" placeholder="輸入你的標題...">
        <textarea v-model="newNote" placeholder="輸入你的留言..."></textarea>
        <div class="form-button">
          <button @click="addNote" class="submit">
            <i class='bx bxs-right-arrow-circle'></i>
          </button>
          <button @click="showForm = !showForm" class="abandon">
            <i class='bx bxs-x-circle'></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import navigate from '../navigate.vue';

const notes = ref([]);
const showForm = ref(false);
const noteLabel = ref('')
const newNote = ref('');

function addNote() {
  if (newNote.value.trim()) {
    notes.value.push({ id: noteLabel.value, content: newNote.value });
    noteLabel.value = '';
    newNote.value = '';
    showForm.value = false;
  }
}
</script>

<style scoped>

.container {
  padding: 20px;
}

.note {
  padding: 10px;
  background-color: #404040;
  margin-bottom: 10px;
  border-radius: 5px;
}

.creatNote {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 10px;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.creatNote i {
  font-size: 40px;
  color: #000;
  transition: all 0.4s ease;
}

.creatNote:hover {
  background-color: #ffaf01;
}

.creatNote i:hover {
  transform: scale(1.2);
}

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: #101010;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 80%;
}

.form-container input {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  color:#fff;
  background-color: #606060;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
}

.form-container textarea {
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  color:#fff;
  background-color: #606060;
  border: none;
  border-radius: 10px;
  resize: none; 
  padding: 10px;
  font-size: 16px;
}

.form-container textarea::placeholder,
.form-container input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-container .form-button{
  display: flex;
  gap: 10px;
}

.form-container button {
  padding: 10px;
  background-color: #404040;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;
}

.form-container .submit {
  width: 90%;
}

.form-container .abandon {
  width: 10%;
}

.form-container button i {
  font-size: 30px;
}

.form-container button:hover {
  color:#ffaf01;
  border-color: #ffaf01;
}

</style>
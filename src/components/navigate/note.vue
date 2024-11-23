<template>
  <navigate />
  <rainEffect />
  <div class="noteBody">
    <div v-for="note in notes" :key="note.id" class="note">
      <div class="noteContainer">
        <h1 class="titleName">{{ note.title }}</h1>
        <h1 class="noteDate">{{ note.date }}</h1>
        <div class="noteTool">
          <button @click="editNote(note.id)">
            <i class='bx bx-edit'></i>
          </button>
          <button @click="deleteNote(note.id)">
            <i class='bx bx-trash'></i>
          </button>
        </div>
      </div>
      <p class="noteContent">{{ note.content }}</p>
    </div>

    <button class="createNote" @click="showForm = !showForm">
      <i class='bx bxs-plus-square'></i>
    </button>

    <transition name="fade">
      <div v-if="showForm" class="form-overlay">
        <div class="form-container">
          <input v-model="noteLabel" type="text" class="textLabel" maxlength="50" placeholder="輸入你的標題...">
          <textarea v-model="noteContent" placeholder="輸入你的留言..."></textarea>
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
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import navigate from './navigate.vue';
import rainEffect from '../rainEffect.vue';
import 'boxicons/css/boxicons.min.css';

const notes = ref([]);
const showForm = ref(false);
const noteLabel = ref('');
const noteContent = ref('');

let noteId = 1;

const addNote = () => {
  if (noteContent.value.trim()) {
    if (editingNote.value) {
      const note = notes.value.find((note) => note.id === editingNote.value.id);
      if (note) {
        note.title = noteLabel.value;
        note.content = noteContent.value;
        note.date = new Date().toLocaleDateString();
      }
      editingNote.value = null;
    } else {
      notes.value.push({ 
        id: noteId++, 
        title: noteLabel.value, 
        content: noteContent.value, 
        date: new Date().toLocaleDateString() 
      });
    }
    noteLabel.value = '';
    noteContent.value = '';
    showForm.value = false;
  }
}

const editingNote = ref(null);

const editNote = (id) => {
  const note = notes.value.find((note) => note.id === id);
  if (note) {
    editingNote.value = { ...note };
    showForm.value = true;
    noteLabel.value = editingNote.value.title;
    noteContent.value = editingNote.value.content;
  }
}

const deleteNote = (id) => {
  notes.value = notes.value.filter(note => note.id !== id);
}

</script>

<style scoped>
.noteBody {
  padding-top: 120px;
  margin: 0 20px;
}

.note {
  width: 100%;
  padding: 10px;
  background-color: rgba(60, 60, 60, 0.8);
  margin-bottom: 20px;
  border: 2px solid rgba(200, 200, 200, 0.8);
  border-radius: 5px;
}

.noteContainer {
  display: flex;
  justify-content: space-between;
  position:relative;
  margin-bottom: 10px;
}

.noteTool {
  display: flex;
  gap: 10px;
}

.noteTool button {
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202020;
  border: none;
  border-radius: 5px;
  transition: background-color 0.4s ease;
}

.noteTool button:hover {
  background-color: #606060;
}

.noteTool button i {
  font-size: 20px;
}

.note h1 {
  font-size: 20px;
  background-color: #202020;
  border-radius: 5px;
  padding: 0 10px;
}

.note p {
  background-color: #303030;
  border-radius: 5px;
  padding: 0 10px;
}

.createNote {
  width: 60px;
  height: 60px;
  position: fixed;
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

.createNote i {
  font-size: 40px;
  color: #000;
  transition: all 0.4s ease;
}

.createNote:hover {
  background-color: #ffaf01;
}

.createNote i:hover {
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
  background: rgba(10, 10, 10, 0.5);
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 80%;
}

.form-container input {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  color: #fff;
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
  color: #fff;
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

.form-container .form-button {
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
  color: #ffaf01;
  border-color: #ffaf01;
}

.titleName 
.noteDate {
  flex: 0 0 auto;
}

.noteDate {
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
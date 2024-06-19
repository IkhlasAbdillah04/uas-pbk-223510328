<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <ul class="nav-list">
          <li>
            <q-btn flat dense icon="cloud" to="/" label="Weather" />
          </li>
          <li class="dropdown">
            <q-btn 
              flat 
              dense 
              class="dropbtn" 
              @click="toggleDropdown" 
              :class="{ 'active': dropdownOpen }" 
              aria-haspopup="true" 
              aria-expanded="false"
              label="Task ▼" 
            />
            <q-menu 
              v-if="dropdownOpen" 
              transition-show="fade" 
              transition-hide="fade"
              class="q-menu-custom"
              :offset="[0, 15]"
            >
              <q-list class="task-list">
                <q-item clickable v-ripple tag="a" :href="task1Link" target="_blank">
                  <q-item-section>Task 1</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task2Link" target="_blank">
                  <q-item-section>Task 2</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task3Link" target="_blank">
                  <q-item-section>Task 3</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task4Link" target="_blank">
                  <q-item-section>Task 4</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task5Link" target="_blank">
                  <q-item-section>Task 5</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task6Link" target="_blank">
                  <q-item-section>Task 6</q-item-section>
                </q-item>
                <q-item clickable v-ripple tag="a" :href="task7Link" target="_blank">
                  <q-item-section>Task 7</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const dropdownOpen = ref(false);
    const task1Link = "https://tugas1-pbk-223510328.vercel.app/";
    const task2Link = "https://tugas2-pbk-223510328.vercel.app/";
    const task3Link = "https://tugas3-pbk-223510328.vercel.app/";
    const task4Link = "https://tugas4-pbk-223510328.vercel.app/";
    const task5Link = "https://tugas5-pbk-223510328.vercel.app/";
    const task6Link = "https://tugas6-pbk-223510328.vercel.app/";
    const task7Link = "https://tugas7-pbk-223510328.vercel.app/";

    function toggleDropdown() {
      dropdownOpen.value = !dropdownOpen.value;
    }

    return {
      dropdownOpen,
      toggleDropdown,
      task1Link,
      task2Link,
      task3Link,
      task4Link,
      task5Link,
      task6Link,
      task7Link,
    };
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #85C1E9, #3498DB);
  height: 100vh; 
  animation: gradientAnimation 5s ease-in-out infinite;
}

@keyframes gradientAnimation {
  0% {
    background: linear-gradient(to bottom, #85C1E9, #3498DB);
  }
  50% {
    background: linear-gradient(to bottom, #3498DB, #85C1E9);
  }
  100% {
    background: linear-gradient(to bottom, #85C1E9, #3498DB);
  }
}

header {
  background: linear-gradient(to right, #5DADE2, #3498DB);
  padding: 20px;
  transition: background 0.5s ease;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

li {
  margin: 0 20px;
}

.q-btn {
  font-weight: bold;
  color: white;
  transition: background-color 0.3s ease;
  border-radius: 15px;
  padding: 10px 15px; 
}

.q-btn.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.q-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.dropdown {
  display: inline-block;
}

.dropbtn {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 15px;
  transition: background-color 0.3s ease;
}

.q-menu-custom {
  position: absolute;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  margin-top: 15px;
}

.q-list {
  padding: 0;
}

.q-item {
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s ease;
  border-radius: 15px;
}

.q-item:hover {
  background-color: #f1f1f1;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.q-menu[transition-show="fade"] {
  animation: fade 0.3s forwards;
}

.q-menu[transition-hide="fade"] {
  animation: fade 0.3s reverse forwards;
}
</style>

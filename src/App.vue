<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
// import { MaButton } from '@misteraladin/frontend-ui';
import { ref } from 'vue'

const isLoading = ref(false)

const handleSearchFlight = () => {
  console.log("Flight searching ....");
  isLoading.value = true;
}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <!-- <MaButton product="explore" /> -->

    <MaButton
      :is-loading="isLoading"
      @click="handleSearchFlight()"
    >
      Search Flight International
    </MaButton>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

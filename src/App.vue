<script setup>
import SiteFooter from './components/SiteFooter.vue'
import ColorGenerator from './components/ColorGenerator.vue'
</script>

<template>
  <div class="main-container">
    <ColorGenerator />
    <SiteFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
  transition: background-color 0.5s ease;
}

.main-container {
  font-family: monospace;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

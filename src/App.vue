<script setup>
import ColorGenerator from './components/ColorGenerator.vue'
</script>

<template>
  <ColorGenerator />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: var(--primary-color);
  transition: background-color 0.5s ease;
}
</style>

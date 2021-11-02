<script setup>
import { ref, onMounted } from 'vue'
import { generateHsl } from '../helpers/color'
const color = ref('')

const setHsl = () => {
  color.value = generateHsl()
  document.body.style.setProperty(`--primary-color`, color.value)
}

onMounted(() => {
  setHsl()
})
</script>

<template>
  <div class="color-generator" @click="setHsl">
    <div v-if="color" class="color">{{ color }}</div>
    <div class="instructions">(Click to generate)</div>
  </div>
</template>

<style>
.color-generator {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: monospace;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
.color {
  font-size: 4rem;
  margin-bottom: 2rem;
}

.instructions {
  font-size: 2rem;
}
</style>
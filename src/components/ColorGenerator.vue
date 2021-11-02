<script setup>

import { ref, onMounted } from 'vue'
import { useClipboard } from '@vueuse/core'
import { generateHsl } from '../helpers/color'
const color = ref('')

const { copy, copied, isSupported } = useClipboard({ color })

const setHsl = () => {
  color.value = generateHsl()
  document.body.style.setProperty(`--primary-color`, color.value)
  if (isSupported) copy(color.value)
}

onMounted(() => {
  setHsl()
})
</script>

<template>
  <div class="color-generator" @click="setHsl">
    <div v-if="color" class="color">{{ color }}</div>
    <div v-if="copied" class="instructions clipboard">(Copied to clipboard)</div>
    <div v-else class="instructions generate">(Click to generate)</div>
  </div>
</template>

<style>
.color-generator {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
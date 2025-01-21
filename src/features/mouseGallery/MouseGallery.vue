<template>
  <div class="mouse-gallery">
    <MouseManager v-model="mouse" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MouseManager from './MouseManager.vue'
import type { MousePosition } from './useMouseEvent'

const mouse = ref<MousePosition>({ x: 0, y: 0 })
</script>

<style lang="scss" scoped>
.mouse-gallery {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

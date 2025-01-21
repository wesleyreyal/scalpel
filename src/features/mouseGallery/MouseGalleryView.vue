<template>
  <DefaultPage class="mouse-view">
    <MouseGallery />
  </DefaultPage>
</template>

<script setup lang="ts">
import { DefaultPage } from '@/layout'

import MouseGallery from './MouseGallery.vue'
</script>

<style lang="scss" scoped>
.mouse-view {
  position: relative;
}
</style>

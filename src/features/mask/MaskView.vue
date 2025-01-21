<template>
  <DefaultPage class="mask-view">
    <MaskPolygon />
  </DefaultPage>
</template>

<script setup lang="ts">
import { DefaultPage } from '@/layout'

import MaskPolygon from './MaskPolygon.vue'
</script>

<style lang="scss" scoped>
.mask-view {
  background-color: black;
}
</style>

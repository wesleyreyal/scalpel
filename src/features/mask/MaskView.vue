<template>
  <DefaultPage class="mask-view">
    <MaskPolygon :animation-delay="2000" />
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

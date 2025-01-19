<template>
  <DefaultPage>
    <div class="centered">
      <SplitText text="Abracadabra !" />
    </div>
  </DefaultPage>
</template>

<script setup lang="ts">
import DefaultPage from '@/layout/DefaultPage.vue'

import SplitText from './SplitText.vue'
</script>

<style lang="scss" scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

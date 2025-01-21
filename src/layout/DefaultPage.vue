<template>
  <main class="default-page">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.default-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  // padding: 5rem;
}
</style>

<template>
  <DefaultPage>
    <UILink
      v-for="link in Routes"
      :key="link"
      :to="{ name: link }"
    >
      {{ link }}
    </UILink>
  </DefaultPage>
</template>

<script setup lang="ts">
import { DefaultPage } from '@/layout'
import { Routes } from '@/router'
import { UILink } from '@/ui'
</script>

<style lang="scss" scoped></style>

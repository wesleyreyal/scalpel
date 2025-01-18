<template>
  <Icon :icon="icon" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

import { mapIcon, type AllowedIcons } from './mapIcon'

const props = defineProps<{
  name: AllowedIcons
}>()

const icon = computed(() => {
  return mapIcon(props.name)
})
</script>

<style lang="scss" scoped></style>

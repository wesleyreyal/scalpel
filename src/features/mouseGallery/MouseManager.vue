<template>
  <div
    ref="mouse-manager"
    class="mouse-manager"
  />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, watch } from 'vue'
import { useMouseEvent, type MousePosition } from './useMouseEvent'

const mouseGallery = useTemplateRef<HTMLDivElement>('mouse-manager')
const mouse = defineModel<MousePosition>({ required: true })

const mouseEvent = useMouseEvent(mouse)
onMounted(() => {
  if (!mouseGallery.value) throw new Error('No mouse gallery found')

  mouseGallery.value.addEventListener('mousemove', mouseEvent.updatePosition)
})

onUnmounted(() => {
  if (!mouseGallery.value) throw new Error('No mouse gallery found')

  mouseGallery.value.removeEventListener('mousemove', mouseEvent.updatePosition)
})
</script>

<style lang="scss" scoped>
.mouse-manager {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

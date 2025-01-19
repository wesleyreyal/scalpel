<template>
  <div
    ref="splitText"
    class="split-text"
  >
    <div
      v-for="(character, index) in text.split('')"
      :key="index"
      ref="characters"
      class="character"
      :style="{ '--character-index': index }"
    >
      {{ character }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

defineProps<{
  text: string
}>()

const characters = ref<HTMLElement[]>([])
const splitText = ref<HTMLElement>(null!)

function callback() {
  characters.value.forEach((element) => {
    element.classList.add('character__to-start')
  })
}

const observer = new IntersectionObserver(callback, {})

onMounted(() => {
  if (!splitText.value) return
  observer.observe(splitText.value)
})

onUnmounted(() => {
  if (!splitText.value) return
  observer.unobserve(splitText.value)
})
</script>

<style lang="scss" scoped>
.split-text {
  display: flex;
  font-size: 4rem;
  font-weight: 900;
  overflow: clip;
  user-select: none;

  .character {
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: calc(var(--character-index) * 17ms);
    transform: translate(0%, 170%) scaleY(1);

    &__to-start {
      transform: translate(0%, 0%) scaleY(1);
    }
  }
}
</style>

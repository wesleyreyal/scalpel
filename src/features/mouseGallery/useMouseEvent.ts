import { ref } from 'vue'

export type MousePosition = { x: number; y: number }

export function useMouseEvent() {
  const mouse = ref<MousePosition>({ x: 0, y: 0 })

  const updatePosition = (event: MouseEvent) => {
    mouse.value = { x: event.clientX, y: event.clientY }
    console.log(mouse.value)
  }

  return { mouse, updatePosition }
}

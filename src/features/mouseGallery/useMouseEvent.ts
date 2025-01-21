import { ref, type ModelRef } from 'vue'

export type MousePosition = { x: number; y: number }

export function useMouseEvent(mouse: ModelRef<MousePosition>) {
  const updatePosition = (event: MouseEvent) => {
    mouse.value = { x: event.clientX, y: event.clientY }
  }

  return { mouse, updatePosition }
}

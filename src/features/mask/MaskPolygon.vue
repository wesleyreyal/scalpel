<template>
  <img
    class="mask-polygon"
    :style="style"
    :src="genesis"
  />
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash'
import { computed, onMounted, ref } from 'vue'

import genesis from '@/assets/video/genesis.webp'
import type { NonEmptyArray } from '@/utils'

type Point = { x: number; y: number }

class Polygon {
  point1: Point
  point2: Point
  point3: Point
  point4: Point

  constructor(point1: Point, point2: Point, point3: Point, point4: Point) {
    this.point1 = point1
    this.point2 = point2
    this.point3 = point3
    this.point4 = point4
  }
}

const initial = ref<Polygon>(
  new Polygon(
    { x: 50, y: 50 },
    { x: 50, y: 50 },
    { x: 50, y: 50 },
    { x: 50, y: 50 },
  ),
)
const polygon = ref<Polygon>(
  new Polygon(
    { x: 50, y: 50 },
    { x: 50, y: 50 },
    { x: 50, y: 50 },
    { x: 50, y: 50 },
  ),
)
const time = ref<number>(0)

function goToPoint(coef: number, aPoint: Point, iPoint: Point, fPoint: Point) {
  if (aPoint.x > fPoint.x) {
    aPoint.x -= Math.abs(fPoint.x - iPoint.x) / coef
  } else {
    aPoint.x += Math.abs(fPoint.x - iPoint.x) / coef
  }

  if (aPoint.y > fPoint.y) {
    aPoint.y -= Math.abs(fPoint.y - iPoint.y) / coef
  } else {
    aPoint.y += Math.abs(fPoint.y - iPoint.y) / coef
  }
}

function goToPolygon(
  ms: number,
  aPoly: Polygon,
  iPoly: Polygon,
  fPoly: Polygon,
) {
  const coef = ms / 10

  goToPoint(coef, aPoly.point1, iPoly.point1, fPoly.point1)
  goToPoint(coef, aPoly.point2, iPoly.point2, fPoly.point2)
  goToPoint(coef, aPoly.point3, iPoly.point3, fPoly.point3)
  goToPoint(coef, aPoly.point4, iPoly.point4, fPoly.point4)
}

function computePoints(final: Polygon, ms: number) {
  goToPolygon(ms, polygon.value, initial.value, final)

  time.value += 10
}

const style = computed(() => {
  return {
    '--point1-x': polygon.value.point1.x + '%',
    '--point1-y': polygon.value.point1.y + '%',
    '--point2-x': polygon.value.point2.x + '%',
    '--point2-y': polygon.value.point2.y + '%',
    '--point3-x': polygon.value.point3.x + '%',
    '--point3-y': polygon.value.point3.y + '%',
    '--point4-x': polygon.value.point4.x + '%',
    '--point4-y': polygon.value.point4.y + '%',
  }
})

type Param = { poly: Polygon; ms: number }

function test(p: NonEmptyArray<Param>) {
  const { poly, ms } = p[0]
  initial.value = cloneDeep(polygon.value)
  const interval = setInterval(() => {
    computePoints(poly, ms)
  }, 10)

  setTimeout(() => {
    clearInterval(interval)

    if (p.length === 1) return
    p.shift()
    test(p)
  }, ms)
}

onMounted(() => {
  setTimeout(() => {
    test([
      {
        poly: new Polygon(
          { x: 40, y: 40 },
          { x: 40, y: 70 },
          { x: 60, y: 70 },
          { x: 60, y: 40 },
        ),
        ms: 200,
      },
      {
        poly: new Polygon(
          { x: 10, y: 10 },
          { x: 0, y: 100 },
          { x: 90, y: 90 },
          { x: 100, y: 0 },
        ),
        ms: 500,
      },
      {
        poly: new Polygon(
          { x: 0, y: 0 },
          { x: 0, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 0 },
        ),
        ms: 200,
      },
    ])
  }, 2000)
})
</script>

<style lang="scss" scoped>
.mask-polygon {
  width: 100%;
  height: 100%;
  transition: clip-path ease;

  clip-path: polygon(
    var(--point1-x) var(--point1-y),
    var(--point2-x) var(--point2-y),
    var(--point3-x) var(--point3-y),
    var(--point4-x) var(--point4-y)
  );

  object-fit: cover;
}
</style>

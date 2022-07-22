<template>
  <div class="relative" :style="style">
    <span class="absolute border border-blue-600 left-0 border-r-0 border-b-0 w-10 h-10 z-10"></span>
    <span class="absolute border border-blue-600 border-t-0 border-r-0 bottom-0 w-10 h-10 z-10"></span>
    <span class="absolute border border-blue-600 border-l-0 border-b-0  right-0 w-10 h-10 z-10"></span>
    <span class="absolute border border-blue-600 border-t-0 border-l-0 right-0 bottom-0 w-10 h-10 z-10"></span>
    <div ref="container" class="h-full w-full"></div>
  </div>
</template>

<script setup lang="ts">
import { EChartsType } from 'echarts';
import { computed, defineProps, onMounted, ref, watch, watchEffect } from 'vue';
import { chratsInit } from './index';
const props = defineProps({
  width: {
    type: String
  },
  height: String,
  options: {
    type: Object,
    default: () => ({})
  },
  isGeoMap: Boolean
})
const container = ref()
const handleCharts = () => {
  if (chart) {
    chart.dispose()
  }
  chart = chratsInit(container.value, props.options, props.isGeoMap)
}

watch(() => props.options, handleCharts, { deep: true })
const style = computed(() => {
  const { width, height } = props
  return { width, height }
})
let chart: EChartsType | null = null
onMounted(() => {
  chart = chratsInit(container.value, props.options, props.isGeoMap)
  window.onresize = handleCharts
})

</script>

<style scoped>
</style>
<template>
  <div class="h-full w-full flex  bg-black p-4">
    <div class="left flex-none w-1/4 relative flex flex-col   justify-between">
      <EView width="100%" height="350px" :options="pieOptions">
      </EView>
      <EView width="100%" height="350px" :options="gradient">
      </EView>
    </div>
    <div class="content m-2 mt-0 mb-0 flex-grow bg-pink">
      <EView width="100%" height="100%" :options="geoOptions" :is-geo-map="true">
      </EView>
    </div>
    <div class="right flex-none w-1/4 relative flex flex-col justify-between">
      <EView width="100%" height="350px" :options="gaugeOptions">
      </EView>
      <EView width="100%" height="350px" :options="barOptions">
      </EView>
    </div>
  </div>
</template>

<script setup lang="ts">
import {gradient,pieOptions,geoOptions,barOptions,gaugeOptions} from './index';
import EView from './echartsContainer.vue';
</script>

<style scoped>

</style>
<template>
  <div id="app">
    <ConfigProvider :locale="zhCN">
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <suspense @resolve="resolve">
            <template #default>
              <div class="h-full">
                <component :is="Component" />
              </div>
            </template>
          </suspense>
        </template>
      </router-view>
    </ConfigProvider>
  </div>
</template>
<script setup lang="ts">
import {ref } from 'vue';
import {ConfigProvider} from 'ant-design-vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  dayjs.locale('zh-cn');
const loading=ref(true)

const resolve = () => {
  loading.value=false
}

</script>

<style scoped>
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100vh;
}
</style>

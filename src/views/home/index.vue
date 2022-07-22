<template>
  <div class="h-full">
    <div class="h-16 p-0">
      <NavBar />
    </div>
    <Layout class="main flex">
      <LayoutSider class="h-full" :width="256">
        <MenuList
          :current-page="currentPage" :open-pages="openPages" @update:current-page="(val) => currentPage = val"
          @update:open-pages="(val) => openPages = val"
        />
      </LayoutSider>
      <LayoutContent class="h-full flex-1">
        <HistoryTabs
          :current-page="currentPage" :open-pages="openPages" @update:current-page="(val) => currentPage = val"
          @update:open-pages="(val) => openPages = val"
        >
          <router-view />
        </HistoryTabs>
      </LayoutContent>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { Layout, LayoutSider, LayoutContent } from 'ant-design-vue';
import NavBar from './components/navView.vue';
import MenuList from './components/menulist.vue';
import HistoryTabs from './components/historyTabs';
import { ref, watch } from 'vue';

const openPages = ref(JSON.parse(localStorage.getItem('pageList')!) || [])
const currentPage = ref(localStorage.getItem('currentPage') || '')
watch(() => [currentPage.value, openPages.value], () => {
  // localStorage.setItem("pageList", JSON.stringify(openPages.value))
  // localStorage.setItem("currentPage", currentPage.value)
})
</script>

<style scoped>
.main {
  height: calc(100% - 4rem);
}
</style>
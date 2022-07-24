<template>
  <div class="h-full">
    <Menu
      v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" class="h-full" style="width: 256px"
      mode="inline"
    >
      <template v-for="(route) in routes" :key="route.name">
        <SubMenu v-if="route.children" :key="route.name">
          <template #title>
            <span>{{ route.name }}</span>
          </template>
          <MenuItem v-for="(child) in route.children" :key="child.name" @click="handleRoute(child.name!, child.path)">
            <span>{{ child.name }}</span>
          </MenuItem>
        </SubMenu>
        <MenuItem v-else :key="route.path" @click="handleRoute(route.name!, route.path)">
          <span>{{ route.name }}</span>
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { Menu, SubMenu, MenuItem } from 'ant-design-vue';
import { routes } from '@router/index'
import { useRouter } from 'vue-router';
import { ref, defineProps, defineEmits, PropType, toRefs, computed, watch, watchEffect } from 'vue';
import { TabsItem } from '@type/index';
import {RouteRecordName} from 'vue-router'
const router = useRouter()
const emit = defineEmits(['update:openPages','update:currentPage'])
const props = defineProps({
  openPages: {
    type: Array as PropType<TabsItem[]>,
    default: () => []
  },
  currentPage:{
    type:String,
    default:''
  }
})
const { openPages } = toRefs(props)
const pageList=ref<TabsItem[]>(openPages.value)
watchEffect(()=>{
  pageList.value=openPages.value
})
const openKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])

const handleRoute = (name: RouteRecordName, path: string): void => {
  const isExist = pageList.value.find(item => item.path === path)
  if (!isExist) {
    pageList.value.push({ name, path })
    router.push(path)
    emit('update:openPages', pageList.value)
  }else{
    router.push(path)
    emit('update:currentPage',path)
  }
 localStorage.setItem("pageList", JSON.stringify(pageList.value))
  localStorage.setItem("currentPage", path)
}
</script>

<style scoped>
.el-aside:first-child {
  height: 100%;
}
</style>

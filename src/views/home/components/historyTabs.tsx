// import { ElTabPane, ElTabs,ElButton } from 'element-plus';
import { ref, toRefs, watch } from 'vue';
import { defineComponent } from 'vue';
import { Tabs, TabPane } from 'ant-design-vue';
import { RouteRecordName, RouterView } from 'vue-router';
import { PropType,KeepAlive } from 'vue';
import {useRouter} from 'vue-router';
import './history.scss';
export interface TabsItem {
  name: RouteRecordName
  path: string
}
// import { TabsItem } from '';
export default defineComponent({
  props: {
    openPages: {
      type: Array as PropType<TabsItem[]>,
      default: () => ([])
    },
    currentPage: {
      type: String,
      default: ''
    }
  },
  emits: ['update:openPages', 'update:currentPage'],
  setup(props, { emit }) {
    const router=useRouter()
    const activeKey = ref(props.currentPage)
    watch(() => props.currentPage, (val) => {
      activeKey.value = val
    })
    const { openPages } = toRefs(props)
    const pagesList = ref(openPages.value)
    watch(() => openPages.value, (val) => {
      activeKey.value = val.length ? val[val.length - 1].path : props.currentPage
      pagesList.value = val
    }, { deep: true })
    const handleChange =(val)=>{
     activeKey.value=val
     router.push(val)
    }
    const handleTabsEdit = (targetKey, action) => {
      if (action === 'remove') {
        pagesList.value = openPages.value.filter(item => item.path !== targetKey)
        emit('update:openPages', pagesList.value)
        localStorage.setItem('pageList',JSON.stringify(pagesList.value))
      }
    }
    return () => {
      return (
        <div class="p-4 h-full">
          <Tabs type="editable-card" hide-add size="small" onChange={handleChange} onEdit={handleTabsEdit} tabBarStyle={{ backgroundColor: 'white' }} v-model:activeKey={activeKey.value}>
            {openPages.value.map(tab => {
              return <TabPane key={tab.path} tab={tab.name} class='h-full w-full'>
                 <RouterView>
                 </RouterView>
              </TabPane>
            })}
          </Tabs>
        </div>
      )
    }
  }
})

















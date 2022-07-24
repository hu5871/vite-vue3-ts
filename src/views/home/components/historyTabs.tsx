import { createVNode, ref, toRefs, Transition, watch } from 'vue';
import { defineComponent } from 'vue';
import TabItem from './tabItem';
import { RouterView } from 'vue-router';
import { PropType, KeepAlive } from 'vue';
import { useRouter } from 'vue-router';
import './history.scss';
import { IRouterViewSlot, TabsItem } from '@type/index';

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
  setup(props, {  emit }) {
    const router = useRouter()
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
    const handleClose = (path: string) => {
      pagesList.value = openPages.value.filter(item => item.path !== path)
      emit('update:openPages', pagesList.value)
      localStorage.setItem('pageList', JSON.stringify(pagesList.value))
    }

    const handleSelect = (path: string) => {
      activeKey.value = path
      emit('update:currentPage', path)
      localStorage.setItem('currentPage', path)
      router.push(path)
    }
    return () => {
      return (
        <div class="p-4 h-full">
          <div class="h-10 pl-2 rounded shadow bg-white flex items-center justify-start">
            {
              openPages.value.map(item => {
                return <TabItem onCloseTag={handleClose} onSelectTag={handleSelect} isCurrent={item.path === activeKey.value} item={item}></TabItem>
              })
            }
          </div>
          <div class="h-auto mt-4 rounded shadow">
            <RouterView v-slots={{
              default: ({ Component }: IRouterViewSlot) => {
                return (
                  <>
                    <Transition name="fade" mode="out-in">
                      <KeepAlive>
                        {createVNode(Component)}
                      </KeepAlive>
                    </Transition>
                  </>

                )
              }
            }}>
            </RouterView>
          </div>
        </div>
      )
    }
  }
})

















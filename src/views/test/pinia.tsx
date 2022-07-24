import {defineComponent, onActivated, onDeactivated, onUnmounted} from 'vue';
import {mainStore} from '@store/index';

export default defineComponent({
  setup(props, ctx) {
    const store=mainStore()
  const timer=  setInterval(()=>{
      store.counter++
    },2000)
    store.$subscribe((mutation, state)=>{ //监听store的变化
      console.log('state', mutation, state)
    })
    onDeactivated(()=>{
      clearInterval(timer)
    })
    onUnmounted(()=>{
    console.log('卸载')
   
    })
  return ()=>{
    return (
      <div>
        <div> {store.counter}</div>
        <div> {store.doubleCount}</div>
      </div>
    )
  }
  },
})
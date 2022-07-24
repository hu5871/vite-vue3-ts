import {defineComponent, PropType} from 'vue';
import {TabsItem} from '@type/index';
import {CloseOutlined} from '@ant-design/icons-vue';
export default defineComponent({
  props:{
    item:{
      type:Object as PropType<TabsItem>,
      required:true
    },
    isCurrent:{
      type:Boolean,
      default:false
    }
  },
  emits:['closeTag','selectTag'],
  setup(props,{emit}){
    const emitSelect=(e)=>{
      e.stopPropagation()
      emit('selectTag',props.item.path)
    }
   const emitClose=(e)=>{
    e.stopPropagation()
    emit('closeTag',props.item.path)
   }
    return ()=>(
      <div onClick={emitSelect} class={["min-w-max hover:bg-blue-600 hover:text-white hover:bg-opacity-75 hover:cursor-default leading-loose relative  flex items-center justify-between pl-2 h-3/4  pr-2 mr-2 border",props.isCurrent ? ['bg-blue-500','text-white'] :'']}>
        <span class="mr-3 ">{props.item.name}</span>
        <CloseOutlined onClick={emitClose} class="hover:text-red-500 hover:cursor-pointer"  style="vertical-align:unset !important;"  />
      </div>
    )
  }
})
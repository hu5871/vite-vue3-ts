import { defineComponent, PropType, toRefs,reactive, watchEffect, getCurrentInstance, ref } from 'vue';
import { Table, Input, Form, Image,FormItem, Button,Select,RangePicker, Tag, TableColumn } from 'ant-design-vue';
import './index.scss'
import deepcopy from 'deepcopy';
import { onMounted } from 'vue';
import dayjs from 'dayjs';

interface FilterItem {
  dataIndex: string,
  type: string
  label:string
  options?:Options[]
}
interface Options {
  label: string
  value:string
}
interface RightAction {
  type:string
  text:string
  key:string
}
export default defineComponent({
  props: {
    columns: Array as PropType<any>,
    data: Array,
    filter: Array as PropType<FilterItem[]>,
    rightAction:Array as PropType<RightAction[]>
  },
  emits:['submit','action'],
  setup(props,{emit,slots}) {
    const {columns,filter}=toRefs(props)
    const filterState = reactive({})
    const filterMap = {
      input: '',
      select:'',
      date: [],
    }
    
    watchEffect(() => {
      if (filter.value) {
        filter.value.forEach(filterItem => {
          filterState[filterItem.dataIndex] = deepcopy(filterMap[filterItem.type]|| '')
        })
      }
    })

    function handleFromSubmit(){
      emit('submit',filterState)
    }
    return () => {
      return (
        <div  class="overscroll-y-auto">
          <div class="shadow h-auto bg-white mb-5 rounded p-4" >
            <Form model={filterState}  layout='inline'>
              {
                filter.value ? filter.value.map(item => {
                  return (
                    <div class="mb-5">
                     <FormItem label={item.label}>
                        <CreateStateComponent key={item.type} options={item?.options} dataIndex={item.dataIndex} state={filterState}></CreateStateComponent>
                     </FormItem>
                    </div>
                  )
                })
                  : null
              }
              <Button type="primary" onClick={handleFromSubmit}>筛选</Button>
            </Form>
          </div>
          <div class="bg-white p-4 mt-4">
            <Table columns={columns.value}  sticky scroll={{ y: 400 }} data-source={props.data} v-slots={{
              headerCell: ({ column }) => {
                return <span>{column.title}</span>
              },
              bodyCell: ({column, record}) => {
                return <CreateTableKeyComponent isOpera={column.isOpera} v-slots={{action:slots.action}} dataIndex={column.dataIndex} render={column.render} type={column.type} data={record} ></CreateTableKeyComponent>
              }
            }}>
            </Table>
          </div>
        </div>
      )
    }
  }
})
function CreateStateComponent(props) {
  // console.log('props', props)
  const { key } = getCurrentInstance()!.vnode
  if (key === "input") {
    return <Input v-model:value={props.state[props.dataIndex]} placeholder="请输入" />
  }
  if(key === 'select'){
    return <Select style="width:120px" v-model:value={props.state[props.dataIndex]} options={props.options} placeholder="请输入" />
  }
  if(key ==='date'){
    return <RangePicker style="width:220px" v-model:value={props.state[props.dataIndex]} placeholder={['开始时间','结束时间']} />
  }
  return <div>filter</div>
}

function CreateTableKeyComponent(props,{slots}) {
  if(props.render){
    return props.render()
  }
  if(props.isOpera){
   return slots.action()
  }
  if(props.type === 'text'){
   return <span>{props.data[props.dataIndex]}</span>
  }
  if(props.type ==='tags'){
    const colors=['pink','red','orange','green','cyan','blue','purple']
    return (
      <>
      {
        props.data[props.dataIndex].map((tag,index)=>{
          return <Tag color={index>colors.length ? '' : colors[index]} >{tag}</Tag>
        })
      }
      </>
    )
  }
  if(props.type ==='img'){
    return (
      <Image
      width={150}
      height={150}
      src={props.data[props.dataIndex]}
    />
    )
  }
  if(props.type === 'date'){
    return <span>{props.data[props.dataIndex]}</span>
  }
  return <div>body</div>
}
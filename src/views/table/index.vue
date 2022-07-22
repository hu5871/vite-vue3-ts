<template>
  <div>
    <Table
      :columns="columns" :filter="filter" 
      :data="data"
    >
      <template #action>
        <div>
          <Button type="primary">编辑</Button>
          <Button danger>删除</Button>
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup lang="tsx">
import Table from '@cmp/table/index';
import {Button} from 'ant-design-vue';

const filter = [
  {
    dataIndex: 'name',
    type: 'input',
    label: "名称"
  },
  {
    dataIndex: 'tags',
    type: 'select',
    label: "标签",
    options: [
      {
        value: 'cool',
        label: 'cool'
      },
      {
        value: 'nice',
        label: 'nice'
      },
      {
        value: 'developer',
        label: 'developer'
      },
      {
        value: 'teacher',
        label: 'teacher'
      }
    ]
  },
  {
    dataIndex: 'createdAt',
    type: 'date',
    label: "时间"
  },

]

const columns= [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    type: 'text'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    type: 'text'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    type: 'tags'
  },
  {
    title: '图片',
    key: 'url',
    dataIndex: 'url',
    type: 'img'
  },
  {
    title: 'CreatedAt',
    key: 'createdAt',
    dataIndex: 'createdAt',
    type: 'date'
  },
  {
    title:"操作",
    isOpera:true
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tags: ['nice', 'developer'],
    createdAt: '2014-12-24 23:12:00',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    tags: ['loser'],
    createdAt: '2014-12-24 23:12:00',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tags: ['cool', 'teacher'],
    createdAt: '2014-12-24 23:12:00',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
  },
];

</script>

<style scoped>
</style>
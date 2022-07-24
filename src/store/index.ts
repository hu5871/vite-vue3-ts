
import {defineStore} from 'pinia';

export const mainStore= defineStore('mainStore',{
  state() {
    return {
      counter: 0
    }
  },
  getters: { // 相当于组件中的 计算属性
    doubleCount: (state) => state.counter * 2,
  },
  actions:{ // 相当于组件中的 methods 支持异步

  }
})
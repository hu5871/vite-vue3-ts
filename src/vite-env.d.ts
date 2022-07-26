/// <reference types="vite/client" />
declare module '@types'
declare module '@'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string,any>,Record<string,any>, any>
  export default component
}

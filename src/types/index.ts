import { VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouteRecordName } from "vue-router"

export interface IRouterViewSlot {    //自定义
	Component: VNode;
    route: RouteLocationNormalizedLoaded;
}

export interface TabsItem {
  name: RouteRecordName
  path: string
}


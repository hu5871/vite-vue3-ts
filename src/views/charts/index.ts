
import * as echarts from 'echarts';
export type EChartsOption = echarts.EChartsOption;
export { gradient } from './gradient';
export { pieOptions } from './pieChart';
export {geoOptions} from './geoChart';
export {barOptions} from './barChart'
export {gaugeOptions} from './gaugeChart'
import geoMap from './geoMap'
export function chratsInit(Dom: HTMLDivElement, options: EChartsOption,isGeoMap?:boolean) {

 const chart= echarts.init(Dom, 'dark')
 if(isGeoMap){
  echarts.registerMap("GD",{geoJSON:geoMap}as any);
 }
 chart.setOption(options,true)
 return chart
}
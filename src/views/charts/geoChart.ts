import { EChartsOption } from './index';

export const geoOptions: EChartsOption = {
  backgroundColor: 'transparent',
  title: {
    text: '广东省地理地图',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  geo: {
    type: "map",
    aspectScale: 1, // 地图的长宽比
    map: "GD",
    zoom: 1.5,//视角的缩放比例。
    roam: true,// 地图操作 开启缩放或者平移，可以设置成 'scale' 或者 'move'。
    label: {
      show: true,
      // 默认地图文字字号和字体颜色
      fontSize: 10,
      color: "#ffffff",
      distance:10
    },
    itemStyle: {
      areaColor: "#207fd8", //地图本身的颜色
      borderColor: "#9fd3e3", //省份边框颜色
      borderWidth: 1, // 省份边框宽度
      color:'#ffffff',
      opacity: 1, //图形透明度
    },
    emphasis: {
      itemStyle:{
        areaColor:'#fff'
      }
    },
  },
  series: [
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      symbolSize: 12,
      label: {
        show: false,
      },
      itemStyle: {
        shadowBlur: 10,
        color: "#24a6fe",
        borderColor: "#fff",
        borderWidth: 1,
      },
    },
  ],
};
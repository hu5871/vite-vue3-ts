import {EChartsOption} from './index';
export const gaugeOptions:EChartsOption = {
  series: [
    {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        distance: 40,
        fontSize: 18
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} km/h',
        fontSize:17,
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
};

// 柱状图组件

import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({ title, yData }) => {
  const chartRef = useRef(null);
  // 渲染完毕后执行，保证DOM节点可用
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: yData,
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [title, yData])
  return <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart;
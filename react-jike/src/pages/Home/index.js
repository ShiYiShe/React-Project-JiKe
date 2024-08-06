import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const Home = () => {
  const chartRef = useRef(null);
  // 渲染完毕后执行，保证DOM节点可用
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [1, 2, 3],
          type: 'bar'
        }
      ]
    };
    option && myChart.setOption(option);
  }, [])
  // 保证节点有宽高
  return <div><div ref={chartRef} style={{ width: '500px', height: '400px' }}></div></div>
}

export default Home;
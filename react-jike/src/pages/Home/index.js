import BarChart from "./components/BarChart";

const Home = () => {
  // 保证节点有宽高
  return (
    <div>
      <BarChart title={'三大框架满意度'} yData={[1, 2, 3]} />
      <BarChart title={'三大框架使用度'} yData={[3, 2, 1]} />
    </div>
  )
}

export default Home;
'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import menu_data from '@/components/Parts/page/chart_ui/menu.json'

const chartData = menu_data;

export default function Chart01() {
  return (
    <ResponsiveContainer width="100%" height={300} >
      {/* 折れ線グラフコンポーネント */}
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        {/* X 軸を表示させるコンポーネント */}
        <XAxis dataKey="name" />
        {/* データに紐づいた折れ線コンポーネント */}
        <Line dataKey="score" stroke="#82ca9d" name="評価score"/>
        {/* // chartData内の最小値と最大値を設定 */}
        <YAxis domain={['dataMin - 1', 'dataMax + 2']} />
        {/* 凡例を表示させるコンポーネント */}
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
}
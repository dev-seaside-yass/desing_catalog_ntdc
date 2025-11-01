'use client';
import { BarChart, Bar, LabelList, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import menu_data from '@/components/Parts/page/chart_ui/menu02.json'

const chartData = menu_data;

export default function Chart02() {
  return (
    <ResponsiveContainer width="100%" height={300} >
      <BarChart
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
        <XAxis dataKey="name" />
        <YAxis domain={[0, "dataMax + 5000"]} />
        <Bar dataKey="sales" fill="#8884d8" name="売上(円)">
          <LabelList fill="#000000" />
        </Bar>
        {/* 凡例を表示させるコンポーネント */}
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
}
'use client';
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, } from 'recharts';
import studyDataList from './studyData';

const pStyle = {
  color: 'blue',
};

const divStyle = {
  background: 'linear-gradient(to right, #fff, #fff8)',
  fontWeight: 'bold',
  border: 'solid 2px blue',
};

export default function Chart03() {
  return (
    <div className="container">
      <LineChart
        width="100%"
        height={500}
        data={studyDataList}
        // グラフの周囲の余白
        margin={{ top: 5, right: 5, left: 5, bottom: 5, }}
      >
        {/* グリッドの破線のスタイルを指定 */}
        <CartesianGrid strokeDasharray="5 1" />
        {/* デフォルト(interval)の設定だと日付が 1 日おき  */}
        <XAxis
          dataKey="date"
          interval={0}
          // フォントサイズ
          tick={{ fontSize: 10, fill: "#000" }}
          // 指定した角度だけ文字を傾ける
          angle={-30}
          //文字の横位置を指定します。「-10」を指定すると目盛りから 10px 左に配置されます。
          dx={-10}
          //文字の縦位置を指定します。「5」を指定すると目盛りから 5px 下に配置されます。
          dy={10}
        />
        <YAxis
          dataKey="問題数"
          // 目盛りの数を指定した値に変更
          tickCount={8}
        />
        <Line type="monotone" dataKey="問題数" stroke="#8884d8" />
        <Line type="monotone" dataKey="正解数" stroke="#3ba2f6" />
        <Line
          //ラインの種類を指定できます。デフォルトは linear (直線) 
          type="monotone"
          dataKey="正解率"
          // ラインの色を指定
          stroke="#ff0092"
          // ラインの太さを指定
          strokeWidth={2}
        />
        {/* グラフの凡例を設定 */}
        <Legend
          // 凡例の縦位置を指定
          verticalAlign="top"
          height={30}
          // アイコンのサイズ
          iconSize={20}
          // アイコンの種類を指定
          iconType="plainline"
        />
        {/* マウスホバーで表示されるツールチップの設定 */}
        <Tooltip
          // ツールチップのコンテンツのスタイルを指定
          contentStyle={divStyle}
          // ツールチップのラベルのスタイルを指定
          labelStyle={pStyle}
          separator=" "
          cursor={{ stroke: 'blue', strokeWidth: 2 }}
        />
      </LineChart>
    </div>
  );
}
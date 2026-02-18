"use client"
import { PieChart, Pie, Cell } from 'recharts'

export default function Gauge({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value))
  const remainder = 100 - v
  const data = [{ value: v }, { value: remainder }]
  const color = v > 80 ? '#10b981' : v > 60 ? '#84cc16' : v > 40 ? '#f59e0b' : '#ef4444'

  return (
    <PieChart width={200} height={120}>
      <Pie data={data} startAngle={180} endAngle={0} innerRadius={40} outerRadius={70} dataKey="value">
        <Cell fill={color} />
        <Cell fill="#e6e6e6" />
      </Pie>
    </PieChart>
  )
}

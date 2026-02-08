import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';


const Chart = ({data}) => {
  
  return (
    <div>
      <AreaChart
        style={{
          width: '100%',
          maxHeight: '350px',
          aspectRatio: 1.5,
        }}
        responsive
        data={data}
        margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorCall' x1='0' y1='0' x2='0' y2='1'>
            <stop offset="0%" stopColor="#2B7FFF" stopOpacity={1} />
            <stop offset="100%" stopColor="#51A2FF" stopOpacity={0} />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="10"
              floodColor="#ef4444"
              floodOpacity="0.35"
            />
          </filter>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke='#90A1B9'
          strokeWidth={1}
          vertical={false}
          horizontal={false}
        />

        <XAxis
          dataKey="name"
          hide={false}
          stroke="#F8F8F8"
          padding={{ left: 0, right: 40 }}
          tick={{ fontSize: 14, dy: 10, fill: '#F8F8F8' }}
          tickLine={true}
          axisLine={true}
          interval={0} // 0 = show all lavel, 1 = one hide one lavel, ....
          angle={0}
          textAnchor='middle'
          height={40}
        />

        <YAxis
          hide={false}
          stroke='#F8F8F8'
          tick={{ fontSize: 14, fill: '#F8F8F8' }}
          tickLine={true}
          axisLine={true}
          width={40}
          // domain={[0, 100]}
          orientation='left'
        />
        <YAxis width="auto" stroke='#F8F8F8' />

        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            padding: '10px 12px',
          }}
          labelStyle={{
            color: '#111827',
            fontWeight: 600,
            marginBottom: 4,
          }}
          itemStyle={{
            color: '#2563eb',
            fontWeight: 500,
          }}
          formatter={(value) => [`${value}`, 'Calls']}
          labelFormatter={(label) => `Day: ${label}`}
        />
        <Area
          type="monotone"
          dataKey="call"
          stroke="#3B82F6"
          fill="url(#colorCall)"
          filter='url(#shadow)'
          fillOpacity={0.6}
          // dot={{
          //   r: 4,
          //   fill: '#ef4444',
          //   stroke: '#fff',
          //   strokeWidth: 2,
          // }}
          // activeDot={{
          //   r: 6,
          //   fill: '#dc2626',
          // }}
          isAnimationActive={true}
          animationDuration={800}
          animationEasing='ease in out'
          connectNulls={true}
          stackId={1}
          tabIndex={-1}
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
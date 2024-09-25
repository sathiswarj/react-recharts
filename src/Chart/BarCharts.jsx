import React from 'react'; 
import { BarChart, Bar, ResponsiveContainer, YAxis, XAxis, Tooltip, Legend } from 'recharts';
import PieCharts from './PieCharts';
import LineCharts from './LineCharts'


const BarCharts = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <>
      <div className='barchart' style={{ display: "flex" , justifyContent:'space-around'}}>
        {/* Makes the chart responsive to screen size */}
        <ResponsiveContainer width={600} height={400}>
          {/* Displays a bar chart with the provided data */}
          <BarChart width={150} height={40} data={data}>
            {/* Represents the 'uv' data as blue bars */}
            <Bar dataKey={'uv'} fill='#8884d8' />
            {/* Represents the 'pv' data as green bars */}
            <Bar dataKey={'pv'} fill='#82ca9d' />

            {/* YAxis shows the vertical axis */}
            <YAxis />       
            {/* XAxis shows the horizontal axis with name as labels */}
            <XAxis dataKey={'name'} />
            
            {/* Tooltip shows details when you hover over the bars */}
            <Tooltip />
            {/* Legend displays the label for each bar color */}
            <Legend />      
          </BarChart>
        </ResponsiveContainer>
        <LineCharts />
      
  
      </div>
      <PieCharts />
    </>
  );
}

export default BarCharts;

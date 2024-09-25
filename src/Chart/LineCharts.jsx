import React from 'react';
import { ResponsiveContainer, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    // Data for the LineChart
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
            {/* Makes the LineChart responsive to screen size */}
            <ResponsiveContainer width={600} height={400}>
                {/* Main LineChart component */}
                <LineChart width={600} height={300} data={data}>
                    
                    {/* Line for 'uv' dataKey with a green color */}
                    {/* 'monotone' ensures the line moves smoothly through the data points */}
                    <Line type='monotone' dataKey='uv' stroke='#00C49F' strokeWidth={2} />
                    
                    {/* Line for 'pv' dataKey with a blue color */}
                    <Line type='monotone' dataKey='pv' stroke='#0088FE' strokeWidth={2} />
                    
                    {/* Line for 'amt' dataKey with an orange color */}
                    <Line type='monotone' dataKey='amt' stroke='#FF8042' strokeWidth={2} />
                    
                    {/* Grid lines in the background to improve readability */}
                    <CartesianGrid stroke='#ccc' />
                    
                    {/* X-axis showing the 'name' field (e.g., Page A, Page B) */}
                    <XAxis dataKey='name' />
                    
                    {/* Y-axis for the numeric values (uv, pv, amt) */}
                    <YAxis />
                    
                    {/* Tooltip to show details of each data point when hovering */}
                    <Tooltip />
                    
                    {/* Legend to show labels for each line with color coding */}
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

export default LineCharts;

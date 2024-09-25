import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';


const PieCharts = () => {
  // Two sets of data for the pie charts
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  // Colors to be used for the second pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <div className="chart" style={{ display: "flex",  justifyContent:'space-around' }}>
        {/* First pie chart using data01 */}
        <ResponsiveContainer width={600} height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%" // Centers the pie horizontally
              cy="50%" // Centers the pie vertically
              outerRadius={150} // Sets the size of the pie
              fill="#8884d8"  // Sets the default color for the pie
            />
            <Tooltip /> {/* Shows details on hover */}
            <Legend /> {/* Displays labels for each slice */}
          </PieChart>
        </ResponsiveContainer>

        {/* Second pie chart using data02 */}
        <ResponsiveContainer width={600} height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"      // Centers the pie horizontally
              cy="50%"      // Centers the pie vertically
              innerRadius={90}  // Creates space in the center (donut chart)
              outerRadius={150} // Sets the size of the pie
              paddingAngle={1}  // Adds space between slices
              fill="#82ca9d"    // Sets the default color for the pie
            >
              {/* Assigns colors to each slice based on the COLORS array */}
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip /> {/* Shows details on hover */}
            <Legend /> {/* Displays labels for each slice */}
          </PieChart>
        </ResponsiveContainer>
        
      
      </div>
    </>
  );
};

export default PieCharts;

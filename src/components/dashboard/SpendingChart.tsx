
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const SpendingChart = () => {
  // Sample data for the chart
  const data = [
    { name: "Jan", income: 4000, expenses: 2400 },
    { name: "Feb", income: 3000, expenses: 1398 },
    { name: "Mar", income: 2000, expenses: 9800 },
    { name: "Apr", income: 2780, expenses: 3908 },
    { name: "May", income: 1890, expenses: 4800 },
    { name: "Jun", income: 2390, expenses: 3800 },
    { name: "Jul", income: 3490, expenses: 4300 },
  ];

  return (
    <div className="dashboard-card dashboard-section h-[400px]">
      <h2 className="text-xl font-bold mb-6">Income vs Expenses</h2>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              borderRadius: "8px", 
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "none"
            }} 
          />
          <Legend />
          <Bar dataKey="income" name="Income" fill="#4ade80" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" name="Expenses" fill="#f87171" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingChart;

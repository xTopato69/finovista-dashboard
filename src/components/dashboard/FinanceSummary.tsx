
import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";

const FinanceSummary = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "$12,560.00",
      icon: <Wallet className="text-finance-neutral" />,
      trend: null,
      trendValue: null,
    },
    {
      title: "Income",
      value: "$6,240.00",
      icon: <ArrowUpRight className="text-finance-income" />,
      trend: "up",
      trendValue: "+12%",
    },
    {
      title: "Expenses",
      value: "$2,850.00",
      icon: <ArrowDownRight className="text-finance-expense" />,
      trend: "down",
      trendValue: "-3%",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dashboard-section">
      {stats.map((stat) => (
        <div key={stat.title} className="stat-card">
          <div className="flex items-start justify-between">
            <p className="text-muted-foreground">{stat.title}</p>
            <span className="p-2 bg-secondary rounded-md">{stat.icon}</span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            
            {stat.trend && (
              <p className={`text-sm ${stat.trend === "up" ? "text-finance-income" : "text-finance-expense"}`}>
                {stat.trendValue} from last month
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinanceSummary;

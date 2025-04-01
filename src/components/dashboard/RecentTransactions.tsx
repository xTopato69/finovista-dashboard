
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowDownRight, ArrowUpRight, Coffee, Gift, ShoppingBasket, Smartphone, Utensils } from "lucide-react";

const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      date: "Aug 25, 2023",
      description: "Coffee Shop",
      category: "Food & Drink",
      amount: "$5.40",
      type: "expense",
      icon: <Coffee size={16} />,
    },
    {
      id: 2,
      date: "Aug 24, 2023",
      description: "Salary Deposit",
      category: "Income",
      amount: "$2,400.00",
      type: "income",
      icon: <ArrowUpRight size={16} />,
    },
    {
      id: 3,
      date: "Aug 24, 2023",
      description: "Grocery Store",
      category: "Shopping",
      amount: "$68.50",
      type: "expense",
      icon: <ShoppingBasket size={16} />,
    },
    {
      id: 4,
      date: "Aug 23, 2023",
      description: "Mobile Bill",
      category: "Bills",
      amount: "$45.00",
      type: "expense",
      icon: <Smartphone size={16} />,
    },
    {
      id: 5,
      date: "Aug 22, 2023",
      description: "Restaurant",
      category: "Food & Drink",
      amount: "$36.20",
      type: "expense",
      icon: <Utensils size={16} />,
    },
    {
      id: 6,
      date: "Aug 22, 2023",
      description: "Gift from John",
      category: "Income",
      amount: "$50.00",
      type: "income",
      icon: <Gift size={16} />,
    },
  ];

  return (
    <div className="dashboard-card dashboard-section">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Recent Transactions</h2>
        <a href="#" className="text-primary text-sm hover:underline">
          View All
        </a>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="transaction-row">
                <TableCell className="text-muted-foreground text-sm">
                  {transaction.date}
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <span className="p-1.5 bg-secondary rounded-md">
                    {transaction.icon}
                  </span>
                  {transaction.description}
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground text-sm">
                  {transaction.category}
                </TableCell>
                <TableCell 
                  className={`text-right font-medium ${transaction.type === "income" ? "text-finance-income" : "text-finance-expense"}`}
                >
                  {transaction.type === "income" ? "+" : "-"}{transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentTransactions;

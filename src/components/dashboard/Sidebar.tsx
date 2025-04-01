
import { Home, BarChart3, Settings, LogOut, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isMobile, isOpen, toggleSidebar }: SidebarProps) => {
  const navItems = [
    { name: "Home", icon: <Home size={20} />, active: true },
    { name: "Transactions", icon: <Wallet size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  if (isMobile && !isOpen) return null;

  return (
    <aside
      className={cn(
        "bg-sidebar fixed sm:relative h-screen z-10",
        isMobile ? "w-full" : "w-64",
        isMobile && !isOpen ? "hidden" : "block"
      )}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-white">FinoVista</h1>
          {isMobile && (
            <button onClick={toggleSidebar} className="text-white">
              &times;
            </button>
          )}
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn("sidebar-link", item.active && "active")}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}

          <div className="pt-8 mt-8 border-t border-sidebar-border/20">
            <a href="#" className="sidebar-link text-sidebar-foreground/80">
              <LogOut size={20} />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, MessageSquare, DoorOpen, User, LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const menuItems = [
    { title: "Food Voting", description: "Vote for tomorrow's menu", icon: UtensilsCrossed, path: "/food-voting" },
    { title: "Food Feedback", description: "Share your feedback", icon: MessageSquare, path: "/food-feedback" },
    { title: "Gate Pass", description: "Request gate pass", icon: DoorOpen, path: "/gate-pass" },
    { title: "Pass History", description: "View your gate passes", icon: DoorOpen, path: "/pass-history" },
    { title: "Profile", description: "Manage your profile", icon: User, path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Hostel Portal</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.path} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(item.path)}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

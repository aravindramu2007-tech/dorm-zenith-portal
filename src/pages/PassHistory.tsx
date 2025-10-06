import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface GatePass {
  id: number;
  fromDate: string;
  toDate: string;
  reason: string;
  destination: string;
  status: string;
  requestDate: string;
}

const PassHistory = () => {
  const navigate = useNavigate();
  const [passes, setPasses] = useState<GatePass[]>([]);

  useEffect(() => {
    const storedPasses = JSON.parse(localStorage.getItem("gatePasses") || "[]");
    setPasses(storedPasses);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "default";
      case "Pending":
        return "secondary";
      case "Rejected":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Gate Pass History</h2>
          <Button onClick={() => navigate("/gate-pass")}>New Request</Button>
        </div>

        {passes.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">No gate pass requests yet</p>
              <Button className="mt-4" onClick={() => navigate("/gate-pass")}>
                Create Your First Request
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {passes.map((pass) => (
              <Card key={pass.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Gate Pass Request</CardTitle>
                      <CardDescription>Requested on {pass.requestDate}</CardDescription>
                    </div>
                    <Badge variant={getStatusColor(pass.status)}>{pass.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">From Date</p>
                      <p className="font-medium">{pass.fromDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">To Date</p>
                      <p className="font-medium">{pass.toDate}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Destination</p>
                    <p className="font-medium">{pass.destination}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Reason</p>
                    <p className="font-medium">{pass.reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PassHistory;

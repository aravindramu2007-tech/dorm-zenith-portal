import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const FoodVoting = () => {
  const navigate = useNavigate();
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const breakfastOptions = ["Poha", "Idli Sambar", "Paratha with Curd", "Bread Omelette"];
  const lunchOptions = ["Dal Rice", "Chole Rice", "Rajma Rice", "Paneer Curry"];
  const dinnerOptions = ["Roti Sabzi", "Fried Rice", "Pasta", "Biryani"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your votes have been submitted!");
    navigate("/dashboard");
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

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Food Voting</CardTitle>
            <CardDescription>Vote for tomorrow's menu</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Breakfast</Label>
                <RadioGroup value={breakfast} onValueChange={setBreakfast}>
                  {breakfastOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`breakfast-${option}`} />
                      <Label htmlFor={`breakfast-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-lg font-semibold">Lunch</Label>
                <RadioGroup value={lunch} onValueChange={setLunch}>
                  {lunchOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`lunch-${option}`} />
                      <Label htmlFor={`lunch-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-lg font-semibold">Dinner</Label>
                <RadioGroup value={dinner} onValueChange={setDinner}>
                  {dinnerOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`dinner-${option}`} />
                      <Label htmlFor={`dinner-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">Submit Votes</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FoodVoting;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const FoodFeedback = () => {
  const navigate = useNavigate();
  const [meal, setMeal] = useState("breakfast");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!");
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
            <CardTitle className="text-2xl">Food Feedback</CardTitle>
            <CardDescription>Share your feedback about the food</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label className="text-lg font-semibold">Select Meal</Label>
                <RadioGroup value={meal} onValueChange={setMeal}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="breakfast" id="breakfast" />
                    <Label htmlFor="breakfast">Breakfast</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lunch" id="lunch" />
                    <Label htmlFor="lunch">Lunch</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dinner" id="dinner" />
                    <Label htmlFor="dinner">Dinner</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label className="text-lg font-semibold">Rating</Label>
                <RadioGroup value={rating} onValueChange={setRating}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5" id="rating-5" />
                    <Label htmlFor="rating-5">⭐⭐⭐⭐⭐ Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="rating-4" />
                    <Label htmlFor="rating-4">⭐⭐⭐⭐ Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="rating-3" />
                    <Label htmlFor="rating-3">⭐⭐⭐ Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="rating-2" />
                    <Label htmlFor="rating-2">⭐⭐ Below Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="rating-1" />
                    <Label htmlFor="rating-1">⭐ Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label htmlFor="feedback" className="text-lg font-semibold">Your Feedback</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts about the food quality, taste, quantity, etc."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">Submit Feedback</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FoodFeedback;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Star, Brain, Code, Target, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  problemName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  company: string;
}

const FeedbackModal = ({ isOpen, onClose, problemName, difficulty, company }: FeedbackModalProps) => {
  const [experience, setExperience] = useState<string>("");
  const [struggledAreas, setStruggledAreas] = useState<string[]>([]);
  const [detailedFeedback, setDetailedFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const experienceOptions = [
    { value: "very-easy", label: "Very Easy", icon: "😊", color: "text-green-600" },
    { value: "easy", label: "Easy", icon: "🙂", color: "text-green-500" },
    { value: "moderate", label: "Moderate", icon: "😐", color: "text-yellow-500" },
    { value: "challenging", label: "Challenging", icon: "😤", color: "text-orange-500" },
    { value: "very-hard", label: "Very Hard", icon: "😰", color: "text-red-500" }
  ];

  const struggleAreas = [
    "Algorithm Logic", "Data Structure Choice", "Edge Cases", "Time Complexity", 
    "Space Complexity", "Implementation", "Understanding Problem", "Debugging"
  ];

  const toggleStruggleArea = (area: string) => {
    setStruggledAreas(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area)
        : [...prev, area]
    );
  };

  const handleSubmit = async () => {
    if (!experience) {
      toast({
        title: "Please select your experience level",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to agents
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Feedback submitted successfully!",
        description: "Our AI agents will analyze your feedback to provide better learning experiences.",
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Failed to submit feedback",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getBoilerplateSuggestions = () => {
    const suggestions = [];
    
    if (struggledAreas.includes("Algorithm Logic")) {
      suggestions.push("💡 Break down the problem into smaller steps before coding");
    }
    if (struggledAreas.includes("Data Structure Choice")) {
      suggestions.push("📚 Review common data structures and their use cases");
    }
    if (struggledAreas.includes("Time Complexity")) {
      suggestions.push("⚡ Practice analyzing time complexity with Big O notation");
    }
    if (struggledAreas.includes("Edge Cases")) {
      suggestions.push("🔍 Always consider empty inputs, single elements, and boundary conditions");
    }
    
    return suggestions;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Share Your Experience
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Problem Info */}
          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{problemName}</h3>
                  <p className="text-sm text-muted-foreground">{company}</p>
                </div>
                <Badge variant={difficulty === 'Easy' ? 'default' : difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                  {difficulty}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Experience Rating */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Star className="w-4 h-4" />
              How was your experience solving this problem?
            </Label>
            <RadioGroup value={experience} onValueChange={setExperience}>
              <div className="grid grid-cols-1 gap-2">
                {experienceOptions.map(option => (
                  <div key={option.value} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className={`flex items-center gap-2 cursor-pointer ${option.color}`}>
                      <span className="text-lg">{option.icon}</span>
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Struggle Areas */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Brain className="w-4 h-4" />
              What areas did you struggle with? (Select all that apply)
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {struggleAreas.map(area => (
                <Button
                  key={area}
                  variant={struggledAreas.includes(area) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleStruggleArea(area)}
                  className="justify-start"
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>

          {/* Boilerplate Suggestions */}
          {struggledAreas.length > 0 && (
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Personalized Learning Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {getBoilerplateSuggestions().map((suggestion, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {suggestion}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Detailed Feedback */}
          <div className="space-y-3">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Code className="w-4 h-4" />
              Additional Comments (Optional)
            </Label>
            <Textarea
              placeholder="Tell us more about your experience, what specific concepts you found confusing, or any suggestions for improvement..."
              value={detailedFeedback}
              onChange={(e) => setDetailedFeedback(e.target.value)}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
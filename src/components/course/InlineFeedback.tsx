import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Star, Brain, Code, Target, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import { motion, AnimatePresence } from "framer-motion";

interface InlineFeedbackProps {
  isExpanded: boolean;
  onToggle: () => void;
  problemName: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  company: string;
  onSubmit?: () => void;
}

const InlineFeedback = ({ isExpanded, onToggle, problemName, difficulty, company, onSubmit }: InlineFeedbackProps) => {
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
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Feedback submitted successfully!",
        description: "Our AI agents will analyze your feedback to provide better learning experiences.",
      });
      
      // Reset form
      setExperience("");
      setStruggledAreas([]);
      setDetailedFeedback("");
      onSubmit?.();
      onToggle();
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
    <div className="w-full">
      {/* Toggle Header */}
      <Button
        variant="ghost"
        onClick={onToggle}
        className="w-full justify-between p-3 h-auto bg-muted/30 hover:bg-muted/50"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-primary" />
          <span className="font-medium">Share Your Experience</span>
          <Badge variant={difficulty === 'Easy' ? 'default' : difficulty === 'Medium' ? 'secondary' : 'destructive'} className="text-xs">
            {difficulty}
          </Badge>
        </div>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="overflow-hidden"
        >
            <Card className="mt-2 border-l-4 border-l-primary">
              <CardContent className="p-4 space-y-6">
                {/* Problem Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">{problemName}</h4>
                    <p className="text-xs text-muted-foreground">{company}</p>
                  </div>
                </div>

                {/* Experience Rating */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Star className="w-3 h-3" />
                    How was your experience?
                  </Label>
                  <RadioGroup value={experience} onValueChange={setExperience}>
                    <div className="grid grid-cols-1 gap-1">
                      {experienceOptions.map(option => (
                        <div key={option.value} className="flex items-center space-x-2 p-1 rounded hover:bg-muted/30">
                          <RadioGroupItem value={option.value} id={`${problemName}-${option.value}`} />
                          <Label htmlFor={`${problemName}-${option.value}`} className={`flex items-center gap-2 cursor-pointer text-sm ${option.color}`}>
                            <span>{option.icon}</span>
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Struggle Areas */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Brain className="w-3 h-3" />
                    What areas did you struggle with?
                  </Label>
                  <div className="grid grid-cols-2 gap-1">
                    {struggleAreas.map(area => (
                      <Button
                        key={area}
                        variant={struggledAreas.includes(area) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleStruggleArea(area)}
                        className="justify-start text-xs h-8"
                      >
                        {area}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Boilerplate Suggestions */}
                {struggledAreas.length > 0 && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xs flex items-center gap-2">
                        <Target className="w-3 h-3" />
                        Personalized Learning Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-1">
                        {getBoilerplateSuggestions().map((suggestion, index) => (
                          <div key={index} className="text-xs text-muted-foreground">
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Detailed Feedback */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <Code className="w-3 h-3" />
                    Additional Comments (Optional)
                  </Label>
                  <Textarea
                    placeholder="Tell us more about your experience..."
                    value={detailedFeedback}
                    onChange={(e) => setDetailedFeedback(e.target.value)}
                    rows={3}
                    className="text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" onClick={onToggle} size="sm" className="flex-1">
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    size="sm"
                    className="flex-1"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </div>
              </CardContent>
            </Card>
        </div>
      )}
    </div>
  );
};

export default InlineFeedback;
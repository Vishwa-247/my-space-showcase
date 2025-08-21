import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Progress } from "@/components/ui/progress";
import { dsaTopics } from "@/data/dsaProblems";
import { CheckCircle2, ChevronLeft, Circle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const DSATopic = () => {
  const { topicId } = useParams();
  const topic = dsaTopics.find(t => t.id === topicId);
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Topic not found</h1>
          <Link to="/dsa-sheet">
            <Button>Back to DSA Sheet</Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleProblem = (problemName: string) => {
    const newCompleted = new Set(completedProblems);
    if (newCompleted.has(problemName)) {
      newCompleted.delete(problemName);
    } else {
      newCompleted.add(problemName);
    }
    setCompletedProblems(newCompleted);
  };

  const progressPercentage = (completedProblems.size / topic.problems.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb with Back Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/dsa-sheet" className="hover:text-foreground transition-colors">
                Ultimate DSA Sheet
              </Link>
              <ChevronLeft className="w-4 h-4 rotate-180" />
              <span className="text-foreground">{topic.title}</span>
            </div>
            <Link to="/dsa-sheet">
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-4xl">
              {topic.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {topic.title}
              </h1>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-sm">
                  {completedProblems.size}/{topic.problems.length} solved
                </Badge>
                <div className="flex-1 max-w-xs">
                  <Progress value={progressPercentage} className="h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Problems List */}
          <div className="space-y-3">
            {topic.problems.map((problem, index) => {
              const isCompleted = completedProblems.has(problem.name);
              return (
                <Card 
                  key={index} 
                  className={`group hover:shadow-md transition-all duration-200 ${
                    isCompleted ? 'bg-primary/5 border-primary/20' : 'hover:border-primary/20'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleProblem(problem.name)}
                        className="transition-colors hover:scale-110"
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground hover:text-primary" />
                        )}
                      </button>
                      
                      <div className="flex-1">
                        <h3 className={`text-lg font-medium transition-colors ${
                          isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'
                        }`}>
                          {problem.name}
                        </h3>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a
                          href={problem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Solve
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link to="/dsa-sheet">
              <Button variant="outline" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to DSA Sheet
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DSATopic;

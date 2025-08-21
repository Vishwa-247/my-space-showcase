import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Building2, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import { dsaTopics } from "@/data/dsaProblems";
import { companies } from "@/data/companyProblems";

const DSASheet = () => {
  const [activeTab, setActiveTab] = useState("topics");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Container className="py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Ultimate DSA Sheet
            </h1>
            <p className="text-xl text-muted-foreground">
              Problem Solving: Everything from Basics to Advanced
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="topics" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Topics
              </TabsTrigger>
              <TabsTrigger value="companies" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Companies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="mt-8">
              {/* Topics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dsaTopics.map((topic, index) => (
                  <Link key={topic.id} to={`/dsa-sheet/topic/${topic.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{topic.icon}</div>
                          <Badge variant="outline" className="text-xs">
                            {String(index + 1).padStart(2, '0')}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {topic.title}
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {topic.solvedProblems}/{topic.totalProblems} solved
                            </span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                          
                          <Progress 
                            value={(topic.solvedProblems / topic.totalProblems) * 100} 
                            className="h-2"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="companies" className="mt-8">
              {/* Companies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <Link key={company.id} to={`/dsa-sheet/company/${company.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-3xl">{company.icon}</div>
                          <Badge variant="outline" className="text-xs">
                            {String(index + 1).padStart(2, '0')}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {company.title}
                        </h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {company.solvedProblems}/{company.totalProblems} problems
                            </span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                          
                          <Progress 
                            value={(company.solvedProblems / company.totalProblems) * 100} 
                            className="h-2"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <Card className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-6">
                {activeTab === "topics" ? (
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {dsaTopics.reduce((acc, topic) => acc + topic.totalProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Problems</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">
                        {dsaTopics.reduce((acc, topic) => acc + topic.solvedProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Solved</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-accent">
                        {dsaTopics.length}
                      </div>
                      <div className="text-sm text-muted-foreground">Topics</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-bold text-primary">
                        {companies.reduce((acc, company) => acc + company.totalProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Problems</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">
                        {companies.reduce((acc, company) => acc + company.solvedProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Solved</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-accent">
                        {companies.length}
                      </div>
                      <div className="text-sm text-muted-foreground">Companies</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DSASheet;
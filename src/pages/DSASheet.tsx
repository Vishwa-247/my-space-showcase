import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, Building2, BookOpen, Search, Filter } from "lucide-react";
import Container from "@/components/ui/Container";
import { dsaTopics } from "@/data/dsaProblems";
import { companies } from "@/data/companyProblems";
import InlineFeedback from "@/components/course/InlineFeedback";

const DSASheet = () => {
  const [activeTab, setActiveTab] = useState("topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter companies based on search and difficulty
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (difficultyFilter === "all") return matchesSearch;
    
    // Check if company has problems of the selected difficulty
    const hasMatchingDifficulty = company.problems.some(problem => 
      problem.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
    );
    
    return matchesSearch && hasMatchingDifficulty;
  });

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
              {/* Filters for Companies */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Company Problems</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="gap-2"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                </div>
                
                {showFilters && (
                  <Card className="p-4 bg-muted/30">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Search Companies</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Search by company name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Filter by Difficulty</label>
                        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Difficulties</SelectItem>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </Card>
                )}
              </div>

              {/* Companies Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company, index) => (
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
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-muted-foreground">
                      <Building2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">No companies found</p>
                      <p className="text-sm">Try adjusting your search or filters</p>
                    </div>
                  </div>
                )}
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
                        {filteredCompanies.reduce((acc, company) => acc + company.totalProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Problems</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">
                        {filteredCompanies.reduce((acc, company) => acc + company.solvedProblems, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Solved</div>
                    </div>
                    <div className="w-px h-12 bg-border"></div>
                    <div>
                      <div className="text-3xl font-bold text-accent">
                        {filteredCompanies.length}
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
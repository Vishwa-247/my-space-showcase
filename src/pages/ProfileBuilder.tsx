import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Upload, User, Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, Award, Code, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  summary: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
    grade: string;
  }>;
  skills: {
    programming: string[];
    web: string[];
    databases: string[];
    tools: string[];
  };
  certifications: string[];
}

const ProfileBuilder = () => {
  const [activeTab, setActiveTab] = useState("manual");
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    summary: "",
    experience: [],
    projects: [],
    education: [],
    skills: { programming: [], web: [], databases: [], tools: [] },
    certifications: []
  });
  const [profileStrength, setProfileStrength] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    
    try {
      // Simulate resume parsing - in real implementation, this would call an AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Example parsed data (like the user's resume)
      const parsedData: ProfileData = {
        name: "Vishwa Teja Thouti",
        email: "vishwateja.thouti2026@woxsen.edu.in",
        phone: "+91 8309680569",
        github: "Vishwa-247",
        linkedin: "Vishwa Thouti",
        summary: "Innovative Full-Stack Developer with MERN stack and machine learning expertise; specializes in scalable web apps and advanced AI-driven features. Track record in intelligent healthcare and forecasting solutions.",
        experience: [{
          title: "Cloud Computing Intern",
          company: "NIT Warangal",
          duration: "Jun 2023–Jul 2023",
          description: "Developed cloud workload prediction model with deep learning. Optimized resource allocation with predictive techniques. AI-driven workload forecasting."
        }],
        projects: [
          {
            name: "MediConnect",
            description: "AI-powered healthcare monitoring, multi-ML model integration. NLP chatbot for disease queries (MERN stack)",
            technologies: ["React", "Node.js", "MongoDB", "Machine Learning", "NLP"]
          },
          {
            name: "AI-Driven Learning Management System",
            description: "Personalized learning via sentiment analysis, facial emotion recognition. Real-time feedback for communication/engagement",
            technologies: ["React", "Express.js", "AI/ML", "Computer Vision"]
          },
          {
            name: "Network Intrusion Detection System",
            description: "Real-time network security, ML-based anomaly detection. Used precision and recall for performance evaluation",
            technologies: ["Python", "Machine Learning", "Network Security"]
          }
        ],
        education: [{
          degree: "BTech, Computer Science Engineering",
          institution: "Woxsen University",
          duration: "2022–2026",
          grade: "CGPA 3.3/4.0"
        }],
        skills: {
          programming: ["Python", "JavaScript", "HTML", "CSS", "PHP"],
          web: ["React.js", "Node.js", "Express.js", "RESTful APIs"],
          databases: ["MongoDB", "MySQL", "Firebase"],
          tools: ["Git", "GitHub", "Postman"]
        },
        certifications: [
          "Python Programming Essentials (Coursera)",
          "Data Visualization with Python (Coursera)",
          "Introduction to Artificial Intelligence (Coursera)",
          "React Basics & React Advance (Coursera)"
        ]
      };

      setProfileData(parsedData);
      setProfileStrength(85); // Calculate based on completeness
      
      toast({
        title: "Resume parsed successfully!",
        description: "Your profile has been populated with extracted information.",
      });
    } catch (error) {
      toast({
        title: "Failed to parse resume",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const calculateProfileStrength = (data: ProfileData) => {
    let score = 0;
    if (data.name) score += 10;
    if (data.email) score += 10;
    if (data.phone) score += 5;
    if (data.summary) score += 15;
    if (data.experience.length > 0) score += 20;
    if (data.projects.length > 0) score += 15;
    if (data.education.length > 0) score += 10;
    if (data.skills.programming.length > 0) score += 10;
    if (data.certifications.length > 0) score += 5;
    return score;
  };

  const handleSaveProfile = async () => {
    const strength = calculateProfileStrength(profileData);
    setProfileStrength(strength);
    
    toast({
      title: "Profile saved successfully!",
      description: `Profile strength: ${strength}%`,
    });
    
    // Navigate to dashboard after successful save
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  const addSkill = (category: keyof ProfileData['skills'], skill: string) => {
    if (skill.trim()) {
      setProfileData(prev => ({
        ...prev,
        skills: {
          ...prev.skills,
          [category]: [...prev.skills[category], skill.trim()]
        }
      }));
    }
  };

  const removeSkill = (category: keyof ProfileData['skills'], index: number) => {
    setProfileData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Build Your Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              Create a comprehensive profile to get personalized learning recommendations
            </p>
            
            {profileStrength > 0 && (
              <Card className="mt-6 max-w-md mx-auto">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Profile Strength</span>
                    <span className="text-sm font-bold">{profileStrength}%</span>
                  </div>
                  <Progress value={profileStrength} className="h-2" />
                </CardContent>
              </Card>
            )}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Resume</TabsTrigger>
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Your Resume
                  </CardTitle>
                  <CardDescription>
                    Upload your resume and we'll automatically extract your information using AI
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Drag and drop your resume here</p>
                      <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX files</p>
                    </div>
                    <div className="mt-4">
                      <Button asChild className="relative">
                        <label>
                          <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                            disabled={isProcessing}
                          />
                          {isProcessing ? "Processing..." : "Choose File"}
                        </label>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manual" className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Username</Label>
                      <Input
                        id="github"
                        value={profileData.github}
                        onChange={(e) => setProfileData(prev => ({ ...prev, github: e.target.value }))}
                        placeholder="your-github-username"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <Textarea
                      id="summary"
                      value={profileData.summary}
                      onChange={(e) => setProfileData(prev => ({ ...prev, summary: e.target.value }))}
                      placeholder="Brief description of your professional background and goals..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Display parsed data if available */}
              {profileData.name && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Profile Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Experience */}
                    {profileData.experience.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Experience
                        </h3>
                        {profileData.experience.map((exp, index) => (
                          <div key={index} className="border-l-2 border-primary/20 pl-4 mb-4">
                            <h4 className="font-medium">{exp.title}</h4>
                            <p className="text-sm text-muted-foreground">{exp.company} • {exp.duration}</p>
                            <p className="text-sm mt-1">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Projects */}
                    {profileData.projects.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Projects
                        </h3>
                        {profileData.projects.map((project, index) => (
                          <div key={index} className="border-l-2 border-secondary/20 pl-4 mb-4">
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm mt-1">{project.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    {Object.values(profileData.skills).some(skillArray => skillArray.length > 0) && (
                      <div>
                        <h3 className="font-semibold mb-3">Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(profileData.skills).map(([category, skills]) => 
                            skills.length > 0 && (
                              <div key={category}>
                                <h4 className="text-sm font-medium capitalize mb-2">{category}</h4>
                                <div className="flex flex-wrap gap-1">
                                  {skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Save Button */}
          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleSaveProfile}
              size="lg"
              className="w-full md:w-auto"
              disabled={!profileData.name || !profileData.email}
            >
              Save Profile & Continue
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileBuilder;
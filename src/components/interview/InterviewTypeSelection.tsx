import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Users, Code, MessageSquare, ChevronRight } from 'lucide-react';
import GlassMorphism from '../ui/GlassMorphism';

export type InterviewType = 'aptitude' | 'technical' | 'soft-skills' | 'hr';

interface InterviewTypeSelectionProps {
  onTypeSelect: (type: InterviewType) => void;
}

const InterviewTypeSelection = ({ onTypeSelect }: InterviewTypeSelectionProps) => {
  const [selectedType, setSelectedType] = useState<InterviewType | null>(null);

  const interviewTypes = [
    {
      type: 'aptitude' as InterviewType,
      title: 'Aptitude Test',
      icon: Brain,
      description: 'Logic, reasoning, and problem-solving questions',
      features: [
        'Quantitative reasoning',
        'Logical puzzles',
        'Pattern recognition',
        'Critical thinking'
      ],
      duration: '45 minutes',
      color: 'border-blue-500 bg-blue-50 dark:bg-blue-950/30'
    },
    {
      type: 'technical' as InterviewType,
      title: 'Technical Interview',
      icon: Code,
      description: 'Programming and technical knowledge assessment',
      features: [
        'Coding challenges',
        'System design',
        'Technical concepts',
        'Best practices'
      ],
      duration: '60 minutes',
      color: 'border-green-500 bg-green-50 dark:bg-green-950/30'
    },
    {
      type: 'soft-skills' as InterviewType,
      title: 'Soft Skills Assessment',
      icon: Users,
      description: 'AI-powered behavioral analysis with facial recognition',
      features: [
        'Communication skills',
        'Leadership potential',
        'Team collaboration',
        'Emotional intelligence'
      ],
      duration: '30 minutes',
      color: 'border-purple-500 bg-purple-50 dark:bg-purple-950/30'
    },
    {
      type: 'hr' as InterviewType,
      title: 'HR Interview',
      icon: MessageSquare,
      description: 'General interview questions and company fit',
      features: [
        'Background discussion',
        'Career goals',
        'Company culture fit',
        'Behavioral questions'
      ],
      duration: '40 minutes',
      color: 'border-orange-500 bg-orange-50 dark:bg-orange-950/30'
    }
  ];

  const handleProceed = () => {
    if (selectedType) {
      onTypeSelect(selectedType);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Choose Your Interview Type</h1>
        <p className="text-muted-foreground text-lg">
          Select the type of interview you'd like to practice
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interviewTypes.map((interview) => {
          const Icon = interview.icon;
          const isSelected = selectedType === interview.type;
          
          return (
            <GlassMorphism key={interview.type} className="h-full">
              <Card 
                className={`cursor-pointer transition-all duration-200 h-full ${
                  isSelected 
                    ? `ring-2 ring-primary ${interview.color}` 
                    : 'hover:shadow-lg hover:scale-105'
                }`}
                onClick={() => setSelectedType(interview.type)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-8 w-8 ${
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <div className="text-sm text-muted-foreground">
                      {interview.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{interview.title}</CardTitle>
                  <CardDescription className="text-base">
                    {interview.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {interview.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </GlassMorphism>
          );
        })}
      </div>

      {selectedType && (
        <div className="flex justify-center pt-8">
          <Button 
            size="lg" 
            onClick={handleProceed}
            className="px-8 py-3 text-lg"
          >
            Proceed with {interviewTypes.find(t => t.type === selectedType)?.title}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}

      <div className="mt-12 p-6 bg-muted/30 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">🤖 AI-Powered Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Facial Analysis:</strong> Eye contact tracking, confidence level, nervousness detection
          </div>
          <div>
            <strong>Speech Analysis:</strong> Clarity, pace, filler words, pronunciation feedback
          </div>
          <div>
            <strong>Content Analysis:</strong> Answer relevance, technical accuracy, communication skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewTypeSelection;
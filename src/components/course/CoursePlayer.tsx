
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2,
  Maximize,
  BookOpen,
  FileText,
  MessageSquare,
  Download,
  CheckCircle,
  Clock,
  Award,
  Star
} from 'lucide-react';
import AIChatbot from '../ai/AIChatbot';

interface CoursePlayerProps {
  courseId: string;
  courseName?: string;
}

const CoursePlayer: React.FC<CoursePlayerProps> = ({ 
  courseId, 
  courseName = "Advanced Financial Modeling" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(185); // 3:05
  const [duration] = useState(2847); // 47:27
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      id: '1',
      title: 'Introduction to Financial Modeling',
      lessons: [
        { id: '1-1', title: 'What is Financial Modeling?', duration: '12:34', completed: true },
        { id: '1-2', title: 'Types of Financial Models', duration: '15:22', completed: true },
        { id: '1-3', title: 'Excel Best Practices', duration: '18:45', completed: false, current: true }
      ]
    },
    {
      id: '2',
      title: 'Building DCF Models',
      lessons: [
        { id: '2-1', title: 'DCF Theory and Components', duration: '22:15', completed: false },
        { id: '2-2', title: 'Revenue Forecasting', duration: '19:33', completed: false },
        { id: '2-3', title: 'Cost Structure Analysis', duration: '16:28', completed: false }
      ]
    },
    {
      id: '3',
      title: 'Valuation Methods',
      lessons: [
        { id: '3-1', title: 'Comparable Company Analysis', duration: '25:17', completed: false },
        { id: '3-2', title: 'Precedent Transactions', duration: '20:44', completed: false },
        { id: '3-3', title: 'Sum-of-the-Parts Valuation', duration: '18:56', completed: false }
      ]
    }
  ];

  const courseResources = [
    { id: '1', name: 'Excel Model Template', type: 'xlsx', size: '2.4 MB' },
    { id: '2', name: 'DCF Case Study', type: 'pdf', size: '1.8 MB' },
    { id: '3', name: 'Financial Ratios Cheat Sheet', type: 'pdf', size: '0.9 MB' },
    { id: '4', name: 'Video Transcript', type: 'txt', size: '0.2 MB' }
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Course Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{courseName}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Chapter 1: Excel Best Practices</span>
            <Badge variant="outline">Intermediate</Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative bg-black aspect-video">
                {/* Video Player Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8" />
                      )}
                    </div>
                    <p className="text-lg">Excel Best Practices for Financial Modeling</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="space-y-2">
                    {/* Progress Bar */}
                    <div className="w-full">
                      <Progress value={progressPercentage} className="h-1 bg-white/20" />
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-4">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipBack className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <SkipForward className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Volume2 className="h-4 w-4" />
                          <div className="w-16 h-1 bg-white/20 rounded-full">
                            <div className="w-3/4 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Course Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="notes">My Notes</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lesson Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">
                      In this lesson, you'll learn the essential Excel best practices that form the foundation 
                      of professional financial modeling. We'll cover formatting standards, formula construction, 
                      model structure, and documentation techniques used in investment banking and corporate finance.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Key Topics Covered:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Excel formatting and color coding conventions</li>
                        <li>Formula best practices and error prevention</li>
                        <li>Model structure and organization</li>
                        <li>Documentation and assumptions tracking</li>
                        <li>Version control and model review processes</li>
                      </ul>
                    </div>

                    <div className="flex items-center space-x-4 pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Duration: 18:45</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Beginner to Intermediate</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Take notes while watching the lesson..."
                      className="min-h-64"
                    />
                    <div className="flex justify-end mt-4">
                      <Button>Save Notes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Downloadable Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {courseResources.map((resource) => (
                        <div key={resource.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-sm">{resource.name}</p>
                              <p className="text-xs text-gray-500">{resource.type.toUpperCase()} • {resource.size}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussion & Q&A</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Discussion forum will be implemented here</p>
                      <p className="text-sm text-gray-400">Ask questions and engage with other students</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Course Content</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Progress:</span>
                  <span className="font-medium">2/9 lessons</span>
                </div>
                <Progress value={22} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {courseModules.map((module) => (
                  <div key={module.id} className="space-y-2">
                    <h4 className="font-medium text-sm">{module.title}</h4>
                    <div className="space-y-1">
                      {module.lessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                            lesson.current 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center space-x-2 flex-1">
                            {lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            ) : lesson.current ? (
                              <Play className="h-4 w-4 text-blue-600 flex-shrink-0" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex-shrink-0" />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className={`text-xs truncate ${lesson.current ? 'font-medium text-blue-900' : ''}`}>
                                {lesson.title}
                              </p>
                              <p className="text-xs text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Chatbot */}
      <AIChatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
        courseContext={courseName}
      />
    </div>
  );
};

export default CoursePlayer;

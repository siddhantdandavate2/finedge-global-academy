
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Mic,
  MicOff,
  VideoOff,
  MessageSquare,
  Share2,
  Download,
  Play,
  Pause,
  Volume2,
  Settings,
  Hand,
  UserCheck
} from 'lucide-react';

const WebinarSystem: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isHandRaised, setIsHandRaised] = useState(false);

  const upcomingWebinars = [
    {
      id: '1',
      title: 'Advanced Options Trading Strategies',
      instructor: {
        name: 'Dr. Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        credentials: 'Former Goldman Sachs VP'
      },
      date: '2024-02-15',
      time: '14:00 UTC',
      duration: '90 minutes',
      registered: 247,
      maxCapacity: 500,
      description: 'Learn advanced options strategies including spreads, straddles, and complex multi-leg trades.',
      topics: ['Option Greeks', 'Volatility Trading', 'Risk Management', 'Portfolio Hedging'],
      isLive: false
    },
    {
      id: '2',
      title: 'Market Analysis: Q1 2024 Outlook',
      instructor: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        credentials: 'Senior Market Analyst'
      },
      date: '2024-02-20',
      time: '16:00 UTC',
      duration: '60 minutes',
      registered: 156,
      maxCapacity: 300,
      description: 'Comprehensive market outlook covering equities, bonds, commodities, and currencies.',
      topics: ['Market Trends', 'Economic Indicators', 'Sector Analysis', 'Investment Opportunities'],
      isLive: true
    }
  ];

  const chatMessages = [
    {
      id: '1',
      user: 'Alex Rodriguez',
      message: 'Great explanation of delta hedging!',
      timestamp: '14:23',
      isInstructor: false
    },
    {
      id: '2',
      user: 'Dr. Sarah Johnson',
      message: 'Thank you! Let me show you a practical example.',
      timestamp: '14:24',
      isInstructor: true
    },
    {
      id: '3',
      user: 'Lisa Chen',
      message: 'Can you explain the difference between American and European options?',
      timestamp: '14:25',
      isInstructor: false
    }
  ];

  const queuedQuestions = [
    {
      id: '1',
      user: 'John Smith',
      question: 'How do you calculate implied volatility?',
      timestamp: '14:20'
    },
    {
      id: '2',
      user: 'Emma Wilson',
      question: 'What are the risks of naked call writing?',
      timestamp: '14:22'
    }
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Send message logic here
      setChatMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Live Webinars</h1>
          <p className="text-xl text-gray-600">
            Join expert-led live sessions and interactive workshops
          </p>
        </div>

        {/* Live Webinar Interface (when a webinar is live) */}
        {upcomingWebinars.find(w => w.isLive) && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="bg-red-600 text-white p-2 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="font-medium">LIVE NOW</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 h-96">
                {/* Video Area */}
                <div className="lg:col-span-3 bg-black relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Market Analysis: Q1 2024 Outlook</p>
                      <p className="text-sm opacity-75">Michael Chen • Live Session</p>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setIsVideoOff(!isVideoOff)}
                        >
                          {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="sm"
                          variant={isHandRaised ? "default" : "secondary"}
                          onClick={() => setIsHandRaised(!isHandRaised)}
                        >
                          <Hand className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Users className="h-4 w-4" />
                        <span>156 viewers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Sidebar */}
                <div className="bg-white border-l flex flex-col">
                  <div className="p-4 border-b">
                    <h3 className="font-medium">Live Chat</h3>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {chatMessages.map((msg) => (
                      <div key={msg.id} className="text-sm">
                        <div className="flex items-center space-x-1 mb-1">
                          <span className={`font-medium ${msg.isInstructor ? 'text-blue-600' : 'text-gray-700'}`}>
                            {msg.user}
                          </span>
                          {msg.isInstructor && (
                            <Badge variant="secondary" className="text-xs">Instructor</Badge>
                          )}
                          <span className="text-xs text-gray-500">{msg.timestamp}</span>
                        </div>
                        <p className="text-gray-600">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button size="sm" onClick={handleSendMessage}>
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Upcoming Webinars */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Webinars</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="overflow-hidden">
                {webinar.isLive && (
                  <div className="bg-red-600 text-white p-2 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span className="font-medium text-sm">LIVE NOW</span>
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{webinar.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {webinar.description}
                      </CardDescription>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{webinar.registered}/{webinar.maxCapacity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={webinar.instructor.avatar} />
                      <AvatarFallback>{webinar.instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{webinar.instructor.name}</p>
                      <p className="text-sm text-gray-600">{webinar.instructor.credentials}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {webinar.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary">{topic}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {webinar.isLive ? (
                        <Button className="flex-1 bg-red-600 hover:bg-red-700">
                          <Video className="h-4 w-4 mr-2" />
                          Join Live Session
                        </Button>
                      ) : (
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Calendar className="h-4 w-4 mr-2" />
                          Register Now
                        </Button>
                      )}
                      <Button variant="outline">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Q&A Panel (for live sessions) */}
        {upcomingWebinars.find(w => w.isLive) && (
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Q&A Session</CardTitle>
                <CardDescription>Questions from attendees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {queuedQuestions.map((q) => (
                    <div key={q.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm">{q.user}</span>
                          <span className="text-xs text-gray-500">{q.timestamp}</span>
                        </div>
                        <p className="text-gray-700">{q.question}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Answer
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Webinar Archive/Replays */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Webinars</h2>
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-2">Webinar archive coming soon</p>
            <p className="text-sm text-gray-400">Access replays of previous live sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSystem;

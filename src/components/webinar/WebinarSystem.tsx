
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Users, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff,
  MessageSquare,
  Send,
  Settings,
  Share2,
  Download,
  Play,
  Pause,
  Volume2,
  MoreVertical,
  Bell,
  Star
} from 'lucide-react';

const WebinarSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [selectedWebinar, setSelectedWebinar] = useState<string | null>(null);

  const upcomingWebinars = [
    {
      id: '1',
      title: 'Advanced Options Trading Strategies',
      instructor: {
        name: 'Dr. Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        expertise: 'Options Trading Expert'
      },
      date: '2024-02-15',
      time: '2:00 PM EST',
      duration: 90,
      registered: 1247,
      maxAttendees: 2000,
      description: 'Learn advanced options strategies including iron condors, butterflies, and calendar spreads.',
      topics: ['Iron Condors', 'Butterfly Spreads', 'Calendar Spreads', 'Risk Management'],
      price: 49,
      category: 'Trading',
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Cryptocurrency Market Analysis 2024',
      instructor: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        expertise: 'Crypto Analyst'
      },
      date: '2024-02-18',
      time: '7:00 PM EST',
      duration: 60,
      registered: 892,
      maxAttendees: 1500,
      description: 'Comprehensive analysis of cryptocurrency trends and investment opportunities for 2024.',
      topics: ['Bitcoin Outlook', 'Altcoin Analysis', 'DeFi Trends', 'Regulatory Impact'],
      price: 29,
      category: 'Cryptocurrency',
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Personal Finance Planning Workshop',
      instructor: {
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        expertise: 'Financial Planner'
      },
      date: '2024-02-20',
      time: '6:30 PM EST',
      duration: 75,
      registered: 2156,
      maxAttendees: 3000,
      description: 'Interactive workshop on creating a comprehensive personal finance plan.',
      topics: ['Budgeting Strategies', 'Emergency Funds', 'Investment Planning', 'Retirement Savings'],
      price: 0, // Free webinar
      category: 'Personal Finance',
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop'
    }
  ];

  const liveWebinars = [
    {
      id: 'live-1',
      title: 'Real-Time Market Analysis',
      instructor: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      currentAttendees: 1845,
      startedAt: '1:00 PM EST',
      isLive: true
    }
  ];

  const recordedWebinars = [
    {
      id: 'rec-1',
      title: 'ESG Investing: Sustainable Finance Trends',
      instructor: 'Dr. Lisa Wang',
      date: '2024-01-28',
      duration: 85,
      views: 15634,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop',
      price: 19 // Replay access fee
    },
    {
      id: 'rec-2',
      title: 'Technical Analysis Masterclass',
      instructor: 'Robert Martinez',
      date: '2024-01-25',
      duration: 120,
      views: 23891,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop',
      price: 29
    }
  ];

  const chatMessages = [
    { id: 1, user: 'John D.', message: 'Great explanation on iron condors!', time: '2:15 PM' },
    { id: 2, user: 'Sarah M.', message: 'Can you explain the Greeks in more detail?', time: '2:16 PM' },
    { id: 3, user: 'Mike L.', message: 'What about the tax implications?', time: '2:17 PM' }
  ];

  const handleRegister = (webinarId: string) => {
    console.log('Registering for webinar:', webinarId);
    // Handle registration logic
  };

  const handleJoinLive = (webinarId: string) => {
    setSelectedWebinar(webinarId);
    console.log('Joining live webinar:', webinarId);
  };

  const sendChatMessage = () => {
    if (chatMessage.trim()) {
      console.log('Sending message:', chatMessage);
      setChatMessage('');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Webinars & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join expert-led sessions, interact with instructors, and learn alongside peers from around the world.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="recorded">Recordings</TabsTrigger>
            <TabsTrigger value="my-webinars">My Webinars</TabsTrigger>
          </TabsList>

          {/* Upcoming Webinars */}
          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingWebinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={webinar.thumbnail} 
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {webinar.price === 0 ? 'FREE' : `$${webinar.price}`}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{webinar.level}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(webinar.date)}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{webinar.time}</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{webinar.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {webinar.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={webinar.instructor.avatar} />
                          <AvatarFallback>{webinar.instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{webinar.instructor.name}</p>
                          <p className="text-xs text-gray-500">{webinar.instructor.expertise}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{webinar.registered.toLocaleString()} registered</span>
                      </div>
                      <span>{webinar.duration} min</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {webinar.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => handleRegister(webinar.id)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                      >
                        <Bell className="h-4 w-4 mr-2" />
                        Register
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Webinars */}
          <TabsContent value="live" className="space-y-6">
            {liveWebinars.length > 0 ? (
              <div className="space-y-6">
                {liveWebinars.map((webinar) => (
                  <Card key={webinar.id} className="border-red-200 bg-red-50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <Badge className="bg-red-600 text-white">LIVE</Badge>
                          </div>
                          <CardTitle>{webinar.title}</CardTitle>
                        </div>
                        <Button 
                          onClick={() => handleJoinLive(webinar.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          Join Now
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarImage src={webinar.instructor.avatar} />
                            <AvatarFallback>{webinar.instructor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{webinar.instructor.name}</p>
                            <p className="text-sm text-gray-600">Started at {webinar.startedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{webinar.currentAttendees.toLocaleString()} watching</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Live Webinar Interface */}
                {selectedWebinar && (
                  <Card className="mt-6">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-4 h-96">
                        {/* Video Area */}
                        <div className="lg:col-span-3 bg-black relative">
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center">
                              <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                              <p>Live Video Stream</p>
                            </div>
                          </div>
                          
                          {/* Controls */}
                          <div className="absolute bottom-4 left-4 flex space-x-2">
                            <Button 
                              size="sm"
                              variant={isMuted ? "destructive" : "secondary"}
                              onClick={() => setIsMuted(!isMuted)}
                            >
                              {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                            </Button>
                            <Button 
                              size="sm"
                              variant={isVideoOn ? "secondary" : "destructive"}
                              onClick={() => setIsVideoOn(!isVideoOn)}
                            >
                              {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                            </Button>
                            <Button size="sm" variant="secondary">
                              <Volume2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Chat Area */}
                        <div className="bg-white border-l flex flex-col">
                          <div className="p-4 border-b">
                            <h3 className="font-semibold flex items-center">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Live Chat
                            </h3>
                          </div>
                          
                          <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {chatMessages.map((msg) => (
                              <div key={msg.id} className="text-sm">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-medium text-blue-600">{msg.user}</span>
                                  <span className="text-xs text-gray-500">{msg.time}</span>
                                </div>
                                <p className="text-gray-700">{msg.message}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="p-4 border-t">
                            <div className="flex space-x-2">
                              <Input
                                placeholder="Type a message..."
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                                className="flex-1"
                              />
                              <Button size="sm" onClick={sendChatMessage}>
                                <Send className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Live Webinars</h3>
                  <p className="text-gray-600">
                    There are no live webinars at the moment. Check back later or browse upcoming sessions.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Recorded Webinars */}
          <TabsContent value="recorded" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recordedWebinars.map((webinar) => (
                <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={webinar.thumbnail} 
                      alt={webinar.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">
                        REPLAY ${webinar.price}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {webinar.duration} min
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{webinar.title}</CardTitle>
                    <CardDescription>
                      by {webinar.instructor} • {formatDate(webinar.date)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{webinar.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {webinar.views.toLocaleString()} views
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Replay
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Webinars */}
          <TabsContent value="my-webinars" className="space-y-6">
            <Card>
              <CardContent className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your Webinar History</h3>
                <p className="text-gray-600 mb-6">
                  View webinars you've registered for, attended, and saved for later.
                </p>
                <Button>
                  <Bell className="h-4 w-4 mr-2" />
                  Set Webinar Notifications
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WebinarSystem;

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  Clock, 
  FileText, 
  Video, 
  Mic,
  MessageSquare,
  User,
  Calendar
} from 'lucide-react';

interface PendingItem {
  id: string;
  type: 'course' | 'blog' | 'podcast' | 'webinar' | 'instructor';
  title: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  content?: string;
  metadata?: any;
}

const ContentApprovalSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedItem, setSelectedItem] = useState<PendingItem | null>(null);
  const [feedback, setFeedback] = useState('');

  const pendingItems: PendingItem[] = [
    {
      id: '1',
      type: 'course',
      title: 'Advanced Options Trading Strategies',
      author: {
        name: 'Dr. Michael Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        role: 'Instructor'
      },
      submittedDate: '2024-01-20',
      status: 'pending',
      content: 'Complete course on advanced options trading with 12 modules covering iron condors, butterflies, and risk management.',
      metadata: { duration: '8 hours', modules: 12, price: 299 }
    },
    {
      id: '2',
      type: 'blog',
      title: 'The Future of Cryptocurrency in 2024',
      author: {
        name: 'Emma Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        role: 'Content Writer'
      },
      submittedDate: '2024-01-19',
      status: 'pending',
      content: 'Comprehensive analysis of cryptocurrency trends and predictions for 2024, including regulatory changes and market outlook.',
      metadata: { readTime: '8 min', category: 'Cryptocurrency' }
    },
    {
      id: '3',
      type: 'podcast',
      title: 'Market Analysis Weekly - Episode 15',
      author: {
        name: 'John Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        role: 'Instructor'
      },
      submittedDate: '2024-01-18',
      status: 'pending',
      content: 'Weekly market analysis covering recent economic indicators and their impact on financial markets.',
      metadata: { duration: '45 min', format: 'MP3' }
    },
    {
      id: '4',
      type: 'webinar',
      title: 'Live Trading Session: Risk Management',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        role: 'Instructor'
      },
      submittedDate: '2024-01-17',
      status: 'pending',
      content: 'Interactive webinar on risk management strategies with live Q&A session.',
      metadata: { scheduledDate: '2024-02-15', duration: '90 min' }
    },
    {
      id: '5',
      type: 'instructor',
      title: 'Instructor Application - David Kim',
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        role: 'Applicant'
      },
      submittedDate: '2024-01-16',
      status: 'pending',
      content: 'Application to become an instructor. 15+ years experience in corporate finance at Fortune 500 companies.',
      metadata: { experience: '15 years', specialization: 'Corporate Finance' }
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <Video className="h-4 w-4" />;
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'podcast': return <Mic className="h-4 w-4" />;
      case 'webinar': return <MessageSquare className="h-4 w-4" />;
      case 'instructor': return <User className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'podcast': return 'bg-purple-100 text-purple-800';
      case 'webinar': return 'bg-orange-100 text-orange-800';
      case 'instructor': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (itemId: string) => {
    console.log('Approving item:', itemId);
    // Handle approval logic
  };

  const handleReject = (itemId: string) => {
    console.log('Rejecting item:', itemId, 'with feedback:', feedback);
    // Handle rejection logic
    setFeedback('');
  };

  const handlePreview = (item: PendingItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Content Approval System</h2>
        <Badge variant="outline" className="text-orange-600 border-orange-200">
          {pendingItems.filter(item => item.status === 'pending').length} Pending
        </Badge>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="pending">Pending ({pendingItems.filter(item => item.status === 'pending').length})</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="instructors">Instructors</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingItems.filter(item => item.status === 'pending').map((item) => (
            <Card key={item.id} className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar>
                      <AvatarImage src={item.author.avatar} />
                      <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getTypeColor(item.type)}>
                          {getTypeIcon(item.type)}
                          <span className="ml-1 capitalize">{item.type}</span>
                        </Badge>
                        <Badge variant="outline" className="text-orange-600 border-orange-200">
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {item.author.name}</span>
                        <span>•</span>
                        <span>{item.author.role}</span>
                        <span>•</span>
                        <span>Submitted {item.submittedDate}</span>
                      </div>
                      {item.metadata && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {Object.entries(item.metadata).map(([key, value]) => (
                            <Badge key={key} variant="secondary" className="text-xs">
                              {key}: {value}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePreview(item)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApprove(item.id)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleReject(item.id)}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="courses">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Course approval interface will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blogs">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Blog approval interface will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Media approval interface will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructors">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Instructor approval interface will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Preview Modal */}
      {selectedItem && (
        <Card className="fixed inset-4 z-50 bg-white shadow-2xl overflow-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Preview: {selectedItem.title}</CardTitle>
            <Button variant="ghost" onClick={() => setSelectedItem(null)}>
              <XCircle className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Content Preview</h4>
              <p>{selectedItem.content}</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Feedback (for rejection)</h4>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Provide feedback for rejection..."
                rows={3}
              />
            </div>

            <div className="flex space-x-2">
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  handleApprove(selectedItem.id);
                  setSelectedItem(null);
                }}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => {
                  handleReject(selectedItem.id);
                  setSelectedItem(null);
                }}
              >
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentApprovalSystem;
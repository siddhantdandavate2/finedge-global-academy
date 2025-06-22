import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  BarChart3,
  FileText,
  MessageSquare,
  Settings,
  Eye,
  Send,
  Bell
} from 'lucide-react';
import ContentApprovalSystem from '@/components/admin/ContentApprovalSystem';
import NotificationSystem from '@/components/notifications/NotificationSystem';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [announcement, setAnnouncement] = useState('');

  const stats = [
    {
      title: 'Total Users',
      value: '125,432',
      change: '+12.5%',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Courses',
      value: '1,247',
      change: '+8.2%',
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+15.3%',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Course Completion',
      value: '87%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const recentActivity = [
    {
      id: '1',
      action: 'Course approved',
      details: 'Financial Modeling Masterclass by Dr. Sarah Johnson',
      time: '10 minutes ago',
      type: 'approval'
    },
    {
      id: '2',
      action: 'New user registered',
      details: 'Alex Rodriguez joined as Student',
      time: '25 minutes ago',
      type: 'registration'
    },
    {
      id: '3',
      action: 'Payment processed',
      details: '$299 course purchase by Lisa Chen',
      time: '1 hour ago',
      type: 'payment'
    },
    {
      id: '4',
      action: 'Blog post published',
      details: 'Risk Management Strategies by Michael Brown',
      time: '2 hours ago',
      type: 'content'
    }
  ];

  const userManagement = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Instructor',
      status: 'Active',
      joinDate: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      role: 'Student',
      status: 'Active',
      joinDate: '2024-01-18',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      email: 'emma@example.com',
      role: 'Content Writer',
      status: 'Pending',
      joinDate: '2024-01-20',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
    }
  ];

  const handleSendAnnouncement = () => {
    if (announcement.trim()) {
      console.log('Sending announcement:', announcement);
      // Handle announcement sending logic
      setAnnouncement('');
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    console.log(`${action} user:`, userId);
    // Handle user management actions
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your platform and monitor performance</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest platform activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-1 rounded-full ${
                        activity.type === 'approval' ? 'bg-green-100' :
                        activity.type === 'registration' ? 'bg-blue-100' :
                        activity.type === 'payment' ? 'bg-yellow-100' : 'bg-purple-100'
                      }`}>
                        {activity.type === 'approval' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        {activity.type === 'registration' && <Users className="h-4 w-4 text-blue-600" />}
                        {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-yellow-600" />}
                        {activity.type === 'content' && <FileText className="h-4 w-4 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-gray-600">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Platform Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Send Announcement
                  </CardTitle>
                  <CardDescription>Send platform-wide notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="Type your announcement here..."
                    rows={4}
                  />
                  <Button 
                    onClick={handleSendAnnouncement}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!announcement.trim()}
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send to All Users
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <ContentApprovalSystem />
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userManagement.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{user.name}</h4>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline">{user.role}</Badge>
                            <Badge className={user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                              {user.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, 'promote')}>
                          Promote
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleUserAction(user.id, 'reset')}>
                          Reset Password
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => handleUserAction(user.id, 'ban')}
                        >
                          Ban
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Manage courses, blogs, webinars, and other content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Advanced content management interface will be implemented here</p>
                  <p className="text-sm text-gray-400">Manage categories, tags, featured content, and moderation</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>View detailed analytics and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Comprehensive analytics dashboard will be implemented here</p>
                  <p className="text-sm text-gray-400">Revenue tracking, user engagement, course performance, and SEO metrics</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform-wide settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Platform configuration interface will be implemented here</p>
                  <p className="text-sm text-gray-400">Payment settings, email templates, security policies, and more</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
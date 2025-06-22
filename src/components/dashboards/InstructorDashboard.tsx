
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, 
  Video, 
  DollarSign, 
  Users, 
  Calendar,
  Mic,
  Edit,
  Eye,
  BarChart3,
  Plus,
  Upload,
  Play,
  Clock,
  MessageSquare,
  FileText,
  Settings
} from 'lucide-react';

const InstructorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Students', value: '2,847', icon: Users, color: 'blue' },
    { title: 'Active Courses', value: '12', icon: BookOpen, color: 'green' },
    { title: 'Revenue', value: '$18,420', icon: DollarSign, color: 'yellow' },
    { title: 'Course Rating', value: '4.8★', icon: BarChart3, color: 'purple' }
  ];

  const courses = [
    {
      id: '1',
      title: 'Advanced Financial Modeling',
      students: 1247,
      revenue: '$12,470',
      rating: 4.9,
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop'
    },
    {
      id: '2',
      title: 'Investment Banking Fundamentals',
      students: 856,
      revenue: '$8,560',
      rating: 4.7,
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=120&fit=crop'
    },
    {
      id: '3',
      title: 'Risk Management Strategies',
      students: 0,
      revenue: '$0',
      rating: 0,
      status: 'draft',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop'
    }
  ];

  const webinars = [
    {
      id: '1',
      title: 'Market Analysis Workshop',
      date: '2024-02-15',
      time: '14:00',
      attendees: 145,
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'Options Trading Masterclass',
      date: '2024-02-20',
      time: '16:00',
      attendees: 89,
      status: 'scheduled'
    }
  ];

  const recentStudents = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      course: 'Advanced Financial Modeling',
      progress: 75,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob@example.com',
      course: 'Investment Banking Fundamentals',
      progress: 45,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Instructor Dashboard</h1>
          <p className="text-gray-600">Manage your courses, students, and revenue</p>
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
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription>Overview of your published courses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={course.thumbnail} alt={course.title} className="w-12 h-8 object-cover rounded" />
                        <div>
                          <p className="font-medium text-sm">{course.title}</p>
                          <p className="text-xs text-gray-500">{course.students} students</p>
                        </div>
                      </div>
                      <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                  <CardDescription>Latest student enrollments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{student.name}</p>
                          <p className="text-xs text-gray-500">{student.course}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{student.progress}%</p>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <Badge 
                      className="absolute top-2 right-2"
                      variant={course.status === 'published' ? 'default' : 'secondary'}
                    >
                      {course.status}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{course.students} students</span>
                      <span>{course.rating}★</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-lg font-bold text-green-600">{course.revenue}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage your enrolled students and their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-gray-500">{student.email}</p>
                          <p className="text-sm text-gray-500">Course: {student.course}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">Progress: {student.progress}%</p>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Webinar Management</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Webinar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webinars.map((webinar) => (
                <Card key={webinar.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {webinar.title}
                      <Badge variant="outline">{webinar.status}</Badge>
                    </CardTitle>
                    <CardDescription>
                      {webinar.date} at {webinar.time}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{webinar.attendees} registered</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Play className="h-4 w-4 mr-1" />
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="podcasts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Podcast Management</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Mic className="h-4 w-4 mr-2" />
                Upload Podcast
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upload New Podcast</CardTitle>
                <CardDescription>Share your finance expertise through podcasts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="podcast-title">Podcast Title</Label>
                  <Input id="podcast-title" placeholder="Enter podcast title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="podcast-description">Description</Label>
                  <Textarea id="podcast-description" placeholder="Describe your podcast episode" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="podcast-file">Audio File</Label>
                  <Input id="podcast-file" type="file" accept="audio/*" />
                </div>
                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Podcast
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Track your teaching performance and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Detailed analytics dashboard will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstructorDashboard;

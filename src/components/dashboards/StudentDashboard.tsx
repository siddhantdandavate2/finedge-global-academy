
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  Award, 
  Clock,
  Star,
  Download,
  MessageSquare,
  Calendar,
  Bookmark,
  TrendingUp,
  Target,
  CheckCircle
} from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledCourses = [
    {
      id: '1',
      title: 'Advanced Financial Modeling',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop',
      rating: 4.9,
      lastWatched: 'Chapter 5: DCF Models',
      certificate: false
    },
    {
      id: '2',
      title: 'Investment Banking Fundamentals',
      instructor: 'Michael Chen',
      progress: 100,
      totalLessons: 18,
      completedLessons: 18,
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=200&h=120&fit=crop',
      rating: 4.8,
      lastWatched: 'Course Completed',
      certificate: true
    },
    {
      id: '3',
      title: 'Risk Management Strategies',
      instructor: 'Emma Thompson',
      progress: 45,
      totalLessons: 20,
      completedLessons: 9,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop',
      rating: 4.7,
      lastWatched: 'Chapter 3: Market Risk',
      certificate: false
    }
  ];

  const certificates = [
    {
      id: '1',
      courseName: 'Investment Banking Fundamentals',
      instructor: 'Michael Chen',
      completedDate: '2024-01-15',
      credentialId: 'FE-IB-2024-001'
    }
  ];

  const upcomingWebinars = [
    {
      id: '1',
      title: 'Market Analysis Workshop',
      instructor: 'Dr. Sarah Johnson',
      date: '2024-02-15',
      time: '14:00 UTC',
      registered: true
    },
    {
      id: '2',
      title: 'Options Trading Masterclass',
      instructor: 'Michael Chen',
      date: '2024-02-20',
      time: '16:00 UTC',
      registered: false
    }
  ];

  const learningStats = [
    { title: 'Courses Enrolled', value: '3', icon: BookOpen },
    { title: 'Courses Completed', value: '1', icon: CheckCircle },
    { title: 'Certificates Earned', value: '1', icon: Award },
    { title: 'Learning Hours', value: '47', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-gray-600">Continue your finance learning journey</p>
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {learningStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-full bg-blue-100">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {enrolledCourses.slice(0, 2).map((course) => (
                      <div key={course.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{course.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{course.instructor}</p>
                          <div className="flex items-center space-x-2">
                            <Progress value={course.progress} className="flex-1 h-2" />
                            <span className="text-xs text-gray-500">{course.progress}%</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Last: {course.lastWatched}</p>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Goals</CardTitle>
                  <CardDescription>Your progress this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Study Hours</span>
                      <span>12/20 hours</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Lessons Completed</span>
                      <span>8/15 lessons</span>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>2/3 courses</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Webinars</CardTitle>
                <CardDescription>Don't miss these live sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWebinars.map((webinar) => (
                    <div key={webinar.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{webinar.title}</h4>
                        <p className="text-sm text-gray-500">by {webinar.instructor}</p>
                        <p className="text-sm text-gray-600">{webinar.date} at {webinar.time}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant={webinar.registered ? "outline" : "default"}
                        className={webinar.registered ? "" : "bg-green-600 hover:bg-green-700"}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        {webinar.registered ? 'Registered' : 'Register'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    {course.certificate && (
                      <Badge className="absolute top-2 right-2 bg-green-600">
                        <Award className="h-3 w-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>by {course.instructor}</CardDescription>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Play className="h-4 w-4 mr-1" />
                          Continue
                        </Button>
                        {course.certificate && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>Your earned certificates and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                {certificates.length > 0 ? (
                  <div className="space-y-4">
                    {certificates.map((cert) => (
                      <div key={cert.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-green-100 rounded-full">
                            <Award className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">{cert.courseName}</h4>
                            <p className="text-sm text-gray-500">Instructor: {cert.instructor}</p>
                            <p className="text-sm text-gray-500">Completed: {cert.completedDate}</p>
                            <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            Share
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No certificates earned yet</p>
                    <p className="text-sm text-gray-400">Complete a course to earn your first certificate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="webinars" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Webinars & Live Sessions</CardTitle>
                <CardDescription>Join live sessions with expert instructors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingWebinars.map((webinar) => (
                    <div key={webinar.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{webinar.title}</h4>
                        <p className="text-sm text-gray-500">Instructor: {webinar.instructor}</p>
                        <p className="text-sm text-gray-600">{webinar.date} at {webinar.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {webinar.registered && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Registered
                          </Badge>
                        )}
                        <Button 
                          size="sm" 
                          variant={webinar.registered ? "outline" : "default"}
                          className={webinar.registered ? "" : "bg-green-600 hover:bg-green-700"}
                        >
                          <Calendar className="h-4 w-4 mr-1" />
                          {webinar.registered ? 'Join' : 'Register'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your overall learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Detailed progress analytics will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;

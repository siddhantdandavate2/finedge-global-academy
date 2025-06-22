import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Star, 
  Play, 
  Clock,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Video,
  FileText,
  BarChart3
} from 'lucide-react';

const featuredCourses = [
  {
    id: '1',
    title: 'Advanced Financial Modeling',
    instructor: 'Dr. Sarah Johnson',
    instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    price: '$199',
    originalPrice: '$299',
    rating: 4.8,
    students: 12500,
    duration: '8 hours',
    level: 'Advanced',
    category: 'Financial Modeling'
  },
  {
    id: '2',
    title: 'Investment Banking Fundamentals',
    instructor: 'Michael Chen',
    instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop',
    price: '$149',
    originalPrice: '$199',
    rating: 4.9,
    students: 8600,
    duration: '12 hours',
    level: 'Intermediate',
    category: 'Investment Banking'
  },
  {
    id: '3',
    title: 'Risk Management Strategies',
    instructor: 'Emma Thompson',
    instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    price: '$179',
    originalPrice: '$249',
    rating: 4.7,
    students: 5400,
    duration: '10 hours',
    level: 'Advanced',
    category: 'Risk Management'
  },
];

const featuredInstructors = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    title: 'Former Goldman Sachs VP',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    students: 45000,
    courses: 12,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Ex-Morgan Stanley Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    students: 32000,
    courses: 8,
    rating: 4.8
  },
  {
    id: '3',
    name: 'Emma Thompson',
    title: 'Risk Management Expert',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    students: 28000,
    courses: 15,
    rating: 4.9
  },
];

const testimonials = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'Investment Analyst',
    company: 'JPMorgan Chase',
    content: 'Finedge transformed my career. The practical knowledge I gained helped me secure my dream job in investment banking.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '2',
    name: 'Lisa Chen',
    role: 'Portfolio Manager',
    company: 'BlackRock',
    content: 'The quality of instruction and real-world applications are unmatched. Highly recommend for finance professionals.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Financial Advisor',
    company: 'Morgan Stanley',
    content: 'The AI tutoring feature made complex concepts easy to understand. Best investment in my professional development.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
];

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  🚀 AI-Powered Learning with Full LMS Features
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Master Finance with 
                  <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                    {" "}Enterprise-Grade
                  </span>
                  {" "}LMS Platform
                </h1>
                <p className="text-xl text-blue-100 max-w-2xl">
                  Complete Learning Management System with AI tutoring, live webinars, 
                  comprehensive dashboards, blog system, and professional certificates. 
                  Join 100,000+ finance professionals worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-3">
                  Start Learning Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-blue-200 text-sm">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Expert Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Financial Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">AI Tutor Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-800">Certificate Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete LMS Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade Learning Management System with AI integration, 
              role-based dashboards, and comprehensive content management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Interactive AI tutor embedded in every course with contextual help, 
                  explanations, and personalized learning assistance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Role-Based Dashboards</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Dedicated dashboards for Admin, Instructor, Student, Content Writer, 
                  and Blogger with role-specific features and permissions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Live Webinars & Podcasts</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Interactive live sessions with Q&A, chat, and recording capabilities. 
                  Podcast hosting and management system.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Content Management System</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Full blog system with rich editor, SEO optimization, approval workflows, 
                  and content writer collaboration tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Professional Certificates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Auto-generated, verifiable certificates with QR codes, 
                  LinkedIn integration, and blockchain verification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Comprehensive analytics for learning progress, content performance, 
                  revenue tracking, and user engagement metrics.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-xl text-gray-600">
                Master in-demand skills with our most popular courses
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/courses">
                View All Courses
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{course.category}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={course.instructorAvatar} />
                      <AvatarFallback>{course.instructor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry veterans who've worked at the world's leading financial institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredInstructors.map((instructor) => (
              <Card key={instructor.id} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="relative mx-auto mb-4">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarImage src={instructor.avatar} />
                      <AvatarFallback className="text-xl">{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ★ {instructor.rating}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {instructor.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{instructor.students.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{instructor.courses}</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who've transformed their careers with Finedge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role} at {testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready for Enterprise-Grade Finance Education?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive LMS platform with AI tutoring, live webinars, 
            professional certificates, and role-based learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/register">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Features
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">5 Roles</div>
              <div className="text-blue-200 text-sm">Complete Dashboards</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">AI Tutor</div>
              <div className="text-blue-200 text-sm">Every Course</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Live</div>
              <div className="text-blue-200 text-sm">Webinars &amp; Q&amp;A</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Verified</div>
              <div className="text-blue-200 text-sm">Certificates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

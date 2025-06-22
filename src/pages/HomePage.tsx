import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Play, 
  Users, 
  BookOpen, 
  Award, 
  Star, 
  ArrowRight,
  TrendingUp,
  Globe,
  Moon,
  Sun,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  const featuredCourses = [
    {
      id: '1',
      title: 'Advanced Financial Modeling',
      instructor: 'Dr. Sarah Johnson',
      rating: 4.9,
      students: 12847,
      price: 299,
      originalPrice: 499,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
      youtubePreview: 'dQw4w9WgXcQ', // Demo YouTube ID
      duration: '12 hours',
      level: 'Advanced'
    },
    {
      id: '2',
      title: 'Investment Banking Fundamentals',
      instructor: 'Michael Chen',
      rating: 4.8,
      students: 8965,
      price: 199,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      youtubePreview: 'dQw4w9WgXcQ',
      duration: '8 hours',
      level: 'Intermediate'
    },
    {
      id: '3',
      title: 'Cryptocurrency Trading Strategies',
      instructor: 'Emma Rodriguez',
      rating: 4.7,
      students: 15632,
      price: 149,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop',
      youtubePreview: 'dQw4w9WgXcQ',
      duration: '6 hours',
      level: 'Beginner'
    }
  ];

  const categories = [
    { name: 'Investment Banking', courses: 45, icon: '🏦' },
    { name: 'Personal Finance', courses: 32, icon: '💰' },
    { name: 'Cryptocurrency', courses: 28, icon: '₿' },
    { name: 'Risk Management', courses: 23, icon: '📊' },
    { name: 'Trading', courses: 19, icon: '📈' },
    { name: 'Financial Planning', courses: 16, icon: '📋' }
  ];

  const instructors = [
    {
      name: 'Dr. Sarah Johnson',
      expertise: 'Financial Modeling Expert',
      students: 25000,
      courses: 12,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      expertise: 'Investment Banking Specialist',
      students: 18500,
      courses: 8,
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emma Rodriguez',
      expertise: 'Crypto & Trading Analyst',
      students: 22000,
      courses: 15,
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Investment Analyst at Goldman Sachs',
      content: 'Finedge completely transformed my understanding of financial modeling. The practical exercises and real-world examples helped me excel in my career.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Portfolio Manager',
      content: 'The quality of instruction and depth of content is unmatched. I\'ve taken courses from multiple platforms, but Finedge stands out.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'David Kumar',
      role: 'Finance Director',
      content: 'From beginner to advanced, Finedge has courses for every level. The instructors are industry experts who know how to teach complex concepts simply.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Students Worldwide', value: '250K+', icon: Users },
    { label: 'Expert Instructors', value: '150+', icon: Award },
    { label: 'Courses Available', value: '500+', icon: BookOpen },
    { label: 'Countries Reached', value: '180+', icon: Globe }
  ];

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // Show success message
  };

  const handleEnrollClick = (course: any) => {
    // Redirect to payment page with course data
    navigate(`/course/${course.id}/payment`, { 
      state: { course } 
    });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Master Finance with 
                <span className="block text-yellow-400">World-Class Experts</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join 250,000+ professionals who've advanced their careers with our comprehensive finance courses, 
                expert-led webinars, and AI-powered learning assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Average Rating</span>
                </div>
                <div>
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Financial Dashboard" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-semibold">98% Course Completion Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses with YouTube Teasers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hover over courses to preview content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card 
                key={course.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="relative">
                  {hoveredCourse === course.id ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${course.youtubePreview}?autoplay=1&mute=1`}
                        className="w-full h-full"
                        allow="autoplay"
                      />
                    </div>
                  ) : (
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">
                      {course.level}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Play className="h-12 w-12 text-white bg-black/50 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                  </div>
                  <CardDescription>by {course.instructor}</CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <span>{course.students.toLocaleString()} students</span>
                    <span>{course.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                      <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <Button onClick={() => handleEnrollClick(course)}>
                      Enroll Now
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore finance topics that matter to your career
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {category.courses} courses
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn from Industry Experts</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our instructors bring decades of real-world experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={instructor.avatar} />
                    <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{instructor.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">{instructor.expertise}</p>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{instructor.students.toLocaleString()}</div>
                      <div className="text-gray-600 dark:text-gray-300">Students</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{instructor.courses}</div>
                      <div className="text-gray-600 dark:text-gray-300">Courses</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white flex items-center justify-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {instructor.rating}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/instructors">
              <Button size="lg" variant="outline">
                Meet All Instructors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-blue-100">
              Join thousands of professionals who've transformed their careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                  <p className="mb-4 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-blue-200">{testimonial.role}</div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Market</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get weekly insights, new course announcements, and exclusive finance tips delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900"
              required
            />
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="text-sm mt-4 text-blue-100">
            Join 50,000+ finance professionals. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsDarkMode(!isDarkMode)}
          size="sm"
          className="rounded-full w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play,
  Search,
  Filter,
  DollarSign,
  Award,
  TrendingUp
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CoursesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const categories = [
    'Investment Banking',
    'Financial Modeling',
    'Risk Management',
    'Trading',
    'Corporate Finance',
    'Accounting',
    'Economics',
    'Cryptocurrency'
  ];

  const courses = [
    {
      id: '1',
      title: 'Advanced Financial Modeling',
      instructor: 'Dr. Sarah Johnson',
      description: 'Master Excel-based financial modeling with real-world case studies and DCF analysis.',
      category: 'Financial Modeling',
      level: 'Advanced',
      duration: '12 hours',
      students: 1247,
      rating: 4.9,
      reviews: 234,
      price: 199,
      originalPrice: 299,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop',
      bestseller: true,
      featured: true
    },
    {
      id: '2',
      title: 'Investment Banking Fundamentals',
      instructor: 'Michael Chen',
      description: 'Complete guide to investment banking, M&A, and capital markets.',
      category: 'Investment Banking',
      level: 'Intermediate',
      duration: '8 hours',
      students: 856,
      rating: 4.8,
      reviews: 167,
      price: 149,
      originalPrice: 229,
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop',
      bestseller: false,
      featured: true
    },
    {
      id: '3',
      title: 'Risk Management Strategies',
      instructor: 'Emma Thompson',
      description: 'Learn comprehensive risk assessment and mitigation strategies.',
      category: 'Risk Management',
      level: 'Intermediate',
      duration: '10 hours',
      students: 643,
      rating: 4.7,
      reviews: 89,
      price: 129,
      originalPrice: 199,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      bestseller: false,
      featured: false
    },
    {
      id: '4',
      title: 'Cryptocurrency Trading Mastery',
      instructor: 'Alex Rodriguez',
      description: 'Master crypto trading strategies, technical analysis, and portfolio management.',
      category: 'Cryptocurrency',
      level: 'Beginner',
      duration: '6 hours',
      students: 445,
      rating: 4.6,
      reviews: 67,
      price: 99,
      originalPrice: 149,
      thumbnail: 'https://images.unsplash.com/photo-1518544866477-3f3db0cd4aef?w=400&h=225&fit=crop',
      bestseller: true,
      featured: false
    },
    {
      id: '5',
      title: 'Corporate Finance Essentials',
      instructor: 'Dr. Jennifer Wang',
      description: 'Essential corporate finance concepts for business professionals.',
      category: 'Corporate Finance',
      level: 'Beginner',
      duration: '7 hours',
      students: 523,
      rating: 4.5,
      reviews: 78,
      price: 89,
      originalPrice: 139,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop',
      bestseller: false,
      featured: false
    },
    {
      id: '6',
      title: 'Options Trading Strategy',
      instructor: 'Robert Kim',
      description: 'Advanced options trading strategies and risk management techniques.',
      category: 'Trading',
      level: 'Advanced',
      duration: '9 hours',
      students: 312,
      rating: 4.8,
      reviews: 45,
      price: 179,
      originalPrice: 249,
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop',
      bestseller: false,
      featured: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesPrice = selectedPrice === 'all' || 
                        (selectedPrice === 'free' && course.price === 0) ||
                        (selectedPrice === 'paid' && course.price > 0) ||
                        (selectedPrice === 'under100' && course.price < 100) ||
                        (selectedPrice === 'under200' && course.price < 200);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  const handleEnrollClick = (course: any) => {
    // Redirect to payment page with course data
    navigate(`/course/${course.id}/payment`, { 
      state: { course } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finance Courses</h1>
          <p className="text-xl text-gray-600">
            Master finance with expert-led courses from industry professionals
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold">{courses.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold">{courses.reduce((sum, course) => sum + course.students, 0).toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Expert Instructors</p>
                  <p className="text-2xl font-bold">25+</p>
                </div>
                <Award className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold">4.7★</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="under100">Under $100</SelectItem>
                  <SelectItem value="under200">Under $200</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSelectedPrice('all');
              }}>
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.bestseller && (
                  <Badge className="absolute top-2 left-2 bg-red-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Bestseller
                  </Badge>
                )}
                {course.featured && (
                  <Badge className="absolute top-2 right-2 bg-blue-600">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {course.category}
                  </Badge>
                  <Badge variant="outline">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <CardDescription>by {course.instructor}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {course.rating} ({course.reviews})
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">
                      ${course.price}
                    </span>
                    {course.originalPrice > course.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleEnrollClick(course)}
                  >
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;

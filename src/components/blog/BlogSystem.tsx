
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Eye, 
  MessageSquare, 
  Share2,
  Clock,
  TrendingUp,
  Bookmark,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight
} from 'lucide-react';

const BlogSystem: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const blogPosts = [
    {
      id: '1',
      title: '5 Common Investment Mistakes to Avoid in 2024',
      excerpt: 'Learn about the most frequent pitfalls that can derail your investment strategy and how to avoid them.',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        role: 'Investment Strategist'
      },
      category: 'Investing',
      publishedDate: '2024-01-20',
      readTime: '6 min read',
      views: 3421,
      likes: 87,
      comments: 23,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'The Rise of Sustainable Finance: ESG Investing Guide',
      excerpt: 'Discover how Environmental, Social, and Governance factors are reshaping the investment landscape.',
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        role: 'ESG Analyst'
      },
      category: 'Sustainable Finance',
      publishedDate: '2024-01-18',
      readTime: '8 min read',
      views: 2847,
      likes: 62,
      comments: 18,
      featured: true,
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Understanding Cryptocurrency Market Volatility',
      excerpt: 'A deep dive into the factors that drive crypto price movements and how to navigate this volatile market.',
      author: {
        name: 'Emma Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        role: 'Crypto Analyst'
      },
      category: 'Cryptocurrency',
      publishedDate: '2024-01-15',
      readTime: '10 min read',
      views: 4123,
      likes: 94,
      comments: 31,
      featured: false,
      thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop'
    },
    {
      id: '4',
      title: 'Personal Finance Budgeting Strategies for Professionals',
      excerpt: 'Practical budgeting techniques tailored for busy professionals looking to optimize their finances.',
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        role: 'Financial Planner'
      },
      category: 'Personal Finance',
      publishedDate: '2024-01-12',
      readTime: '7 min read',
      views: 2156,
      likes: 45,
      comments: 12,
      featured: false,
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop'
    }
  ];

  const categories = [
    'Investing',
    'Personal Finance',
    'Cryptocurrency',
    'Sustainable Finance',
    'Trading',
    'Banking',
    'FinTech',
    'Career'
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finance Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and strategies in finance from our expert contributors.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={post.id} className={`overflow-hidden hover:shadow-xl transition-shadow ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className="relative">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className={`w-full object-cover ${index === 0 ? 'h-64' : 'h-48'}`}
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600">
                      Featured
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-white text-gray-800">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedDate)}</span>
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className={`hover:text-blue-600 transition-colors cursor-pointer ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{post.author.name}</p>
                            <p className="text-xs text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-gray-800">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedDate)}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-12 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Get the latest finance insights and market analysis delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-gray-900"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogSystem;

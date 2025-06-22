
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Users, 
  BookOpen, 
  Award,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

const InstructorsPage: React.FC = () => {
  const instructors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      title: 'Senior Investment Banker',
      company: 'Goldman Sachs',
      bio: 'Former VP at Goldman Sachs with 15+ years in investment banking. Expert in M&A, capital markets, and financial modeling.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.9,
      students: 12847,
      courses: 8,
      specialties: ['Investment Banking', 'Financial Modeling', 'M&A'],
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      website: 'https://sarahjohnson.com'
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Quantitative Analyst',
      company: 'JPMorgan Chase',
      bio: 'Quantitative analyst with expertise in risk management, derivatives pricing, and algorithmic trading strategies.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      students: 9563,
      courses: 6,
      specialties: ['Risk Management', 'Derivatives', 'Algorithmic Trading'],
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: null,
      website: null
    },
    {
      id: '3',
      name: 'Emma Thompson',
      title: 'Portfolio Manager',
      company: 'BlackRock',
      bio: 'Portfolio manager specializing in fixed income and alternative investments with 12 years of experience.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 4.7,
      students: 7234,
      courses: 5,
      specialties: ['Portfolio Management', 'Fixed Income', 'Alternative Investments'],
      linkedin: 'https://linkedin.com/in/emmathompson',
      twitter: 'https://twitter.com/emmathompson',
      website: 'https://emmathompson.com'
    },
    {
      id: '4',
      name: 'Alex Rodriguez',
      title: 'Crypto Trading Expert',
      company: 'Coinbase',
      bio: 'Former institutional trader at Coinbase, specializing in cryptocurrency markets and DeFi protocols.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.6,
      students: 5678,
      courses: 4,
      specialties: ['Cryptocurrency', 'DeFi', 'Technical Analysis'],
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      twitter: 'https://twitter.com/alexrodriguez',
      website: null
    },
    {
      id: '5',
      name: 'Dr. Jennifer Wang',
      title: 'Corporate Finance Director',
      company: 'Apple Inc.',
      bio: 'Corporate finance director with extensive experience in capital budgeting, valuation, and strategic planning.',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      rating: 4.5,
      students: 4321,
      courses: 3,
      specialties: ['Corporate Finance', 'Valuation', 'Strategic Planning'],
      linkedin: 'https://linkedin.com/in/jenniferwang',
      twitter: null,
      website: 'https://jenniferwang.com'
    },
    {
      id: '6',
      name: 'Robert Kim',
      title: 'Options Trading Specialist',
      company: 'Interactive Brokers',
      bio: 'Professional options trader with 20+ years experience. Expert in volatility trading and options strategies.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      students: 3456,
      courses: 7,
      specialties: ['Options Trading', 'Volatility Trading', 'Risk Management'],
      linkedin: 'https://linkedin.com/in/robertkim',
      twitter: 'https://twitter.com/robertkim',
      website: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert Instructors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry professionals with decades of experience at top financial institutions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">25+</p>
              <p className="text-sm text-gray-600">Expert Instructors</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">50K+</p>
              <p className="text-sm text-gray-600">Students Taught</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-600">Courses Created</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">4.7★</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={instructor.avatar} alt={instructor.name} />
                  <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <CardDescription className="text-center">
                  <p className="font-medium">{instructor.title}</p>
                  <p className="text-sm text-blue-600">{instructor.company}</p>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 text-center">
                  {instructor.bio}
                </p>
                
                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-blue-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.students.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-gray-500">Students</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <BookOpen className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm font-bold">{instructor.courses}</span>
                    </div>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4 border-t">
                  {instructor.linkedin && (
                    <a 
                      href={instructor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {instructor.twitter && (
                    <a 
                      href={instructor.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {instructor.website && (
                    <a 
                      href={instructor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;

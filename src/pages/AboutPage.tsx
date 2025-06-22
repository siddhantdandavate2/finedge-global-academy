
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Users, 
  Award,
  TrendingUp,
  Shield,
  Globe,
  BookOpen,
  Star,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '50,000+', color: 'blue' },
    { icon: BookOpen, label: 'Expert Courses', value: '500+', color: 'green' },
    { icon: Award, label: 'Certified Instructors', value: '100+', color: 'purple' },
    { icon: Globe, label: 'Countries Served', value: '150+', color: 'red' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Education',
      description: 'We provide world-class financial education with industry-leading content and expert instructors.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Our platform maintains the highest standards of security and ethical practices in financial education.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'We empower learners to advance their careers and achieve their professional goals in finance.'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Making premium financial education accessible to professionals worldwide, regardless of location.'
    }
  ];

  const features = [
    'Industry-Expert Instructors from Top Financial Institutions',
    'Hands-on Projects with Real-World Case Studies',
    'Interactive AI Tutoring for Personalized Learning',
    'Professional Certificates Recognized by Industry',
    'Live Webinars and Interactive Q&A Sessions',
    'Mobile-Optimized Learning Platform',
    'Career Support and Networking Opportunities',
    '24/7 Technical Support and Student Assistance'
  ];

  const team = [
    {
      name: 'James Mitchell',
      role: 'CEO & Founder',
      bio: 'Former Managing Director at Morgan Stanley with 20+ years in investment banking.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Chen',
      role: 'Head of Education',
      bio: 'Former VP of Learning & Development at Goldman Sachs, PhD in Finance Education.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Former Lead Engineer at Google, specializing in EdTech and AI-powered learning platforms.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Finedge</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Finedge is the world's premier online learning platform for finance professionals. 
            We bridge the gap between academic theory and real-world practice, providing 
            cutting-edge financial education from industry experts at top-tier institutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${stat.color}-100 mb-4`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to world-class financial education by connecting learners 
                with industry experts, providing practical skills that drive career advancement 
                and professional success in the global finance industry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To become the global standard for professional financial education, empowering 
                the next generation of finance leaders with the knowledge, skills, and network 
                needed to excel in an ever-evolving financial landscape.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Sets Us Apart</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company History */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Journey</CardTitle>
            <CardDescription className="text-center">
              From startup to global leader in financial education
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Badge className="bg-blue-600 text-white px-3 py-1">2019</Badge>
                <div>
                  <h4 className="font-semibold text-gray-900">Founded</h4>
                  <p className="text-gray-600">Finedge was founded with the vision of democratizing financial education.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="bg-green-600 text-white px-3 py-1">2020</Badge>
                <div>
                  <h4 className="font-semibold text-gray-900">First 1,000 Students</h4>
                  <p className="text-gray-600">Reached our first milestone with expert instructors from top-tier firms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="bg-purple-600 text-white px-3 py-1">2022</Badge>
                <div>
                  <h4 className="font-semibold text-gray-900">AI Integration</h4>
                  <p className="text-gray-600">Launched AI-powered tutoring system for personalized learning experiences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Badge className="bg-red-600 text-white px-3 py-1">2024</Badge>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Expansion</h4>
                  <p className="text-gray-600">Serving 50,000+ students across 150+ countries with 500+ expert courses.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Join the Finedge Community</h2>
              <p className="text-xl mb-6 opacity-90">
                Take your finance career to the next level with industry-leading education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Browse Courses
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Become an Instructor
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

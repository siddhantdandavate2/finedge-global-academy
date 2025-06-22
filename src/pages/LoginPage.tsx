
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  AlertCircle,
  CheckCircle,
  Users,
  Shield,
  PenTool,
  MessageSquare,
  User
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const demoCredentials = [
    { 
      role: 'admin', 
      email: 'admin@finedge.com', 
      password: 'admin123', 
      icon: Shield,
      description: 'Full platform management access'
    },
    { 
      role: 'instructor', 
      email: 'instructor@finedge.com', 
      password: 'instructor123', 
      icon: Users,
      description: 'Create courses, webinars, and content'
    },
    { 
      role: 'student', 
      email: 'student@finedge.com', 
      password: 'student123', 
      icon: User,
      description: 'Access courses and learning materials'
    },
    { 
      role: 'content-writer', 
      email: 'writer@finedge.com', 
      password: 'writer123', 
      icon: PenTool,
      description: 'Create and manage educational content'
    },
    { 
      role: 'blogger', 
      email: 'blogger@finedge.com', 
      password: 'blogger123', 
      icon: MessageSquare,
      description: 'Write and publish blog articles'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (credentials: { email: string; password: string }) => {
    setEmail(credentials.email);
    setPassword(credentials.password);
    setError('');
    setIsLoading(true);

    try {
      const success = await login(credentials.email, credentials.password);
      if (success) {
        navigate('/');
      } else {
        setError('Demo login failed. Please try again.');
      }
    } catch (err) {
      setError('Demo login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Finedge
              </span>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome Back to Your Finance Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Continue learning with world-class finance courses, expert instructors, and AI-powered assistance.
            </p>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">250K+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-sm text-gray-600">Instructors</div>
            </div>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/50 border-white/20">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4 italic">
                "Finedge transformed my understanding of financial markets. The courses are practical, 
                engaging, and taught by industry experts."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Investment Analyst</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center space-y-6">
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center">
              <div className="lg:hidden mb-4">
                <Link to="/" className="inline-flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Finedge
                  </span>
                </Link>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Sign In</CardTitle>
              <CardDescription>
                Access your dashboard and continue your learning journey
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded" />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>

              <div className="text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demo Credentials */}
          <Card className="shadow-lg border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Demo Accounts Available
              </CardTitle>
              <CardDescription>
                Try different roles with these demo credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {demoCredentials.map((demo) => (
                  <Button
                    key={demo.role}
                    variant="outline"
                    className="h-auto p-3 text-left justify-start hover:bg-blue-50 border-blue-200"
                    onClick={() => handleDemoLogin({ email: demo.email, password: demo.password })}
                    disabled={isLoading}
                  >
                    <div className="flex items-start space-x-3 w-full">
                      <demo.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium capitalize">{demo.role}</span>
                          <Badge variant="secondary" className="text-xs">Demo</Badge>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {demo.description}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Click any role above to instantly sign in and explore the platform
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

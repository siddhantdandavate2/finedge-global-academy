
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Card>
          <CardHeader>
            <div className="mb-4">
              <div className="text-6xl font-bold text-blue-600 mb-2">404</div>
              <CardTitle className="text-2xl text-gray-900">Page Not Found</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses">
                  <Search className="h-4 w-4 mr-2" />
                  Browse Courses
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full">
                <Link to="javascript:history.back()">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Link>
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Need help? <Link to="/contact" className="text-blue-600 hover:underline">Contact support</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

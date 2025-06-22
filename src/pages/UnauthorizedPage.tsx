import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Home, ArrowLeft } from 'lucide-react';

const UnauthorizedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Card>
          <CardHeader>
            <div className="mb-4">
              <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <CardTitle className="text-2xl text-gray-900">Access Denied</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-600">
              You don't have permission to access this page. Please contact your administrator if you believe this is an error.
            </p>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
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

export default UnauthorizedPage;
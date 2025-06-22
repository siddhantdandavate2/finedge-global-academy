
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CreditCard, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  Check,
  ArrowLeft,
  DollarSign
} from 'lucide-react';

const PaymentPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [processing, setProcessing] = useState(false);

  // Get course data from location state or default course data
  const courseData = location.state?.course || {
    id: courseId,
    title: 'Advanced Financial Modeling',
    instructor: 'Dr. Sarah Johnson',
    description: 'Master Excel-based financial modeling with real-world case studies and DCF analysis.',
    price: 199,
    originalPrice: 299,
    duration: '12 hours',
    students: 1247,
    rating: 4.9,
    reviews: 234,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  };

  const handlePayment = async (method: 'card' | 'paypal' | 'stripe') => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      // After successful payment, redirect to course player
      navigate(`/course/${courseId}/player`, { 
        state: { 
          paymentSuccess: true,
          course: courseData 
        }
      });
      setProcessing(false);
    }, 2000);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={goBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Course
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <img 
                  src={courseData.thumbnail} 
                  alt={courseData.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{courseData.title}</h3>
                <p className="text-gray-600 mb-4">by {courseData.instructor}</p>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {courseData.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {courseData.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                    {courseData.rating} ({courseData.reviews} reviews)
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">
                      ${courseData.price}
                    </span>
                    {courseData.originalPrice > courseData.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${courseData.originalPrice}
                      </span>
                    )}
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Complete Your Purchase
                </CardTitle>
                <CardDescription>
                  Choose your preferred payment method to enroll in this course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Methods */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Payment Methods</h4>
                  
                  {/* Credit Card */}
                  <Card className="border-2 hover:border-blue-500 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <Button
                        className="w-full justify-start"
                        variant="ghost"
                        onClick={() => handlePayment('card')}
                        disabled={processing}
                      >
                        <CreditCard className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-semibold">Credit/Debit Card</div>
                          <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                        </div>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* PayPal */}
                  <Card className="border-2 hover:border-blue-500 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <Button
                        className="w-full justify-start"
                        variant="ghost"
                        onClick={() => handlePayment('paypal')}
                        disabled={processing}
                      >
                        <DollarSign className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-semibold">PayPal</div>
                          <div className="text-sm text-gray-500">Pay with your PayPal account</div>
                        </div>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Stripe */}
                  <Card className="border-2 hover:border-blue-500 cursor-pointer transition-colors">
                    <CardContent className="p-4">
                      <Button
                        className="w-full justify-start"
                        variant="ghost"
                        onClick={() => handlePayment('stripe')}
                        disabled={processing}
                      >
                        <Shield className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-semibold">Stripe Checkout</div>
                          <div className="text-sm text-gray-500">Secure payment processing</div>
                        </div>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Order Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Course Price</span>
                      <span>${courseData.originalPrice}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${courseData.originalPrice - courseData.price}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${courseData.price}</span>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  <span>Your payment information is encrypted and secure</span>
                </div>

                {/* What You'll Get */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-900">What you'll get:</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      <span>Lifetime access to course content</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      <span>Downloadable resources and materials</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 mr-2" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>

                {processing && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                      Processing your payment...
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Share2, 
  Award, 
  Calendar,
  CheckCircle,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

interface CertificateProps {
  studentName: string;
  courseName: string;
  instructorName: string;
  completionDate: string;
  credentialId: string;
  skills?: string[];
  preview?: boolean;
}

const CertificateGenerator: React.FC<CertificateProps> = ({
  studentName = "John Doe",
  courseName = "Advanced Financial Modeling",
  instructorName = "Dr. Sarah Johnson",
  completionDate = "January 15, 2024",
  credentialId = "FE-AFM-2024-001",
  skills = ["Financial Modeling", "DCF Analysis", "Valuation", "Excel"],
  preview = false
}) => {
  const handleDownload = () => {
    // Generate PDF certificate
    console.log('Downloading certificate...');
  };

  const handleShare = (platform: string) => {
    const certificateUrl = `https://finedge.com/verify/${credentialId}`;
    const message = `I've successfully completed ${courseName} at Finedge! 🎓 #FinanceEducation #ProfessionalDevelopment`;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificateUrl)}&summary=${encodeURIComponent(message)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(certificateUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(certificateUrl)}&quote=${encodeURIComponent(message)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Certificate Preview */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 p-8 text-white relative">
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 opacity-10">
            <Award className="h-24 w-24" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-10">
            <CheckCircle className="h-16 w-16" />
          </div>
          
          {/* Certificate Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Certificate of Completion</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
            </div>
            
            {/* Award Text */}
            <div className="space-y-4">
              <p className="text-xl opacity-90">This is to certify that</p>
              <h2 className="text-5xl font-bold text-yellow-400">{studentName}</h2>
              <p className="text-xl opacity-90">has successfully completed the course</p>
              <h3 className="text-3xl font-semibold">{courseName}</h3>
            </div>
            
            {/* Instructor & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="border-t border-white/30 pt-2 mx-8">
                  <p className="font-medium">{instructorName}</p>
                  <p className="text-sm opacity-75">Course Instructor</p>
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-white/30 pt-2 mx-8">
                  <p className="font-medium">{completionDate}</p>
                  <p className="text-sm opacity-75">Date of Completion</p>
                </div>
              </div>
            </div>
            
            {/* Credential ID */}
            <div className="pt-4">
              <p className="text-sm opacity-75">Credential ID: {credentialId}</p>
            </div>
          </div>
        </div>
        
        {/* Finedge Branding */}
        <div className="bg-white p-4 text-center border-t-4 border-yellow-400">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Finedge
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Professional Finance Education</p>
        </div>
      </Card>

      {/* Certificate Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5" />
            <span>Certificate Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Download & Verify */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              Verify Certificate
            </Button>
          </div>
          
          {/* Skills Earned */}
          <div>
            <h4 className="font-medium mb-3">Skills Demonstrated</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Social Sharing */}
          <div>
            <h4 className="font-medium mb-3">Share Your Achievement</h4>
            <div className="flex space-x-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => handleShare('linkedin')}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => handleShare('twitter')}
                className="text-blue-400 border-blue-200 hover:bg-blue-50"
              >
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => handleShare('facebook')}
                className="text-blue-800 border-blue-200 hover:bg-blue-50"
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
            </div>
          </div>
          
          {/* Certificate Details */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Certificate Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Issued To:</p>
                <p className="font-medium">{studentName}</p>
              </div>
              <div>
                <p className="text-gray-500">Course:</p>
                <p className="font-medium">{courseName}</p>
              </div>
              <div>
                <p className="text-gray-500">Instructor:</p>
                <p className="font-medium">{instructorName}</p>
              </div>
              <div>
                <p className="text-gray-500">Completion Date:</p>
                <p className="font-medium">{completionDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Credential ID:</p>
                <p className="font-medium">{credentialId}</p>
              </div>
              <div>
                <p className="text-gray-500">Verification URL:</p>
                <p className="font-medium text-blue-600">finedge.com/verify/{credentialId}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateGenerator;


import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  Edit, 
  Eye, 
  Save,
  Send,
  Plus,
  Image,
  Code,
  Bold,
  Italic,
  List,
  Link,
  Upload,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const ContentWriterDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editorContent, setEditorContent] = useState('');

  const articles = [
    {
      id: '1',
      title: 'Understanding Modern Portfolio Theory',
      category: 'Investment Strategy',
      status: 'published',
      publishedDate: '2024-01-15',
      views: 2847,
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Risk Management in Volatile Markets',
      category: 'Risk Management',
      status: 'pending',
      submittedDate: '2024-01-20',
      views: 0,
      readTime: '12 min read'
    },
    {
      id: '3',
      title: 'Introduction to Cryptocurrency Trading',
      category: 'Trading',
      status: 'draft',
      lastEdited: '2024-01-22',
      views: 0,
      readTime: '15 min read'
    },
    {
      id: '4',
      title: 'ESG Investing Fundamentals',
      category: 'Sustainable Finance',
      status: 'rejected',
      rejectedDate: '2024-01-18',
      views: 0,
      readTime: '10 min read',
      feedback: 'Please add more statistical data and recent case studies'
    }
  ];

  const stats = [
    { title: 'Published Articles', value: '12', icon: FileText, color: 'blue' },
    { title: 'Pending Review', value: '3', icon: Clock, color: 'yellow' },
    { title: 'Total Views', value: '45.2K', icon: Eye, color: 'green' },
    { title: 'Avg. Read Time', value: '9 min', icon: Clock, color: 'purple' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'draft': return <Edit className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Writer Dashboard</h1>
          <p className="text-gray-600">Create and manage educational finance content</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="articles">My Articles</TabsTrigger>
            <TabsTrigger value="editor">Content Editor</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Articles</CardTitle>
                  <CardDescription>Your latest content submissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {articles.slice(0, 3).map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{article.title}</p>
                        <p className="text-xs text-gray-500">{article.category} • {article.readTime}</p>
                      </div>
                      <Badge className={getStatusColor(article.status)}>
                        {getStatusIcon(article.status)}
                        <span className="ml-1 capitalize">{article.status}</span>
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Article
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="h-4 w-4 mr-2" />
                    Continue Draft
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Article
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="articles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Content Management</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Article
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {articles.map((article) => (
                <Card key={article.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-2 mt-2">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          {article.views > 0 && (
                            <>
                              <span>•</span>
                              <span>{article.views.toLocaleString()} views</span>
                            </>
                          )}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(article.status)}>
                        {getStatusIcon(article.status)}
                        <span className="ml-1 capitalize">{article.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {article.status === 'published' && article.publishedDate && (
                          <span>Published: {article.publishedDate}</span>
                        )}
                        {article.status === 'pending' && article.submittedDate && (
                          <span>Submitted: {article.submittedDate}</span>
                        )}
                        {article.status === 'draft' && article.lastEdited && (
                          <span>Last edited: {article.lastEdited}</span>
                        )}
                        {article.status === 'rejected' && article.rejectedDate && (
                          <span>Rejected: {article.rejectedDate}</span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                        {article.status === 'draft' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Send className="h-4 w-4 mr-1" />
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                    {article.feedback && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Feedback:</strong> {article.feedback}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rich Content Editor</CardTitle>
                <CardDescription>Create engaging educational content with our advanced editor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="article-title">Article Title</Label>
                    <Input id="article-title" placeholder="Enter article title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="article-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investment">Investment Strategy</SelectItem>
                        <SelectItem value="risk">Risk Management</SelectItem>
                        <SelectItem value="trading">Trading</SelectItem>
                        <SelectItem value="banking">Banking</SelectItem>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="article-summary">Article Summary</Label>
                  <Textarea 
                    id="article-summary" 
                    placeholder="Brief summary for SEO and article preview"
                    rows={2}
                  />
                </div>

                {/* Rich Text Toolbar */}
                <div className="border rounded-lg">
                  <div className="flex items-center space-x-2 p-3 border-b bg-gray-50">
                    <Button size="sm" variant="outline">
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Italic className="h-4 w-4" />
                    </Button>
                    <div className="w-px h-6 bg-gray-300" />
                    <Button size="sm" variant="outline">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Link className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Code className="h-4 w-4" />
                    </Button>
                    <div className="ml-auto">
                      <Button size="sm" variant="outline" className="text-blue-600">
                        AI Assist
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <Textarea
                      value={editorContent}
                      onChange={(e) => setEditorContent(e.target.value)}
                      placeholder="Start writing your article content here..."
                      className="min-h-96 border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Save className="h-4 w-4 mr-2" />
                      Save Draft
                    </Button>
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Send className="h-4 w-4 mr-2" />
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Analytics</CardTitle>
                <CardDescription>Track your content performance and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Content analytics dashboard will be implemented here</p>
                  <p className="text-sm text-gray-400">Track views, engagement, and reader feedback</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContentWriterDashboard;

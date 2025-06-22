
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
  PenTool, 
  Edit, 
  Eye, 
  Save,
  Send,
  Plus,
  Image,
  Bold,
  Italic,
  List,
  Link,
  Hash,
  Calendar,
  TrendingUp,
  MessageSquare,
  Share,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';

const BloggerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const blogPosts = [
    {
      id: '1',
      title: '5 Common Investment Mistakes to Avoid in 2024',
      status: 'published',
      publishedDate: '2024-01-20',
      views: 3421,
      likes: 87,
      comments: 23,
      readTime: '6 min read',
      tags: ['investing', 'mistakes', 'beginner']
    },
    {
      id: '2',
      title: 'The Rise of Sustainable Finance: What You Need to Know',
      status: 'pending',
      submittedDate: '2024-01-22',
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '8 min read',
      tags: ['sustainability', 'ESG', 'trends']
    },
    {
      id: '3',
      title: 'Personal Finance Tips for Young Professionals',
      status: 'draft',
      lastEdited: '2024-01-23',
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '5 min read',
      tags: ['personal-finance', 'career', 'budgeting']
    }
  ];

  const stats = [
    { title: 'Published Posts', value: '18', icon: PenTool, color: 'blue' },
    { title: 'Total Views', value: '52.3K', icon: Eye, color: 'green' },
    { title: 'Engagement Rate', value: '4.2%', icon: TrendingUp, color: 'purple' },
    { title: 'Comments', value: '347', icon: MessageSquare, color: 'yellow' }
  ];

  const popularTags = [
    { name: 'investing', count: 12 },
    { name: 'personal-finance', count: 8 },
    { name: 'cryptocurrency', count: 6 },
    { name: 'budgeting', count: 5 },
    { name: 'career', count: 4 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'draft': return <Edit className="h-4 w-4" />;
      default: return <Edit className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blogger Dashboard</h1>
          <p className="text-gray-600">Share your finance insights through engaging blog posts</p>
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
            <TabsTrigger value="posts">My Posts</TabsTrigger>
            <TabsTrigger value="editor">Blog Editor</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Blog Posts</CardTitle>
                    <CardDescription>Your latest blog submissions and performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">{post.title}</h4>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{post.readTime}</span>
                            <span>{post.views.toLocaleString()} views</span>
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                          </div>
                          <div className="flex items-center space-x-1 mt-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge className={getStatusColor(post.status)}>
                          {getStatusIcon(post.status)}
                          <span className="ml-1 capitalize">{post.status}</span>
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                  <CardDescription>Your most used blog tags</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularTags.map((tag) => (
                      <div key={tag.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Hash className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{tag.name}</span>
                        </div>
                        <Badge variant="outline">{tag.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with common blogging tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Continue Draft
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Posts
                  </Button>
                  <Button variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Blog Post Management</h2>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                New Blog Post
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 mt-2">
                          <span>{post.readTime}</span>
                          {post.views > 0 && <span>{post.views.toLocaleString()} views</span>}
                          {post.likes > 0 && <span>{post.likes} likes</span>}
                          {post.comments > 0 && <span>{post.comments} comments</span>}
                        </CardDescription>
                        <div className="flex items-center space-x-1 mt-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Badge className={getStatusColor(post.status)}>
                        {getStatusIcon(post.status)}
                        <span className="ml-1 capitalize">{post.status}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {post.status === 'published' && post.publishedDate && (
                          <span>Published: {post.publishedDate}</span>
                        )}
                        {post.status === 'pending' && post.submittedDate && (
                          <span>Submitted: {post.submittedDate}</span>
                        )}
                        {post.status === 'draft' && post.lastEdited && (
                          <span>Last edited: {post.lastEdited}</span>
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
                        {post.status === 'published' && (
                          <Button size="sm" variant="outline">
                            <Share className="h-4 w-4 mr-1" />
                            Share
                          </Button>
                        )}
                        {post.status === 'draft' && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Send className="h-4 w-4 mr-1" />
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Blog Post Editor</CardTitle>
                <CardDescription>Create engaging blog posts about finance topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">Blog Post Title</Label>
                    <Input id="post-title" placeholder="Enter your blog post title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal-finance">Personal Finance</SelectItem>
                        <SelectItem value="investing">Investing</SelectItem>
                        <SelectItem value="budgeting">Budgeting</SelectItem>
                        <SelectItem value="career">Career</SelectItem>
                        <SelectItem value="cryptocurrency">Cryptocurrency</SelectItem>
                        <SelectItem value="retirement">Retirement Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="post-summary">Post Summary</Label>
                  <Textarea 
                    id="post-summary" 
                    placeholder="Brief summary of your blog post"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="post-tags">Tags (comma-separated)</Label>
                  <Input id="post-tags" placeholder="investing, personal-finance, tips" />
                </div>

                {/* Simple Editor Toolbar */}
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
                  </div>
                  <div className="p-4">
                    <Textarea
                      placeholder="Start writing your blog post here..."
                      className="min-h-96 border-0 focus-visible:ring-0 resize-none"
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
                <CardTitle>Blog Analytics</CardTitle>
                <CardDescription>Track your blog performance and reader engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Blog analytics dashboard will be implemented here</p>
                  <p className="text-sm text-gray-400">Track views, engagement, shares, and reader feedback</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BloggerDashboard;

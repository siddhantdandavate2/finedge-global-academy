
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Protected Routes */}
                <Route 
                  path="/admin/*" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Placeholder routes for other dashboards */}
                <Route 
                  path="/instructor/*" 
                  element={
                    <ProtectedRoute allowedRoles={['instructor']}>
                      <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-4">Instructor Dashboard</h1>
                        <p className="text-gray-600">Coming soon - Create and manage your courses, track student progress, and more.</p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/student/*" 
                  element={
                    <ProtectedRoute allowedRoles={['student']}>
                      <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
                        <p className="text-gray-600">Coming soon - View your enrolled courses, progress, certificates, and more.</p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/content-writer/*" 
                  element={
                    <ProtectedRoute allowedRoles={['content-writer']}>
                      <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-4">Content Writer Dashboard</h1>
                        <p className="text-gray-600">Coming soon - Create and manage educational content and guides.</p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
                
                <Route 
                  path="/blogger/*" 
                  element={
                    <ProtectedRoute allowedRoles={['blogger']}>
                      <div className="container mx-auto px-4 py-8">
                        <h1 className="text-3xl font-bold mb-4">Blogger Dashboard</h1>
                        <p className="text-gray-600">Coming soon - Write and manage your finance blog posts.</p>
                      </div>
                    </ProtectedRoute>
                  } 
                />
                
                {/* Public content pages (placeholders) */}
                <Route 
                  path="/courses" 
                  element={
                    <div className="container mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4">Browse Courses</h1>
                      <p className="text-gray-600">Course catalog coming soon.</p>
                    </div>
                  } 
                />
                
                <Route 
                  path="/blog" 
                  element={
                    <div className="container mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4">Finance Blog</h1>
                      <p className="text-gray-600">Blog section coming soon.</p>
                    </div>
                  } 
                />
                
                <Route 
                  path="/webinars" 
                  element={
                    <div className="container mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4">Webinars</h1>
                      <p className="text-gray-600">Webinar schedule coming soon.</p>
                    </div>
                  } 
                />
                
                <Route 
                  path="/podcasts" 
                  element={
                    <div className="container mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4">Podcasts</h1>
                      <p className="text-gray-600">Podcast library coming soon.</p>
                    </div>
                  } 
                />
                
                <Route 
                  path="/instructors" 
                  element={
                    <div className="container mx-auto px-4 py-8">
                      <h1 className="text-3xl font-bold mb-4">Expert Instructors</h1>
                      <p className="text-gray-600">Instructor profiles coming soon.</p>
                    </div>
                  } 
                />
                
                <Route 
                  path="/unauthorized" 
                  element={
                    <div className="container mx-auto px-4 py-8 text-center">
                      <h1 className="text-3xl font-bold mb-4 text-red-600">Access Denied</h1>
                      <p className="text-gray-600">You don't have permission to access this page.</p>
                    </div>
                  } 
                />

                {/* Catch all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

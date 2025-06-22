import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Trophy, 
  Star, 
  Target, 
  Award, 
  TrendingUp,
  Medal,
  Crown,
  Zap,
  BookOpen,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  points: number;
  unlocked: boolean;
  unlockedDate?: Date;
  category: 'learning' | 'social' | 'achievement' | 'milestone';
}

interface UserStats {
  totalPoints: number;
  level: number;
  pointsToNextLevel: number;
  coursesCompleted: number;
  hoursLearned: number;
  streak: number;
  rank: number;
  totalUsers: number;
}

const GamificationSystem: React.FC = () => {
  const [userStats] = useState<UserStats>({
    totalPoints: 2450,
    level: 8,
    pointsToNextLevel: 550,
    coursesCompleted: 12,
    hoursLearned: 87,
    streak: 15,
    rank: 23,
    totalUsers: 1247
  });

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first course',
      icon: <BookOpen className="h-6 w-6" />,
      points: 100,
      unlocked: true,
      unlockedDate: new Date('2024-01-15'),
      category: 'learning'
    },
    {
      id: '2',
      title: 'Knowledge Seeker',
      description: 'Complete 5 courses',
      icon: <Target className="h-6 w-6" />,
      points: 250,
      unlocked: true,
      unlockedDate: new Date('2024-01-18'),
      category: 'learning'
    },
    {
      id: '3',
      title: 'Finance Expert',
      description: 'Complete 10 courses',
      icon: <Award className="h-6 w-6" />,
      points: 500,
      unlocked: true,
      unlockedDate: new Date('2024-01-20'),
      category: 'achievement'
    },
    {
      id: '4',
      title: 'Streak Master',
      description: 'Maintain a 7-day learning streak',
      icon: <Zap className="h-6 w-6" />,
      points: 200,
      unlocked: true,
      unlockedDate: new Date('2024-01-19'),
      category: 'milestone'
    },
    {
      id: '5',
      title: 'Community Helper',
      description: 'Help 10 fellow students',
      icon: <Users className="h-6 w-6" />,
      points: 300,
      unlocked: false,
      category: 'social'
    },
    {
      id: '6',
      title: 'Time Master',
      description: 'Study for 100 hours',
      icon: <Clock className="h-6 w-6" />,
      points: 400,
      unlocked: false,
      category: 'milestone'
    },
    {
      id: '7',
      title: 'Perfect Score',
      description: 'Get 100% on 5 quizzes',
      icon: <Star className="h-6 w-6" />,
      points: 350,
      unlocked: false,
      category: 'achievement'
    },
    {
      id: '8',
      title: 'Finance Master',
      description: 'Complete 25 courses',
      icon: <Crown className="h-6 w-6" />,
      points: 1000,
      unlocked: false,
      category: 'achievement'
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: 'Alex Thompson',
      points: 4850,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      level: 12
    },
    {
      rank: 2,
      name: 'Sarah Johnson',
      points: 4320,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      level: 11
    },
    {
      rank: 3,
      name: 'Michael Chen',
      points: 3890,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      level: 10
    },
    {
      rank: 4,
      name: 'Emma Rodriguez',
      points: 3650,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      level: 9
    },
    {
      rank: 5,
      name: 'David Kim',
      points: 3420,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      level: 9
    }
  ];

  const getLevelProgress = () => {
    const currentLevelPoints = userStats.level * 500; // Assuming 500 points per level
    const nextLevelPoints = (userStats.level + 1) * 500;
    const progress = ((userStats.totalPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    return Math.min(progress, 100);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'learning': return 'bg-blue-100 text-blue-800';
      case 'social': return 'bg-green-100 text-green-800';
      case 'achievement': return 'bg-purple-100 text-purple-800';
      case 'milestone': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* User Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-3xl font-bold text-blue-600">{userStats.totalPoints.toLocaleString()}</p>
              </div>
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Level</p>
                <p className="text-3xl font-bold text-purple-600">{userStats.level}</p>
                <Progress value={getLevelProgress()} className="mt-2 h-2" />
                <p className="text-xs text-gray-500 mt-1">{userStats.pointsToNextLevel} to next level</p>
              </div>
              <Medal className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Learning Streak</p>
                <p className="text-3xl font-bold text-orange-600">{userStats.streak}</p>
                <p className="text-xs text-gray-500">days</p>
              </div>
              <Zap className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rank</p>
                <p className="text-3xl font-bold text-green-600">#{userStats.rank}</p>
                <p className="text-xs text-gray-500">of {userStats.totalUsers.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Achievements
            </CardTitle>
            <CardDescription>
              Unlock badges by completing learning milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.unlocked
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-full ${
                      achievement.unlocked ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <Badge className={getCategoryColor(achievement.category)} variant="secondary">
                        {achievement.points} pts
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>
                  {achievement.unlocked && achievement.unlockedDate && (
                    <div className="flex items-center text-xs text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Unlocked {achievement.unlockedDate.toLocaleDateString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2" />
              Leaderboard
            </CardTitle>
            <CardDescription>
              Top learners this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <div key={user.rank} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                    user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : user.rank === 3 ? '🥉' : user.rank}
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">Level {user.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">{user.points.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              ))}
              
              {/* Current User */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-4 bg-blue-50 p-3 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                    {userStats.rank}
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">You</p>
                    <p className="text-sm text-gray-500">Level {userStats.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">{userStats.totalPoints.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GamificationSystem;
import React, { useState } from 'react';
import { Flame, Zap, Trophy, Star, BookOpen, Code, Gamepad2, Brain, ArrowRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Sample student data
const studentData = {
  name: 'Alex Kumar',
  branch: 'Computer Science Engineering',
  semester: '4th',
  level: 5,
  levelName: 'Problem Solver',
  xp: 3850,
  xpToNextLevel: 5000,
  coins: 1240,
  streak: 12,
  totalStudyHours: 45,
  profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
};

const dailyMissions = [
  { id: 1, title: 'Complete 2 topics', completed: true, xp: 100, icon: '📚' },
  { id: 2, title: 'Solve 10 MCQs', completed: true, xp: 150, icon: '✅' },
  { id: 3, title: 'Complete 1 coding challenge', completed: false, xp: 200, icon: '💻' },
  { id: 4, title: 'Answer 5 viva questions', completed: false, xp: 100, icon: '🎤' },
];

const quickAccess = [
  { id: 1, title: 'Quick Quiz', icon: '🎯', color: 'bg-blue-50', borderColor: 'border-blue-200' },
  { id: 2, title: 'AI Tutor', icon: '🤖', color: 'bg-purple-50', borderColor: 'border-purple-200' },
  { id: 3, title: 'Code Lab', icon: '💻', color: 'bg-green-50', borderColor: 'border-green-200' },
  { id: 4, title: 'Game Mode', icon: '🎮', color: 'bg-orange-50', borderColor: 'border-orange-200' },
];

const subjects = [
  { id: 1, name: 'Data Structures', progress: 75, icon: '🏗️' },
  { id: 2, name: 'Algorithms', progress: 60, icon: '⚙️' },
  { id: 3, name: 'DBMS', progress: 85, icon: '🗄️' },
  { id: 4, name: 'Web Development', progress: 40, icon: '🌐' },
];

const achievements = [
  { id: 1, name: 'Quiz Master', icon: '🏆', unlocked: true },
  { id: 2, name: 'Coding Hero', icon: '💻', unlocked: true },
  { id: 3, name: '7-Day Streak', icon: '🔥', unlocked: false },
  { id: 4, name: 'Perfect Score', icon: '⭐', unlocked: false },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const xpPercentage = (studentData.xp / studentData.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              ⚡ ENGINEER FUN STUDY
            </div>
          </div>
          <button className="lg:hidden p-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            👋 Welcome back, {studentData.name}!
          </h1>
          <p className="text-muted-foreground">
            {studentData.branch} • Semester {studentData.semester}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center">
              <img
                src={studentData.profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-purple-200"
              />
              <h3 className="text-lg font-bold text-foreground mb-1">{studentData.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{studentData.branch}</p>

              {/* Level */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-1">Level {studentData.level}</div>
                <div className="text-sm font-semibold text-purple-700">{studentData.levelName}</div>
              </div>

              {/* XP Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground">XP</span>
                  <span className="text-sm text-muted-foreground">{studentData.xp}/{studentData.xpToNextLevel}</span>
                </div>
                <Progress value={xpPercentage} className="h-2" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600">{studentData.coins}</div>
                  <div className="text-xs text-orange-700">Coins</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="flex items-center justify-center gap-1">
                    <Flame className="w-4 h-4 text-red-500" />
                    <div className="text-2xl font-bold text-red-600">{studentData.streak}</div>
                  </div>
                  <div className="text-xs text-red-700">Day Streak</div>
                </div>
              </div>
            </div>
          </Card>

          {/* XP & Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Missions */}
            <Card className="p-6 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Today's Missions
                </h2>
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {dailyMissions.filter(m => m.completed).length}/{dailyMissions.length}
                </span>
              </div>
              <div className="space-y-3">
                {dailyMissions.map(mission => (
                  <div key={mission.id} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                    mission.completed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <input
                      type="checkbox"
                      checked={mission.completed}
                      readOnly
                      className="w-5 h-5 rounded"
                    />
                    <div className="flex-1">
                      <p className={`text-sm font-semibold ${
                        mission.completed ? 'text-green-700 line-through' : 'text-foreground'
                      }`}>
                        {mission.icon} {mission.title}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-yellow-600">+{mission.xp} XP</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Access */}
            <div className="grid grid-cols-2 gap-4">
              {quickAccess.map(item => (
                <Card
                  key={item.id}
                  className={`p-4 cursor-pointer transition-all hover:shadow-lg border-2 ${item.borderColor} ${item.color}`}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Study Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Subjects */}
          <Card className="p-6 bg-white border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Study Progress
            </h2>
            <div className="space-y-4">
              {subjects.map(subject => (
                <div key={subject.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-foreground">{subject.icon} {subject.name}</span>
                    <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-white border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Achievements
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    achievement.unlocked
                      ? 'bg-yellow-50 border-yellow-300'
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className="text-xs font-bold text-foreground">{achievement.name}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Learn */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 cursor-pointer hover:shadow-lg transition-all">
            <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">📚 Learn</h3>
            <p className="text-sm text-muted-foreground mb-4">Master topics with detailed explanations and examples</p>
            <Button variant="outline" size="sm" className="w-full">
              Start Learning <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Practice */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 cursor-pointer hover:shadow-lg transition-all">
            <Code className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">💻 Practice</h3>
            <p className="text-sm text-muted-foreground mb-4">Solve coding challenges and practical problems</p>
            <Button variant="outline" size="sm" className="w-full">
              Code Lab <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Games */}
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 cursor-pointer hover:shadow-lg transition-all">
            <Gamepad2 className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">🎮 Games</h3>
            <p className="text-sm text-muted-foreground mb-4">Learn through fun mini-games and challenges</p>
            <Button variant="outline" size="sm" className="w-full">
              Play Games <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* AI Tutor */}
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 cursor-pointer hover:shadow-lg transition-all">
            <Brain className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">🤖 AI Tutor</h3>
            <p className="text-sm text-muted-foreground mb-4">Ask your personal study assistant anything</p>
            <Button variant="outline" size="sm" className="w-full">
              Ask AI <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Quiz */}
          <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 cursor-pointer hover:shadow-lg transition-all">
            <Star className="w-8 h-8 text-red-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">📝 Quizzes</h3>
            <p className="text-sm text-muted-foreground mb-4">Test your knowledge with interactive quizzes</p>
            <Button variant="outline" size="sm" className="w-full">
              Take Quiz <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>

          {/* Leaderboard */}
          <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-300 cursor-pointer hover:shadow-lg transition-all">
            <Trophy className="w-8 h-8 text-pink-600 mb-3" />
            <h3 className="text-lg font-bold text-foreground mb-2">🏆 Leaderboard</h3>
            <p className="text-sm text-muted-foreground mb-4">Compete with friends and see rankings</p>
            <Button variant="outline" size="sm" className="w-full">
              View Rankings <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl text-white text-center">
          <h2 className="text-3xl font-bold mb-2">Ready to Level Up? 🚀</h2>
          <p className="mb-6 text-white/90">Start your engineering learning journey with gamified challenges and rewards!</p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 font-bold">
            Begin Learning Now
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <div className="flex justify-around items-center py-3">
          <button className="flex flex-col items-center gap-1 text-purple-600">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-semibold">Learn</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600">
            <Code className="w-6 h-6" />
            <span className="text-xs font-semibold">Practice</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600">
            <Gamepad2 className="w-6 h-6" />
            <span className="text-xs font-semibold">Games</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-600">
            <Brain className="w-6 h-6" />
            <span className="text-xs font-semibold">AI</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

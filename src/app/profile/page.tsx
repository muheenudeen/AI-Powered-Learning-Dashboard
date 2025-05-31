"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, BookOpen, Clock, Edit3, Save, Trophy, TrendingUp } from "lucide-react"
import { toast } from "sonner";


interface UserProfile {
  id: string
  name: string
  email: string
  stats: {
    coursesCompleted: number
    coursesInProgress: number
    totalHours: number
  }
  achievements: Array<{
    id: string
    title: string
    description: string
    icon: string
    earnedDate: string
    category: string
  }>
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    stats: { completed: 12, inProgress: 4, totalHours: 156 },
  })

  const achievements = [
    { title: "First Course", icon: "🎯", category: "Milestone" },
    { title: "First Course", icon: "🎯", category: "Milestone" },
    { title: "First Course", icon: "🎯", category: "Milestone" }
  ]

  const handleSave = () => {
    setIsEditing(false)
    toast("Profile Updated", {
      description: "Changes saved successfully.",
    });
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button onClick={isEditing ? handleSave : () => setIsEditing(true)}>
          {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit3 className="w-4 h-4 mr-2" />}
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/avatharr.webp"
                      alt="User Avatar"
                      className="h-10 w-10 rounded-full object-cover border"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{profile.name}</h3>
                      <p className="text-gray-600">Student since 2023</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      {isEditing ? (
                        <Input
                          value={profile.name}
                          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{profile.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{profile.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Completed
                    </span>
                    <span className="font-semibold">{profile.stats.completed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      In Progress
                    </span>
                    <span className="font-semibold">{profile.stats.inProgress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Total Hours
                    </span>
                    <span className="font-semibold">{profile.stats.totalHours}h</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{achievement.icon}</span>
                        <span className="text-sm">{achievement.title}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <p className="text-gray-600">Celebrate your learning milestones</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">Description goes here</p>
                        <div className="flex items-center justify-between mt-3">
                          <Badge variant="secondary">{achievement.category}</Badge>
                          <span className="text-xs text-gray-500">Earned Date goes here</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <p className="text-gray-600">Track your learning progress</p>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

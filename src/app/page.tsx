import { DashboardHeader } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle,  } from "@/components/ui/card"
import { BookOpen, Brain, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="space-y-12">
      <DashboardHeader/>
      <section className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">Edmento</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your AI-powered learning companion. Track progress, access courses, and get intelligent summaries to
            accelerate your learning journey.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/dashboard">
              <BookOpen className="mr-2 h-5 w-5" />
              Go to Dashboard
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link href="/courses">

        <Card className="text-center">
          <CardHeader>
            <BookOpen className="h-12 w-12 text-indigo-600 mx-auto" />
            <CardTitle>Course Library</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Access a comprehensive library of courses across various subjects and skill levels.
            </CardDescription>
          </CardContent>
        </Card>
</Link>
        <Card className="text-center">
          <CardHeader>
            <TrendingUp className="h-12 w-12 text-green-600 mx-auto" />
            <CardTitle>Progress Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Monitor your learning progress with detailed analytics and completion tracking.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Brain className="h-12 w-12 text-purple-600 mx-auto" />
            <CardTitle>AI Assistant</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get intelligent content summaries and personalized learning recommendations.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Users className="h-12 w-12 text-orange-600 mx-auto" />
            <CardTitle>Community</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Connect with fellow learners and share your educational journey.</CardDescription>
          </CardContent>
        </Card>
      </section>
      {/* Stats Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Learning Made Simple</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-indigo-600">10,000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

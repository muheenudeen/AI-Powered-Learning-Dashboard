"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ErrorMessage } from "@/components/ui/props/error-message"
import { LoadingSpinner } from "@/components/ui/props/loading-spinner"
import { AISummarizer } from "@/components/AISummarizer"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { useCourseStore } from "@/store/course-store"
import { ArrowLeft, BookOpen, Clock, Target } from "lucide-react"
import type { Course } from "@/types/course"

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const courseId = params.courseId as string

  const { courses, loading, error, fetchCourses, updateCourseProgress } = useCourseStore()
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    if (courses.length === 0) {
      fetchCourses()
    }
  }, [courses.length, fetchCourses])

  useEffect(() => {
    if (courses.length > 0) {
      const foundCourse = courses.find((c) => c.id === courseId)
      setCourse(foundCourse || null)
    }
  }, [courses, courseId])

  const handleMarkComplete = () => {
    if (course) {
      updateCourseProgress(course.id, 100)
      setCourse({ ...course, progress: 100 })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!course) {
    return (
      <div className="space-y-4">
        <Button variant="ghost" onClick={() => router.back()} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        <ErrorMessage message="Course not found" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()} size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <p className="text-gray-600">{course.description}</p>
                </div>
                <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                  {course.progress === 100 ? "Completed" : "In Progress"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Est. 2-3 hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  <span>Beginner Level</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} />
              </div>

              {course.progress < 100 && (
                <Button onClick={handleMarkComplete} className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Mark as Complete
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Welcome to <strong>{course.title}</strong>! This comprehensive course is designed to provide you with
                  a solid foundation in the subject matter through interactive lessons, practical exercises, and
                  real-world applications.
                </p>

                <p>
                  Throughout this course, you'll explore key concepts and methodologies that are essential for
                  understanding {course.title.toLowerCase()}. Our curriculum is carefully structured to build upon
                  previous knowledge while introducing new challenges that will enhance your critical thinking skills.
                </p>

                <p>
                  The course content includes detailed explanations of fundamental principles, step-by-step tutorials,
                  and hands-on projects that allow you to apply what you've learned. You'll also have access to
                  supplementary materials, including recommended readings, video demonstrations, and interactive quizzes
                  to test your understanding.
                </p>

                <p>
                  By the end of this course, you'll have developed a comprehensive understanding of the subject matter
                  and be well-prepared to apply these concepts in practical scenarios. The skills and knowledge gained
                  here will serve as a strong foundation for more advanced topics in this field.
                </p>

              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <AISummarizer courseTitle={course.title} />

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-semibold">{course.progress}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Difficulty</span>
                <span className="font-semibold">Beginner</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold">2-3 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Format</span>
                <span className="font-semibold">Self-paced</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

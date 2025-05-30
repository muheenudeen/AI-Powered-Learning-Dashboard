"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AISummarizer } from "@/components/AISummarizer"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { useCourseStore } from "@/store/course-store"
import { ArrowLeft, BookOpen } from "lucide-react"
import type { Course } from "@/types/course"

export default function CourseDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { courses, updateCourseProgress } = useCourseStore()
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    const found = courses.find((c) => c.id === params.courseId)
    setCourse(found || null)
  }, [courses, params.courseId])

  if (!course) return <div>Course not found</div>

  const handleComplete = () => {
    updateCourseProgress(course.id, 100)
    setCourse({ ...course, progress: 100 })
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={() => router.back()}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <Badge>{course.progress === 100 ? "Completed" : "In Progress"}</Badge>
              </div>
              <p className="text-gray-600">{course.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ProgressBar value={course.progress} />
              {course.progress < 100 && (
                <Button onClick={handleComplete} className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Mark as Complete
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        <AISummarizer courseTitle={course.title} />
      </div>
    </div>
  )
}

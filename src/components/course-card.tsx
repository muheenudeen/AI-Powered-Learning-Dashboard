"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@radix-ui/react-progress"
import { useCourseStore } from "@/store/course-store"
import { CheckCircle, Clock, BookOpen } from "lucide-react"
import type { Course } from "@/types/course"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const { updateCourseProgress } = useCourseStore()

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    updateCourseProgress(course.id, 100)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
          <Badge variant="secondary">{course.category}</Badge>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{course.estimatedHours}h</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{course.difficulty}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} />
        </div>

        <div className="flex gap-2">
          <Link href={`/dashboard/${course.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          {course.progress < 100 && (
            <Button size="icon" onClick={handleComplete}>
              <CheckCircle className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

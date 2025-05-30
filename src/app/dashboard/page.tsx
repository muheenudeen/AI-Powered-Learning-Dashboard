"use client"

import { useEffect } from "react"


import { CourseCard } from "@/components/course-card"
import { LoadingSpinner } from "@/components/ui/props/loading-spinner"
import { ErrorMessage } from "@/components/ui/props/error-message"
import { useCourseStore } from "@/store/course-store"

export default function DashboardPage() {
  const { courses, loading, error, fetchCourses } = useCourseStore()

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your progress and continue learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses available.</p>
        </div>
      )}
    </div>
  )
}

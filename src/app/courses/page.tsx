"use client"
import { useEffect, useState } from "react"
import { CourseCard } from "@/components/course-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useCourseStore } from "@/store/course-store"
import { Search, BookOpen, Star, Clock } from "lucide-react"

export default function CoursesPage() {
  const { courses, fetchCourses } = useCourseStore()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [filtered, setFiltered] = useState(courses)

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  useEffect(() => {
    let result = courses
    if (search) {
      result = result.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
    }
    if (category !== "all") {
      result = result.filter((c) => c.category === category)
    }
    setFiltered(result)
  }, [courses, search, category])

  const stats = {
    total: courses.length,
    completed: courses.filter((c) => c.progress === 100).length,
    inProgress: courses.filter((c) => c.progress > 0 && c.progress < 100).length,
  }

  const categories = [...new Set(courses.map((c) => c.category))]

  return (
    <div className="space-y-6 m-4">
      <h1 className="text-3xl font-bold">All Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-xl font-bold">{stats.total}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-xl font-bold">{stats.completed}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center space-x-2">
            <Clock className="w-5 h-5 text-orange-600" />
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-xl font-bold">{stats.inProgress}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

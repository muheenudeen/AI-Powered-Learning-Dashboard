import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Course } from "@/types/course"

interface CourseStore {
  courses: Course[]
  loading: boolean
  error: string | null
  fetchCourses: () => Promise<void>
  updateCourseProgress: (courseId: string, progress: number) => void
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set, get) => ({
      courses: [],
      loading: false,
      error: null,

      fetchCourses: async () => {
        set({ loading: true, error: null })
        try {
          const response = await fetch("/api/courses")
          const data = await response.json()
          if (data.success) {
            const existing = get().courses
            const updated = data.data.map((course: Course) => {
              const found = existing.find((c) => c.id === course.id)
              return found ? { ...course, progress: found.progress } : course
            })
            set({ courses: updated, loading: false })
          }
        } catch (error) {
          set({ error: "Failed to fetch courses", loading: false })
        }
      },

      updateCourseProgress: (courseId: string, progress: number) => {
        set((state) => ({
          courses: state.courses.map((course) =>
            course.id === courseId ? { ...course, progress: Math.min(100, Math.max(0, progress)) } : course,
          ),
        }))
      },
    }),
    { name: "course-storage", partialize: (state) => ({ courses: state.courses }) },
  ),
)

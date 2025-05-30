export interface Course {
  id: string
  title: string
  description: string
  progress: number
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  estimatedHours: number
}

import { NextResponse } from "next/server"

const courses = [
  {
    id: "1",
    title: "Math Fundamentals",
    description: "Master essential mathematical concepts including algebra and geometry.",
    progress: 45,
    category: "Mathematics",
    difficulty: "Beginner",
    estimatedHours: 3,
  },
  {
    id: "2",
    title: "History of Science",
    description: "Explore scientific discoveries from ancient times to modern era.",
    progress: 78,
    category: "Science",
    difficulty: "Intermediate",
    estimatedHours: 4,
  },
  {
    id: "3",
    title: "Literary Analysis",
    description: "Develop critical thinking through literature analysis.",
    progress: 23,
    category: "Literature",
    difficulty: "Advanced",
    estimatedHours: 5,
  },
  {
    id: "4",
    title: "Introduction to Programming",
    description: "Learn programming basics with hands-on exercises.",
    progress: 67,
    category: "Technology",
    difficulty: "Beginner",
    estimatedHours: 6,
  },
  {
    id: "5",
    title: "Environmental Science",
    description: "Understand environmental systems and sustainability.",
    progress: 12,
    category: "Science",
    difficulty: "Intermediate",
    estimatedHours: 4,
  },
  {
    id: "6",
    title: "World Geography",
    description: "Explore global geography and cultures.",
    progress: 89,
    category: "Geography",
    difficulty: "Beginner",
    estimatedHours: 3,
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return NextResponse.json({ success: true, data: courses })
}

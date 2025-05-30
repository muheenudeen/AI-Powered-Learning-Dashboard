import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { courseTitle } = await request.json()

  await new Promise((resolve) => setTimeout(resolve, 1500))

  const summaries: Record<string, string> = {
    "Math Fundamentals":
      "This content covers essential mathematical concepts including algebra, geometry, and problem-solving techniques for real-world applications.",
    "History of Science":
      "This content explores the evolution of scientific thought from ancient civilizations to modern discoveries and breakthroughs.",
    "Literary Analysis":
      "This content focuses on developing critical reading skills through examination of literary works and themes.",
    "Introduction to Programming":
      "This content introduces fundamental programming concepts including variables, functions, and problem-solving through code.",
    "Environmental Science": "This content examines the interconnections between natural systems and human activities.",
    "World Geography":
      "This content covers global physical and human geography including landforms and cultural diversity.",
  }

  const summary = summaries[courseTitle] || `This content discusses key principles of ${courseTitle}.`

  return NextResponse.json({ success: true, summary })
}

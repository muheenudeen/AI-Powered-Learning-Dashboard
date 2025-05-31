"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "./props/loading-spinner"
import { Sparkles } from "lucide-react"

interface AISummarizerProps {
  courseTitle: string
}

export function AISummarizer({ courseTitle }: AISummarizerProps) {
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  const generateSummary = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseTitle }),
      })
      const data = await response.json()
      if (data.success) setSummary(data.summary)
    } catch (error) {
      console.error("Failed to generate summary")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          AI Summarizer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">Get an AI-powered summary of this course content.</p>

        <Button onClick={generateSummary} disabled={loading} className="w-full">
          {loading ? (
            <>
              <LoadingSpinner className="w-4 h-4 mr-2" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Summary
            </>
          )}
        </Button>

        {summary && (
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-md">
            <h4 className="font-semibold text-purple-900 mb-2">AI Summary:</h4>
            <p className="text-sm text-purple-800">{summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

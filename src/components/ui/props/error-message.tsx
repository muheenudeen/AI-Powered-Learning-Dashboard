import { AlertCircle } from "lucide-react"

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center space-y-2">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <p className="text-red-600 font-medium">{message}</p>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { rituals, ritualSteps } from "@/lib/data"
import { ArrowLeft, ArrowRight, Pause, Play, X } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import RitualStepRenderer from "@/components/ritual-step-renderer"

export default function PerformRitualPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const ritualId = params.id as string

  const ritual = rituals.find((r) => r.id === ritualId)
  const steps = ritualSteps[ritualId] || []

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const [progress, setProgress] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  const currentStep = steps[currentStepIndex]
  const totalSteps = steps.length

  useEffect(() => {
    if (!ritual) {
      toast({
        title: "Ritual not found",
        description: "The ritual you're looking for doesn't exist.",
        variant: "destructive",
      })
      router.push("/")
      return
    }

    let interval: NodeJS.Timeout

    if (isRunning && currentStep?.duration) {
      const stepDuration = currentStep.duration

      interval = setInterval(() => {
        setTimeElapsed((prev) => {
          const newTime = prev + 1
          const newProgress = Math.min((newTime / stepDuration) * 100, 100)
          setProgress(newProgress)

          if (newTime >= stepDuration) {
            clearInterval(interval)
            if (currentStepIndex < totalSteps - 1) {
              setTimeout(() => {
                setCurrentStepIndex((prev) => prev + 1)
                setTimeElapsed(0)
                setProgress(0)
              }, 1000)
            }
          }

          return newTime
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [currentStep, currentStepIndex, isRunning, ritual, router, toast, totalSteps])

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1)
      setTimeElapsed(0)
      setProgress(0)
    } else {
      completeRitual()
    }
  }

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
      setTimeElapsed(0)
      setProgress(0)
    }
  }

  const togglePause = () => {
    setIsRunning((prev) => !prev)
  }

  const completeRitual = () => {
    toast({
      title: "Ritual Completed",
      description: "Your ritual has been recorded in your history.",
    })
    router.push("/")
  }

  const exitRitual = () => {
    if (confirm("Are you sure you want to exit this ritual? Your progress will not be saved.")) {
      router.push("/")
    }
  }

  if (!ritual) return null

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <h1 className="text-xl font-bold">{ritual.name}</h1>
          </div>
          <Button variant="ghost" size="icon" onClick={exitRitual}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex flex-1 flex-col items-center justify-center p-4">
        <div className="mb-8 w-full max-w-md">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>
            {currentStep?.duration && (
              <span className="text-sm text-gray-400">
                {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, "0")} /
                {Math.floor(currentStep.duration / 60)}:{(currentStep.duration % 60).toString().padStart(2, "0")}
              </span>
            )}
          </div>
          <Progress
            value={progress}
            className="h-1 bg-gray-800"
            indicatorClassName="bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>

        <Card className="w-full max-w-md border border-gray-800 bg-gray-900/50">
          <CardContent className="p-6">
            <RitualStepRenderer step={currentStep} isRunning={isRunning} />
          </CardContent>
        </Card>

        <div className="mt-8 flex w-full max-w-md items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStepIndex === 0}
            className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          {currentStep?.duration && (
            <Button
              variant="outline"
              onClick={togglePause}
              className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Resume
                </>
              )}
            </Button>
          )}

          <Button
            variant="outline"
            onClick={handleNext}
            className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            {currentStepIndex === totalSteps - 1 ? "Complete" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}

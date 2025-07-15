"use client"

import { useState } from "react"
import type { RitualStep } from "@/lib/data"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CircularProgressIndicator } from "@/components/circular-progress"

interface RitualStepRendererProps {
  step: RitualStep
  isRunning: boolean
}

export default function RitualStepRenderer({ step, isRunning }: RitualStepRendererProps) {
  const [inputValue, setInputValue] = useState("")

  if (!step) return null

  switch (step.type) {
    case "text":
      return (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          <p className="text-gray-300">{step.content}</p>
        </div>
      )

    case "timer":
    case "breathwork":
      return (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          {step.description && <p className="mb-6 text-gray-300">{step.description}</p>}
          <div className="flex justify-center">
            <CircularProgressIndicator duration={step.duration || 60} isRunning={isRunning} />
          </div>
        </div>
      )

    case "input":
      return (
        <div>
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          {step.description && <p className="mb-4 text-gray-300">{step.description}</p>}
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your thoughts here..."
            className="min-h-[120px] bg-gray-800 border-gray-700"
          />
          <Button className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            Save
          </Button>
        </div>
      )

    case "visualization":
      return (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          {step.description && <p className="mb-6 text-gray-300">{step.description}</p>}
          <div className="aspect-square w-full max-w-[240px] mx-auto rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center">
            <div className="aspect-square w-3/4 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/40 animate-pulse"></div>
          </div>
        </div>
      )

    case "sound":
      return (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          {step.description && <p className="mb-6 text-gray-300">{step.description}</p>}
          <div className="flex justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
              {isRunning ? "Pause Sound" : "Play Sound"}
            </Button>
          </div>
        </div>
      )

    default:
      return (
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold">{step.title}</h2>
          <p className="text-gray-300">This step type is not supported yet.</p>
        </div>
      )
  }
}

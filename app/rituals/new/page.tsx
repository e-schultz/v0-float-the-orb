"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react"
import Link from "next/link"
import type { StepType } from "@/lib/data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const stepTypes: { value: StepType; label: string }[] = [
  { value: "text", label: "Text Display" },
  { value: "timer", label: "Timer" },
  { value: "input", label: "Text Input" },
  { value: "breathwork", label: "Breathwork" },
  { value: "visualization", label: "Visualization" },
  { value: "sound", label: "Sound" },
  { value: "api", label: "API Call" },
]

export default function NewRitualPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")
  const [color, setColor] = useState("purple")
  const [steps, setSteps] = useState<
    Array<{
      id: string
      type: StepType
      title: string
      description?: string
      duration?: number
      content?: string
    }>
  >([
    {
      id: "step-1",
      type: "text",
      title: "Welcome",
      content: "Welcome to your ritual. Find a comfortable position and prepare to begin.",
    },
  ])

  const addStep = () => {
    const newStepId = `step-${steps.length + 1}`
    setSteps([
      ...steps,
      {
        id: newStepId,
        type: "text",
        title: "New Step",
      },
    ])
  }

  const updateStep = (index: number, field: string, value: any) => {
    const updatedSteps = [...steps]
    updatedSteps[index] = {
      ...updatedSteps[index],
      [field]: value,
    }
    setSteps(updatedSteps)
  }

  const removeStep = (index: number) => {
    if (steps.length <= 1) {
      toast({
        title: "Cannot remove step",
        description: "A ritual must have at least one step.",
        variant: "destructive",
      })
      return
    }

    const updatedSteps = [...steps]
    updatedSteps.splice(index, 1)
    setSteps(updatedSteps)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide a name for your ritual.",
        variant: "destructive",
      })
      return
    }

    if (steps.some((step) => !step.title.trim())) {
      toast({
        title: "Missing information",
        description: "All steps must have a title.",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would save the ritual to a database here
    toast({
      title: "Ritual created",
      description: "Your new ritual has been created successfully.",
    })

    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <h1 className="text-xl font-bold">Create New Ritual</h1>
          </div>
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex-1 p-4">
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <Card className="mb-8 border border-gray-800 bg-gray-900/50">
            <CardHeader>
              <h2 className="text-xl font-bold">Ritual Details</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ritual Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter ritual name"
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your ritual"
                  className="min-h-[100px] bg-gray-800 border-gray-700"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="meditation, morning, focus"
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="color">Color Theme</Label>
                  <Select value={color} onValueChange={setColor}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="purple">Purple</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="pink">Pink</SelectItem>
                      <SelectItem value="cyan">Cyan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Ritual Steps</h2>
            <Button
              type="button"
              onClick={addStep}
              variant="outline"
              className="border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Step
            </Button>
          </div>

          {steps.map((step, index) => (
            <Card key={step.id} className="mb-4 border border-gray-800 bg-gray-900/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <h3 className="text-lg font-medium">Step {index + 1}</h3>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeStep(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`step-${index}-title`}>Title</Label>
                    <Input
                      id={`step-${index}-title`}
                      value={step.title}
                      onChange={(e) => updateStep(index, "title", e.target.value)}
                      placeholder="Step title"
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`step-${index}-type`}>Step Type</Label>
                    <Select value={step.type} onValueChange={(value) => updateStep(index, "type", value)}>
                      <SelectTrigger id={`step-${index}-type`} className="bg-gray-800 border-gray-700">
                        <SelectValue placeholder="Select step type" />
                      </SelectTrigger>
                      <SelectContent>
                        {stepTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {(step.type === "timer" || step.type === "breathwork" || step.type === "visualization") && (
                  <div className="space-y-2">
                    <Label htmlFor={`step-${index}-duration`}>Duration (seconds)</Label>
                    <Input
                      id={`step-${index}-duration`}
                      type="number"
                      value={step.duration || 60}
                      onChange={(e) => updateStep(index, "duration", Number.parseInt(e.target.value))}
                      min={1}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>
                )}

                {(step.type === "text" ||
                  step.type === "input" ||
                  step.type === "visualization" ||
                  step.type === "breathwork") && (
                  <div className="space-y-2">
                    <Label htmlFor={`step-${index}-description`}>
                      {step.type === "text" ? "Content" : "Description"}
                    </Label>
                    <Textarea
                      id={`step-${index}-description`}
                      value={step.type === "text" ? step.content || "" : step.description || ""}
                      onChange={(e) =>
                        updateStep(index, step.type === "text" ? "content" : "description", e.target.value)
                      }
                      placeholder={step.type === "text" ? "Text content to display" : "Step description"}
                      className="min-h-[100px] bg-gray-800 border-gray-700"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          <div className="mt-8 flex justify-end">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Ritual
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import { rituals, scheduledRituals } from "@/lib/data"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

const daysOfWeek = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
]

export default function ScheduleRitualPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const ritualId = params.id

  const ritual = rituals.find((r) => r.id === ritualId)
  const existingSchedule = scheduledRituals.find((s) => s.ritualId === ritualId)

  const [frequency, setFrequency] = useState(existingSchedule?.frequency || "daily")
  const [time, setTime] = useState(existingSchedule?.time || "08:00")
  const [selectedDays, setSelectedDays] = useState<string[]>(
    existingSchedule?.days || ["monday", "wednesday", "friday"],
  )
  const [enabled, setEnabled] = useState(existingSchedule?.enabled ?? true)

  if (!ritual) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold">Ritual not found</h1>
        <Link href="/" className="mt-4">
          <Button>Return Home</Button>
        </Link>
      </div>
    )
  }

  const handleDayToggle = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selectedDays.length === 0) {
      toast({
        title: "Invalid schedule",
        description: "Please select at least one day for the ritual.",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would save the schedule to a database here
    toast({
      title: "Schedule updated",
      description: "Your ritual schedule has been updated successfully.",
    })

    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <h1 className="text-xl font-bold">{ritual.name} - Schedule</h1>
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
          <Card className="mb-6 border border-gray-800 bg-gray-900/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Schedule Settings</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Enable Schedule</span>
                  <Switch checked={enabled} onCheckedChange={setEnabled} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger id="frequency" className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Days</Label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {daysOfWeek.map((day) => (
                    <div key={day.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={day.id}
                        checked={selectedDays.includes(day.id)}
                        onCheckedChange={() => handleDayToggle(day.id)}
                      />
                      <label
                        htmlFor={day.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {day.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="border-red-800 bg-red-900/20 text-red-400 hover:bg-red-900/40 hover:text-red-300"
              onClick={() => {
                if (confirm("Are you sure you want to delete this schedule?")) {
                  toast({
                    title: "Schedule deleted",
                    description: "Your ritual schedule has been deleted.",
                  })
                  router.push("/")
                }
              }}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Schedule
            </Button>

            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Schedule
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

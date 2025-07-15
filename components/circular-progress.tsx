"use client"

import { useEffect, useState } from "react"

interface CircularProgressIndicatorProps {
  duration: number // in seconds
  isRunning: boolean
}

export function CircularProgressIndicator({ duration, isRunning }: CircularProgressIndicatorProps) {
  const [progress, setProgress] = useState(0)
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(interval)
            return 0
          }
          const newTimeLeft = prev - 1
          setProgress((1 - newTimeLeft / duration) * 100)
          return newTimeLeft
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [duration, isRunning])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const radius = 60
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress / 100)

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg className="h-full w-full" viewBox="0 0 150 150">
        <circle cx="75" cy="75" r={radius} fill="transparent" stroke="#1e293b" strokeWidth="8" />
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 75 75)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-2xl font-bold">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>
    </div>
  )
}

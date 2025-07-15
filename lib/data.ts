export const rituals = [
  {
    id: "morning-clarity",
    name: "Morning Clarity Ritual",
    description: "A gentle morning ritual to center your thoughts and prepare for the day ahead.",
    steps: 5,
    lastPerformed: new Date(Date.now() - 86400000), // yesterday
    duration: 15,
    tags: ["morning", "meditation", "focus"],
    color: "blue",
  },
  {
    id: "creative-pulse",
    name: "Creative Pulse Weaver",
    description: "Unlock creative energy through guided visualization and structured expression.",
    steps: 7,
    lastPerformed: new Date(Date.now() - 259200000), // 3 days ago
    duration: 25,
    tags: ["creativity", "expression", "flow"],
    color: "purple",
  },
  {
    id: "digital-detox",
    name: "Digital Detox Drift",
    description: "A ritual for disconnecting from digital noise and reconnecting with analog presence.",
    steps: 4,
    lastPerformed: null,
    duration: 30,
    tags: ["detox", "mindfulness", "analog"],
    color: "green",
  },
  {
    id: "sacred-coding",
    name: "Sacred Coding Space",
    description: "Transform coding into a sacred practice with intentional focus and rhythmic flow.",
    steps: 6,
    lastPerformed: new Date(Date.now() - 604800000), // 7 days ago
    duration: 45,
    tags: ["coding", "flow", "creation"],
    color: "cyan",
  },
  {
    id: "dream-weaving",
    name: "Dream Weaving Protocol",
    description: "Record and analyze dream patterns to unlock subconscious insights.",
    steps: 3,
    lastPerformed: new Date(Date.now() - 172800000), // 2 days ago
    duration: 10,
    tags: ["dreams", "reflection", "insight"],
    color: "pink",
  },
]

export type StepType = "timer" | "text" | "sound" | "input" | "breathwork" | "visualization" | "api"

export interface RitualStep {
  id: string
  type: StepType
  title: string
  description?: string
  duration?: number // in seconds
  content?: string
  soundUrl?: string
  apiEndpoint?: string
  apiMethod?: "GET" | "POST"
  apiPayload?: Record<string, any>
}

export const ritualSteps: Record<string, RitualStep[]> = {
  "morning-clarity": [
    {
      id: "step-1",
      type: "text",
      title: "Welcome",
      content: "Welcome to your Morning Clarity Ritual. Find a comfortable position and prepare to begin.",
    },
    {
      id: "step-2",
      type: "breathwork",
      title: "Deep Breathing",
      description: "Follow the breathing pattern",
      duration: 120,
    },
    {
      id: "step-3",
      type: "visualization",
      title: "Day Visualization",
      description: "Visualize your ideal day unfolding",
      duration: 180,
    },
    {
      id: "step-4",
      type: "input",
      title: "Intention Setting",
      description: "Write your intention for the day",
    },
    {
      id: "step-5",
      type: "text",
      title: "Completion",
      content: "Your Morning Clarity Ritual is complete. Carry this energy with you throughout your day.",
    },
  ],
}

export const ritualHistory = [
  {
    id: "hist-1",
    ritualId: "morning-clarity",
    completedAt: new Date(Date.now() - 86400000),
    duration: 14.5, // minutes
    notes: "Felt centered and clear afterward. Ready for the day.",
    mood: "calm",
  },
  {
    id: "hist-2",
    ritualId: "morning-clarity",
    completedAt: new Date(Date.now() - 172800000),
    duration: 16.2,
    notes: "Struggled with focus today but completed the ritual.",
    mood: "distracted",
  },
  {
    id: "hist-3",
    ritualId: "creative-pulse",
    completedAt: new Date(Date.now() - 259200000),
    duration: 27.5,
    notes: "Breakthrough idea during the visualization step!",
    mood: "inspired",
  },
]

export const scheduledRituals = [
  {
    id: "sched-1",
    ritualId: "morning-clarity",
    frequency: "daily",
    time: "07:00",
    days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    enabled: true,
  },
  {
    id: "sched-2",
    ritualId: "creative-pulse",
    frequency: "weekly",
    time: "14:00",
    days: ["saturday"],
    enabled: true,
  },
]

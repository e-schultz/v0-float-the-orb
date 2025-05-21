"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamic import with ssr: false moved to this client component
const Globe = dynamic(() => import("@/components/Globe"), { ssr: false })

export default function GlobeContainer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Globe />
    </Suspense>
  )
}

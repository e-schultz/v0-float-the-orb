import GlobeContainer from "@/components/GlobeContainer"
import FloatOverlay from "@/components/FloatOverlay"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <GlobeContainer />
      <FloatOverlay />
    </main>
  )
}

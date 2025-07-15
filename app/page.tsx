import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import RitualCard from "@/components/ritual-card"
import { rituals } from "@/lib/data"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <h1 className="text-xl font-bold">FLOAT Ritual System</h1>
          </div>
          <Link href="/rituals/new">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Ritual
            </Button>
          </Link>
        </div>
      </header>

      <section className="container mx-auto p-4">
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Your Ritual Space
          </h2>
          <p className="text-gray-400">
            A cosmology of practices, rituals, and methodologies for navigating your sacred challenges
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rituals.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>
      </section>
    </main>
  )
}

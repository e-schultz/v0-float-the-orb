import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { rituals, ritualHistory } from "@/lib/data"
import { format } from "date-fns"

export default function RitualHistoryPage({ params }: { params: { id: string } }) {
  const ritualId = params.id
  const ritual = rituals.find((r) => r.id === ritualId)
  const history = ritualHistory.filter((h) => h.ritualId === ritualId)

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

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-500"></div>
            <h1 className="text-xl font-bold">{ritual.name} - History</h1>
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
        <div className="mx-auto max-w-2xl">
          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((entry) => (
                <Card key={entry.id} className="border border-gray-800 bg-gray-900/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4" />
                        <span>{format(entry.completedAt, "PPP")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="h-4 w-4" />
                        <span>{entry.duration} minutes</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-gray-800 px-3 py-1 text-sm">
                        Mood: {entry.mood}
                      </span>
                    </div>
                    <p className="text-gray-300">{entry.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border border-gray-800 bg-gray-900/50">
              <CardContent className="p-6 text-center">
                <p className="text-gray-300">No history records found for this ritual.</p>
                <p className="mt-2 text-gray-400">Complete this ritual to start building your history.</p>
                <div className="mt-4">
                  <Link href={`/rituals/${ritualId}/perform`}>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                      Perform Ritual
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

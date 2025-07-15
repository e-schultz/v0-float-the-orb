import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, MoreVertical, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface RitualCardProps {
  ritual: {
    id: string
    name: string
    description: string
    steps: number
    lastPerformed: Date | null
    duration: number
    tags: string[]
    color: string
  }
}

export default function RitualCard({ ritual }: RitualCardProps) {
  const gradientMap = {
    purple: "from-purple-600 to-indigo-600",
    blue: "from-blue-600 to-cyan-600",
    green: "from-green-600 to-emerald-600",
    pink: "from-pink-600 to-purple-600",
    cyan: "from-cyan-600 to-blue-600",
  }

  const gradient = gradientMap[ritual.color as keyof typeof gradientMap] || "from-purple-600 to-indigo-600"

  return (
    <Card className="overflow-hidden border border-gray-800 bg-gray-900/50 transition-all hover:border-gray-700">
      <CardHeader className={`bg-gradient-to-r ${gradient} p-4`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{ritual.name}</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={`/rituals/${ritual.id}/edit`} className="w-full">
                  Edit Ritual
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/rituals/${ritual.id}/history`} className="w-full">
                  View History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/rituals/${ritual.id}/schedule`} className="w-full">
                  Schedule
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="mb-4 text-sm text-gray-400">{ritual.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {ritual.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-gray-700 bg-gray-800/50 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{ritual.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {ritual.lastPerformed
                ? `Last: ${formatDistanceToNow(ritual.lastPerformed, { addSuffix: true })}`
                : "Never performed"}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-800 p-4">
        <Link href={`/rituals/${ritual.id}/perform`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Play className="mr-2 h-4 w-4" />
            Begin Ritual
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

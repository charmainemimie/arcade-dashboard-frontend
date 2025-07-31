"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Gamepad2,
  Search,
  Clock,
  Users,
  Star,
  Calendar,
  MapPin,
  Zap,
  Trophy,
  Filter,
  BookOpen,
  Timer,
} from "lucide-react"
import { useState } from "react"

// Sample games data for customer booking
const games = [
  {
    id: 1,
    name: "Street Fighter VI",
    category: "Fighting",
    description: "The latest in the legendary fighting game series with stunning graphics and new mechanics.",
    image: "/placeholder.svg?height=200&width=300&text=Street+Fighter+VI",
    difficulty: "Medium",
    players: "1-2 Players",
    duration: "15-30 min",
    price: 8.0,
    rating: 4.8,
    location: "Main Floor - Station A1",
    availability: "available",
    nextSlot: "2:30 PM",
    waitTime: 0,
    features: ["HD Graphics", "Online Leaderboards", "Tournament Mode"],
    ageRating: "T",
  },
  {
    id: 2,
    name: "Beat Saber VR",
    category: "VR",
    description: "Slice beats with lightsabers in this immersive rhythm VR experience.",
    image: "/placeholder.svg?height=200&width=300&text=Beat+Saber+VR",
    difficulty: "Easy",
    players: "1 Player",
    duration: "10-20 min",
    price: 12.0,
    rating: 4.9,
    location: "VR Zone - Pod 1",
    availability: "busy",
    nextSlot: "3:15 PM",
    waitTime: 25,
    features: ["Full VR Immersion", "Custom Songs", "Fitness Tracking"],
    ageRating: "E",
  },
  {
    id: 3,
    name: "Dance Dance Revolution A3",
    category: "Rhythm",
    description: "Step to the beat in this classic dance rhythm game with the latest songs.",
    image: "/placeholder.svg?height=200&width=300&text=DDR+A3",
    difficulty: "Hard",
    players: "1-2 Players",
    duration: "5-15 min",
    price: 6.0,
    rating: 4.7,
    location: "Main Floor - Dance Area",
    availability: "maintenance",
    nextSlot: "Tomorrow",
    waitTime: null,
    features: ["Latest J-Pop Hits", "Workout Mode", "Multiplayer Battles"],
    ageRating: "E",
  },
  {
    id: 4,
    name: "Time Crisis 5",
    category: "Shooter",
    description: "Fast-paced light gun shooter with cinematic action sequences.",
    image: "/placeholder.svg?height=200&width=300&text=Time+Crisis+5",
    difficulty: "Medium",
    players: "1-2 Players",
    duration: "20-30 min",
    price: 10.0,
    rating: 4.6,
    location: "Main Floor - Shooter Zone",
    availability: "available",
    nextSlot: "Now",
    waitTime: 0,
    features: ["Co-op Campaign", "Multiple Weapons", "Boss Battles"],
    ageRating: "T",
  },
  {
    id: 5,
    name: "Pac-Man Championship DX",
    category: "Classic",
    description: "The classic maze game reimagined with modern twists and power-ups.",
    image: "/placeholder.svg?height=200&width=300&text=Pac-Man+DX",
    difficulty: "Easy",
    players: "1 Player",
    duration: "10-20 min",
    price: 4.0,
    rating: 4.5,
    location: "Retro Zone - Classic Corner",
    availability: "available",
    nextSlot: "Now",
    waitTime: 0,
    features: ["Classic Gameplay", "Power Pellets", "High Score Challenges"],
    ageRating: "E",
  },
  {
    id: 6,
    name: "Medieval Madness Pinball",
    category: "Pinball",
    description: "Medieval-themed pinball with castle destruction and multiball madness.",
    image: "/placeholder.svg?height=200&width=300&text=Medieval+Madness",
    difficulty: "Hard",
    players: "1 Player",
    duration: "15-25 min",
    price: 5.0,
    rating: 4.8,
    location: "Pinball Corner - Table 2",
    availability: "busy",
    nextSlot: "2:45 PM",
    waitTime: 15,
    features: ["Multiball Action", "Castle Destruction", "Medieval Theme"],
    ageRating: "E",
  },
  {
    id: 7,
    name: "Tekken 8",
    category: "Fighting",
    description: "The newest entry in the King of Iron Fist Tournament with stunning visuals.",
    image: "/placeholder.svg?height=200&width=300&text=Tekken+8",
    difficulty: "Hard",
    players: "1-2 Players",
    duration: "15-30 min",
    price: 8.0,
    rating: 4.9,
    location: "Main Floor - Station A2",
    availability: "available",
    nextSlot: "Now",
    waitTime: 0,
    features: ["New Characters", "Rage Arts", "Story Mode"],
    ageRating: "T",
  },
  {
    id: 8,
    name: "Half-Life: Alyx VR",
    category: "VR",
    description: "Immersive VR adventure in the Half-Life universe with puzzle-solving action.",
    image: "/placeholder.svg?height=200&width=300&text=Half-Life+Alyx",
    difficulty: "Medium",
    players: "1 Player",
    duration: "30-45 min",
    price: 15.0,
    rating: 4.9,
    location: "VR Zone - Pod 2",
    availability: "available",
    nextSlot: "3:00 PM",
    waitTime: 0,
    features: ["Story Campaign", "Physics Puzzles", "Immersive World"],
    ageRating: "M",
  },
]

const getAvailabilityBadge = (availability: string) => {
  switch (availability) {
    case "available":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Available</Badge>
    case "busy":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Busy</Badge>
    case "maintenance":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Maintenance</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-600"
    case "Medium":
      return "text-yellow-600"
    case "Hard":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const [selectedGame, setSelectedGame] = useState<(typeof games)[0] | null>(null)

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || game.category.toLowerCase() === categoryFilter.toLowerCase()
    const matchesAvailability = availabilityFilter === "all" || game.availability === availabilityFilter

    return matchesSearch && matchesCategory && matchesAvailability
  })

  const availableGames = games.filter((game) => game.availability === "available").length
  const busyGames = games.filter((game) => game.availability === "busy").length

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Arcade Central</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Book Games</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold">Book Your Gaming Experience</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reserve your spot on our premium arcade games. Choose from classic favorites to cutting-edge VR
              experiences.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Available Now</CardTitle>
                <Zap className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{availableGames}</div>
                <p className="text-xs text-muted-foreground">Games ready to play</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Currently Busy</CardTitle>
                <Timer className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{busyGames}</div>
                <p className="text-xs text-muted-foreground">Join the queue</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Games</CardTitle>
                <Trophy className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{games.length}</div>
                <p className="text-xs text-muted-foreground">Amazing experiences</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search games..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-64"
                    />
                  </div>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="fighting">Fighting</SelectItem>
                      <SelectItem value="vr">VR Experience</SelectItem>
                      <SelectItem value="rhythm">Rhythm</SelectItem>
                      <SelectItem value="shooter">Shooter</SelectItem>
                      <SelectItem value="classic">Classic</SelectItem>
                      <SelectItem value="pinball">Pinball</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Games</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="busy">Busy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{filteredGames.length} games found</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Games Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredGames.map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2">{getAvailabilityBadge(game.availability)}</div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-white/90">
                      {game.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{game.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{game.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className={`text-sm font-medium ${getDifficultyColor(game.difficulty)}`}>
                          {game.difficulty}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${game.price}</div>
                      <div className="text-xs text-muted-foreground">per session</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">{game.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{game.players}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{game.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs">{game.nextSlot}</span>
                    </div>
                  </div>

                  {game.waitTime !== null && game.waitTime > 0 && (
                    <div className="flex items-center gap-2 p-2 bg-yellow-50 rounded-md">
                      <Timer className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm text-yellow-700">~{game.waitTime} min wait</span>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={() => setSelectedGame(game)}
                        >
                          <BookOpen className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Gamepad2 className="h-5 w-5" />
                            {selectedGame?.name}
                          </DialogTitle>
                          <DialogDescription>{selectedGame?.description}</DialogDescription>
                        </DialogHeader>
                        {selectedGame && (
                          <div className="space-y-4">
                            <img
                              src={selectedGame.image || "/placeholder.svg"}
                              alt={selectedGame.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm font-medium">Game Details</Label>
                                <div className="space-y-2 mt-2">
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Category:</span>
                                    <Badge variant="outline">{selectedGame.category}</Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Difficulty:</span>
                                    <span
                                      className={`text-sm font-medium ${getDifficultyColor(selectedGame.difficulty)}`}
                                    >
                                      {selectedGame.difficulty}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Players:</span>
                                    <span className="text-sm">{selectedGame.players}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Duration:</span>
                                    <span className="text-sm">{selectedGame.duration}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Age Rating:</span>
                                    <Badge variant="secondary">{selectedGame.ageRating}</Badge>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <Label className="text-sm font-medium">Features</Label>
                                <div className="space-y-1 mt-2">
                                  {selectedGame.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                      <span className="text-sm">{feature}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium">Location: {selectedGame.location}</div>
                                <div className="text-sm text-muted-foreground">
                                  Next available: {selectedGame.nextSlot}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold">${selectedGame.price}</div>
                                <div className="text-sm text-muted-foreground">per session</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button className="flex-1" disabled={game.availability === "maintenance"}>
                      {game.availability === "available" ? (
                        <>
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Now
                        </>
                      ) : game.availability === "busy" ? (
                        <>
                          <Timer className="h-4 w-4 mr-2" />
                          Join Queue
                        </>
                      ) : (
                        "Unavailable"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <Gamepad2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No games found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters to find more games.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

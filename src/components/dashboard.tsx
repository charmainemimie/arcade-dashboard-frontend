import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Calendar, DollarSign } from "lucide-react"

export function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Total Games</CardTitle>
            <Gamepad2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground hidden sm:block">Active arcade games</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground hidden sm:block">Registered users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Today's Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground hidden sm:block">Active reservations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs md:text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl md:text-2xl font-bold">$2,450</div>
            <p className="text-xs text-muted-foreground hidden sm:block">Today's earnings</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-muted rounded gap-1 sm:gap-0">
                <span className="text-sm">New customer registered</span>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-muted rounded gap-1 sm:gap-0">
                <span className="text-sm">Game "Street Fighter" booked</span>
                <span className="text-xs text-muted-foreground">5 min ago</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-muted rounded gap-1 sm:gap-0">
                <span className="text-sm">Payment received: $25</span>
                <span className="text-xs text-muted-foreground">10 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Popular Games</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Street Fighter VI</span>
                <span className="text-sm font-medium">85 plays</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pac-Man</span>
                <span className="text-sm font-medium">72 plays</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Tekken 8</span>
                <span className="text-sm font-medium">68 plays</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

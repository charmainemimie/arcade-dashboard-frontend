"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle,
  Timer,
  Gamepad2,
  Star,
  UserCheck,
} from "lucide-react"

export default function Page() {
  return (
    <>
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
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Booking Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,847</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+18.2%</span> from yesterday
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">12 queued</span> for next slots
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+15</span> walk-ins
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Capacity Utilization</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-yellow-600">Peak at 3PM</span> (95%)
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Most Booked Games Today</CardTitle>
                <CardDescription>Session bookings and revenue by game</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Beat Saber VR</span>
                    <Badge variant="secondary">VR</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$384</div>
                    <div className="text-sm text-muted-foreground">32 sessions</div>
                  </div>
                </div>
                <Progress value={92} className="h-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Street Fighter VI</span>
                    <Badge variant="secondary">Fighting</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$312</div>
                    <div className="text-sm text-muted-foreground">39 sessions</div>
                  </div>
                </div>
                <Progress value={78} className="h-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">Time Crisis 5</span>
                    <Badge variant="secondary">Shooter</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$280</div>
                    <div className="text-sm text-muted-foreground">28 sessions</div>
                  </div>
                </div>
                <Progress value={68} className="h-2" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Tekken 8</span>
                    <Badge variant="secondary">Fighting</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">$248</div>
                    <div className="text-sm text-muted-foreground">31 sessions</div>
                  </div>
                </div>
                <Progress value={58} className="h-2" />
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Live Operations</CardTitle>
                <CardDescription>Current bookings and system status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <UserCheck className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">VIP Customer Check-in</p>
                    <p className="text-xs text-muted-foreground">Premium member "Alex K." arrived for 2:30 PM slot</p>
                    <p className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />2 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Timer className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Queue Alert - DDR Station</p>
                    <p className="text-xs text-muted-foreground">5 customers waiting, avg wait time 12 min</p>
                    <p className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />5 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Session Completed</p>
                    <p className="text-xs text-muted-foreground">Medieval Madness - Customer rated 5 stars</p>
                    <p className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />8 minutes ago
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Booking Conflict</p>
                    <p className="text-xs text-muted-foreground">Double booking detected for Pac-Man at 3:15 PM</p>
                    <p className="text-xs text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      12 minutes ago
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Peak Booking Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>2:00 PM - 4:00 PM</span>
                    <span className="font-medium">34 bookings</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>6:00 PM - 8:00 PM</span>
                    <span className="font-medium">42 bookings</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>8:00 PM - 10:00 PM</span>
                    <span className="font-medium">28 bookings</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Customer Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New Customers</span>
                    <Badge variant="outline">12 today</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Returning Customers</span>
                    <Badge variant="outline">67 today</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avg Session Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  Manage Bookings
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Update Game Status
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                  <Users className="h-4 w-4 mr-2" />
                  Check-in Customer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
  )
}

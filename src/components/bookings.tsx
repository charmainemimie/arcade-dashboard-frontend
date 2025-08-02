import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const bookings = [
  {
    id: 1,
    customer: "John Doe",
    game: "Street Fighter VI",
    date: "2024-01-15",
    time: "14:30",
    duration: "30 min",
    status: "Confirmed",
    amount: "$5.00",
  },
  {
    id: 2,
    customer: "Jane Smith",
    game: "Pac-Man",
    date: "2024-01-15",
    time: "15:00",
    duration: "45 min",
    status: "In Progress",
    amount: "$3.75",
  },
  {
    id: 3,
    customer: "Mike Johnson",
    game: "Tekken 8",
    date: "2024-01-15",
    time: "16:00",
    duration: "60 min",
    status: "Pending",
    amount: "$10.00",
  },
  {
    id: 4,
    customer: "Sarah Wilson",
    game: "Mortal Kombat",
    date: "2024-01-15",
    time: "17:30",
    duration: "30 min",
    status: "Completed",
    amount: "$5.00",
  },
]

export function Bookings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Booking Management</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Game</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.customer}</TableCell>
                  <TableCell>{booking.game}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        booking.status === "Confirmed"
                          ? "default"
                          : booking.status === "In Progress"
                            ? "secondary"
                            : booking.status === "Completed"
                              ? "outline"
                              : "destructive"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{booking.amount}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

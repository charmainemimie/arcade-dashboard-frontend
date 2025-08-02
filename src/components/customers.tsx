import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", status: "Active", totalSpent: "$125.50" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1234567891",
    status: "Active",
    totalSpent: "$89.25",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1234567892",
    status: "Inactive",
    totalSpent: "$45.00",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+1234567893",
    status: "Active",
    totalSpent: "$234.75",
  },
  { id: 5, name: "Tom Brown", email: "tom@example.com", phone: "+1234567894", status: "Active", totalSpent: "$67.50" },
]

export function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Customer Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name, email, or phone..." className="pl-8" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All Customers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>
                    <Badge variant={customer.status === "Active" ? "default" : "secondary"}>{customer.status}</Badge>
                  </TableCell>
                  <TableCell>{customer.totalSpent}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
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

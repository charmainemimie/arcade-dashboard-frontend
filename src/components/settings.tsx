import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Arcade Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="arcade-name">Arcade Name</Label>
                <Input id="arcade-name" defaultValue="Super Arcade Center" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" defaultValue="123 Gaming Street, Fun City, FC 12345" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="opening">Opening Time</Label>
                <Input id="opening" type="time" defaultValue="10:00" />
              </div>
              <div>
                <Label htmlFor="closing">Closing Time</Label>
                <Input id="closing" type="time" defaultValue="22:00" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="advance-booking">Allow Advance Booking</Label>
                <p className="text-sm text-muted-foreground">Enable customers to book games in advance</p>
              </div>
              <Switch id="advance-booking" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-confirm">Auto-confirm Bookings</Label>
                <p className="text-sm text-muted-foreground">Automatically confirm new bookings</p>
              </div>
              <Switch id="auto-confirm" defaultChecked />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="max-duration">Max Booking Duration (minutes)</Label>
                <Input id="max-duration" type="number" defaultValue="120" />
              </div>
              <div>
                <Label htmlFor="min-duration">Min Booking Duration (minutes)</Label>
                <Input id="min-duration" type="number" defaultValue="15" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Send email notifications for bookings</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
                <p className="text-sm text-muted-foreground">Send SMS notifications for bookings</p>
              </div>
              <Switch id="sms-notifications" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button>Save Settings</Button>
        </div>
      </div>
    </div>
  )
}

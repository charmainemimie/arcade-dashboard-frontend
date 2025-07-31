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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Settings,
  DollarSign,
  Users,
  Bell,
  Palette,
  Clock,
  MapPin,
  Plus,
  Trash2,
  Edit,
  Shield,
  Save,
} from "lucide-react"

export default function SettingsPage() {
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
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>

          <Tabs defaultValue="general" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Arcade Information
                    </CardTitle>
                    <CardDescription>Basic information about your arcade location</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="arcade-name">Arcade Name</Label>
                      <Input id="arcade-name" defaultValue="Arcade Central" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea
                        id="address"
                        defaultValue="123 Gaming Street, Entertainment District, City 12345"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="info@arcadecentral.com" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Operating Hours
                    </CardTitle>
                    <CardDescription>Set your arcade's operating schedule</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                        <div key={day} className="flex items-center justify-between">
                          <Label className="w-20">{day}</Label>
                          <div className="flex items-center gap-2">
                            <Input className="w-20" defaultValue="10:00" />
                            <span>to</span>
                            <Input className="w-20" defaultValue="22:00" />
                            <Switch defaultChecked={day !== "Monday"} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Arcade Description</CardTitle>
                  <CardDescription>Description that appears on your website and marketing materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter arcade description..."
                    defaultValue="Welcome to Arcade Central, the ultimate gaming destination featuring the latest arcade games, classic retro machines, and immersive VR experiences. Perfect for families, friends, and gaming enthusiasts of all ages."
                    rows={4}
                  />
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save General Settings
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Game Pricing
                    </CardTitle>
                    <CardDescription>Set default pricing for different game categories</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label>Classic Arcade Games</Label>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="0.50" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Modern Fighting Games</Label>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="1.00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>VR Experiences</Label>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="3.00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Pinball Machines</Label>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="0.75" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Label>Rhythm Games</Label>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="1.25" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Membership & Packages</CardTitle>
                    <CardDescription>Configure membership tiers and game packages</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Daily Pass</Label>
                          <p className="text-sm text-muted-foreground">Unlimited play for one day</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="25.00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Weekly Pass</Label>
                          <p className="text-sm text-muted-foreground">Unlimited play for one week</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="75.00" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Monthly Membership</Label>
                          <p className="text-sm text-muted-foreground">Unlimited play + 10% food discount</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>$</span>
                          <Input className="w-20" defaultValue="150.00" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Special Offers</CardTitle>
                  <CardDescription>Configure promotional pricing and discounts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Happy Hour Discount</Label>
                      <p className="text-sm text-muted-foreground">Monday-Friday 2PM-5PM</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input className="w-20" defaultValue="25" />
                      <span>% off</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Student Discount</Label>
                      <p className="text-sm text-muted-foreground">With valid student ID</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input className="w-20" defaultValue="15" />
                      <span>% off</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Group Discount</Label>
                      <p className="text-sm text-muted-foreground">5+ people</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input className="w-20" defaultValue="20" />
                      <span>% off</span>
                      <Switch />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Pricing Settings
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="staff" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Staff Management</h3>
                  <p className="text-sm text-muted-foreground">Manage your arcade staff and their permissions</p>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Staff Member
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Current Staff
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Alex Johnson",
                        role: "Manager",
                        email: "alex@arcadecentral.com",
                        status: "Active",
                        avatar: "AJ",
                      },
                      {
                        name: "Sarah Chen",
                        role: "Floor Supervisor",
                        email: "sarah@arcadecentral.com",
                        status: "Active",
                        avatar: "SC",
                      },
                      {
                        name: "Mike Rodriguez",
                        role: "Technician",
                        email: "mike@arcadecentral.com",
                        status: "Active",
                        avatar: "MR",
                      },
                      {
                        name: "Emma Wilson",
                        role: "Customer Service",
                        email: "emma@arcadecentral.com",
                        status: "Off Duty",
                        avatar: "EW",
                      },
                      {
                        name: "David Kim",
                        role: "Technician",
                        email: "david@arcadecentral.com",
                        status: "Active",
                        avatar: "DK",
                      },
                    ].map((staff, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                            <AvatarFallback>{staff.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-sm text-muted-foreground">{staff.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={staff.status === "Active" ? "default" : "secondary"}>{staff.status}</Badge>
                          <Badge variant="outline">{staff.role}</Badge>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Role Permissions
                  </CardTitle>
                  <CardDescription>Configure what each role can access and modify</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-4 text-sm font-medium border-b pb-2">
                      <div>Permission</div>
                      <div>Manager</div>
                      <div>Supervisor</div>
                      <div>Staff</div>
                    </div>
                    {[
                      { permission: "View Dashboard", manager: true, supervisor: true, staff: true },
                      { permission: "Manage Games", manager: true, supervisor: true, staff: false },
                      { permission: "View Revenue", manager: true, supervisor: true, staff: false },
                      { permission: "Manage Staff", manager: true, supervisor: false, staff: false },
                      { permission: "System Settings", manager: true, supervisor: false, staff: false },
                      { permission: "Maintenance Reports", manager: true, supervisor: true, staff: true },
                    ].map((perm, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                        <div className="text-sm">{perm.permission}</div>
                        <Switch defaultChecked={perm.manager} />
                        <Switch defaultChecked={perm.supervisor} />
                        <Switch defaultChecked={perm.staff} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Staff Settings
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Email Notifications
                  </CardTitle>
                  <CardDescription>Configure when and how you receive email alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Daily Revenue Reports</Label>
                        <p className="text-sm text-muted-foreground">Receive daily revenue summaries at 11 PM</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Maintenance Alerts</Label>
                        <p className="text-sm text-muted-foreground">Get notified when games need attention</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>High Score Notifications</Label>
                        <p className="text-sm text-muted-foreground">Alert when new high scores are achieved</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Staff Schedule Changes</Label>
                        <p className="text-sm text-muted-foreground">Notify about schedule updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>System Downtime</Label>
                        <p className="text-sm text-muted-foreground">Critical system alerts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                  <CardDescription>Real-time notifications in the dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Game Offline Alerts</Label>
                        <p className="text-sm text-muted-foreground">Immediate notification when games go offline</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Peak Hour Warnings</Label>
                        <p className="text-sm text-muted-foreground">Alert when approaching capacity</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Low Cash Alerts</Label>
                        <p className="text-sm text-muted-foreground">Notify when change machines need refilling</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Recipients</CardTitle>
                  <CardDescription>Who should receive different types of notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <Label className="w-32">Revenue Reports:</Label>
                      <Input placeholder="manager@arcadecentral.com" defaultValue="alex@arcadecentral.com" />
                    </div>
                    <div className="flex items-center gap-4">
                      <Label className="w-32">Maintenance:</Label>
                      <Input
                        placeholder="tech@arcadecentral.com"
                        defaultValue="mike@arcadecentral.com, david@arcadecentral.com"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <Label className="w-32">Staff Issues:</Label>
                      <Input
                        placeholder="hr@arcadecentral.com"
                        defaultValue="alex@arcadecentral.com, sarah@arcadecentral.com"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Notification Settings
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="system" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Appearance
                    </CardTitle>
                    <CardDescription>Customize the look and feel of your dashboard</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select defaultValue="light">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Timezone</Label>
                      <Select defaultValue="est">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="est">Eastern Time (EST)</SelectItem>
                          <SelectItem value="cst">Central Time (CST)</SelectItem>
                          <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                          <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data & Privacy</CardTitle>
                    <CardDescription>Manage data retention and privacy settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Analytics Tracking</Label>
                        <p className="text-sm text-muted-foreground">Track user behavior for insights</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Data Export</Label>
                        <p className="text-sm text-muted-foreground">Allow data export for reporting</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label>Data Retention Period</Label>
                      <Select defaultValue="12">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 months</SelectItem>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>System Maintenance</CardTitle>
                  <CardDescription>Configure automatic maintenance and backup settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">Daily backup of all system data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Updates</Label>
                      <p className="text-sm text-muted-foreground">Automatically install security updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label>Maintenance Window</Label>
                    <div className="flex items-center gap-2">
                      <Input className="w-20" defaultValue="02:00" />
                      <span>to</span>
                      <Input className="w-20" defaultValue="04:00" />
                      <span>daily</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API & Integrations</CardTitle>
                  <CardDescription>Manage third-party integrations and API access</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Payment Gateway</Label>
                      <p className="text-sm text-muted-foreground">Stripe integration for card payments</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>POS System</Label>
                      <p className="text-sm text-muted-foreground">Point of sale integration</p>
                    </div>
                    <Badge variant="outline" className="text-green-600">
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Inventory Management</Label>
                      <p className="text-sm text-muted-foreground">Prize inventory tracking</p>
                    </div>
                    <Badge variant="outline" className="text-yellow-600">
                      Pending
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save System Settings
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

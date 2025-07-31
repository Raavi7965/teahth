"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, ShoppingBag, DollarSign, Package, Eye, Edit, Trash2, Plus, Shield } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 9876543210",
      products: ["Hyderabadi Special Chai", "Earl Grey Supreme"],
      total: 898,
      status: "Delivered",
      date: "2025-01-15",
      address: "Mumbai, Maharashtra",
    },
    {
      id: "ORD002",
      customer: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+91 9876543211",
      products: ["Nilgiri Green Tea", "Masala Chai Blend"],
      total: 798,
      status: "Processing",
      date: "2025-01-14",
      address: "Delhi, India",
    },
    {
      id: "ORD003",
      customer: "Anita Reddy",
      email: "anita@example.com",
      phone: "+91 9876543212",
      products: ["Hyderabadi Special Chai"],
      total: 299,
      status: "Shipped",
      date: "2025-01-13",
      address: "Hyderabad, Telangana",
    },
    {
      id: "ORD004",
      customer: "Vikram Singh",
      email: "vikram@example.com",
      phone: "+91 9876543213",
      products: ["Earl Grey Supreme", "Nilgiri Green Tea", "Masala Chai Blend"],
      total: 1347,
      status: "Pending",
      date: "2025-01-12",
      address: "Bangalore, Karnataka",
    },
  ])

  const [users] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      phone: "+91 9876543210",
      location: "Mumbai, Maharashtra",
      orders: 5,
      totalSpent: 2450,
      joinDate: "2024-12-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+91 9876543211",
      location: "Delhi, India",
      orders: 3,
      totalSpent: 1890,
      joinDate: "2024-11-15",
      status: "Active",
    },
    {
      id: 3,
      name: "Anita Reddy",
      email: "anita@example.com",
      phone: "+91 9876543212",
      location: "Hyderabad, Telangana",
      orders: 8,
      totalSpent: 3200,
      joinDate: "2024-10-20",
      status: "VIP",
    },
    {
      id: 4,
      name: "Vikram Singh",
      email: "vikram@example.com",
      phone: "+91 9876543213",
      location: "Bangalore, Karnataka",
      orders: 2,
      totalSpent: 1500,
      joinDate: "2025-01-05",
      status: "New",
    },
  ])

  const [products] = useState([
    {
      id: 1,
      name: "Hyderabadi Special Chai",
      price: 299,
      stock: 150,
      sold: 124,
      category: "Black Tea",
      status: "Active",
    },
    {
      id: 2,
      name: "Nilgiri Green Tea",
      price: 449,
      stock: 89,
      sold: 67,
      category: "Green Tea",
      status: "Active",
    },
    {
      id: 3,
      name: "Earl Grey Supreme",
      price: 599,
      stock: 45,
      sold: 156,
      category: "Black Tea",
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Masala Chai Blend",
      price: 349,
      stock: 200,
      sold: 203,
      category: "Chai Masala",
      status: "Active",
    },
  ])

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-red-100 text-red-800"
      case "active":
        return "bg-green-100 text-green-800"
      case "vip":
        return "bg-purple-100 text-purple-800"
      case "new":
        return "bg-blue-100 text-blue-800"
      case "low stock":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Hyderabad Tea House Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Admin Panel</span>
              </div>
              <Link href="/">
                <Button variant="outline">Back to Store</Button>
              </Link>
              <Link href="/admin/login">
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                  Logout
                </Button>
              </Link>
              <Button>Add Product</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93</div>
              <p className="text-xs text-muted-foreground">+5 new this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell>
                            <div>
                              <div className="font-medium">{order.customer}</div>
                              <div className="text-sm text-gray-500">{order.address}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{order.email}</div>
                              <div className="text-gray-500">{order.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">
                              {order.products.map((product, index) => (
                                <div key={index}>{product}</div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">₹{order.total}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                          </TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{user.email}</div>
                              <div className="text-gray-500">{user.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>{user.location}</TableCell>
                          <TableCell>{user.orders}</TableCell>
                          <TableCell className="font-medium">₹{user.totalSpent}</TableCell>
                          <TableCell>{user.joinDate}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Product Management</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Sold</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>₹{product.price}</TableCell>
                          <TableCell>{product.stock}</TableCell>
                          <TableCell>{product.sold}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

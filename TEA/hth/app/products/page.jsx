"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ShoppingCart, Heart, Filter, Grid, List, Leaf } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ProductsPage() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchQuery, setSearchQuery] = useState("")

  const allProducts = [
    {
      id: 1,
      name: "Hyderabadi Special Chai",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      category: "Black Tea",
      description: "Authentic Hyderabadi chai blend with cardamom and ginger",
      featured: true,
    },
    {
      id: 2,
      name: "Nilgiri Green Tea",
      price: 449,
      originalPrice: 549,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 89,
      badge: "Organic",
      category: "Green Tea",
      description: "Premium green tea from Nilgiri hills",
      featured: true,
    },
    {
      id: 3,
      name: "Earl Grey Supreme",
      price: 599,
      originalPrice: 699,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 156,
      badge: "Premium",
      category: "Black Tea",
      description: "Classic Earl Grey with bergamot oil",
      featured: true,
    },
    {
      id: 4,
      name: "Masala Chai Blend",
      price: 349,
      originalPrice: 449,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 203,
      badge: "Spicy",
      category: "Chai Masala",
      description: "Traditional masala chai with authentic spices",
      featured: false,
    },
    {
      id: 5,
      name: "Chamomile Herbal Tea",
      price: 399,
      originalPrice: 499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 78,
      badge: "Herbal",
      category: "Herbal Tea",
      description: "Soothing chamomile flowers for relaxation",
      featured: false,
    },
    {
      id: 6,
      name: "Darjeeling Black Tea",
      price: 699,
      originalPrice: 799,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 145,
      badge: "Premium",
      category: "Black Tea",
      description: "Finest Darjeeling tea with muscatel flavor",
      featured: false,
    },
    {
      id: 7,
      name: "Jasmine Green Tea",
      price: 499,
      originalPrice: 599,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 92,
      badge: "Floral",
      category: "Green Tea",
      description: "Delicate green tea scented with jasmine flowers",
      featured: false,
    },
    {
      id: 8,
      name: "Tulsi Ginger Tea",
      price: 329,
      originalPrice: 429,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviews: 67,
      badge: "Immunity",
      category: "Herbal Tea",
      description: "Holy basil and ginger blend for immunity",
      featured: false,
    },
  ]

  const categories = ["Black Tea", "Green Tea", "Herbal Tea", "Chai Masala", "White Tea"]

  const handleCategoryChange = (category, checked) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      case "featured":
      default:
        return b.featured - a.featured
    }
  })

  const addToCart = (product) => {
    setShowComingSoon(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">Hyderabad Tea House</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-green-600 font-medium border-b-2 border-green-600">
                Products
              </Link>
              <Link href="/categories" className="text-green-800 hover:text-green-600 font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">
                About
              </Link>
            </nav>
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-2 block">Search Products</Label>
                  <Input
                    type="text"
                    placeholder="Search teas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Categories</Label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked)}
                        />
                        <Label htmlFor={category} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Price Range</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-20"
                      />
                      <span>-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 1000])}
                        className="w-20"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => {
                    setSelectedCategories([])
                    setPriceRange([0, 1000])
                    setSearchQuery("")
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-green-800 mb-2">Our Tea Collection</h1>
                <p className="text-gray-600">Showing {sortedProducts.length} products</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`hover:shadow-xl transition-shadow group ${viewMode === "list" ? "flex flex-row" : ""}`}
                >
                  <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-48" : "rounded-t-lg"}`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                          viewMode === "list" ? "w-48 h-48" : "w-full h-64"
                        }`}
                      />
                      <Badge className="absolute top-3 left-3 bg-green-600">{product.badge}</Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-white"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg text-green-800">{product.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                          <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => addToCart(product)}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSelectedCategories([])
                    setPriceRange([0, 1000])
                    setSearchQuery("")
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Coming Soon!</DialogTitle>
            <DialogDescription>
              Cart functionality is coming soon. Thank you for your interest in our premium teas!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button onClick={() => setShowComingSoon(false)}>Continue Shopping</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

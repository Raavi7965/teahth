"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Search, Menu, X, Heart, Truck, Shield, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Premium Hyderabadi Tea Collection",
      subtitle: "Experience the authentic taste of Hyderabad's finest teas",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Shop Now",
    },
    {
      title: "Organic & Natural Blends",
      subtitle: "Handpicked organic teas for your wellness journey",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Explore Organic",
    },
    {
      title: "Traditional Chai Masala",
      subtitle: "Authentic spice blends from the heart of Hyderabad",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Discover Masala",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Hyderabadi Special Chai",
      price: 299,
      originalPrice: 399,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      badge: "Bestseller",
      description: "Authentic Hyderabadi chai blend with cardamom and ginger",
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
      description: "Premium green tea from Nilgiri hills",
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
      description: "Classic Earl Grey with bergamot oil",
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
      description: "Traditional masala chai with authentic spices",
    },
  ]

  const categories = [
    {
      name: "Black Tea",
      image: "/placeholder.svg?height=200&width=200",
      count: "25+ varieties",
    },
    {
      name: "Green Tea",
      image: "/placeholder.svg?height=200&width=200",
      count: "18+ varieties",
    },
    {
      name: "Herbal Tea",
      image: "/placeholder.svg?height=200&width=200",
      count: "30+ varieties",
    },
    {
      name: "Chai Masala",
      image: "/placeholder.svg?height=200&width=200",
      count: "12+ varieties",
    },
    {
      name: "White Tea",
      image: "/placeholder.svg?height=200&width=200",
      count: "8+ varieties",
    },
    {
      name: "Accessories",
      image: "/placeholder.svg?height=200&width=200",
      count: "50+ items",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "The best tea I've ever tasted! The Hyderabadi Special Chai reminds me of my grandmother's recipe.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Excellent quality and fast delivery. The Earl Grey Supreme is absolutely divine!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Anita Reddy",
      location: "Hyderabad",
      text: "As a Hyderabadi, I can confirm this is authentic! Love the traditional flavors.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    setShowComingSoon(true)
  }

  const filteredProducts = featuredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-amber-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">Hyderabad Tea House</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="text-green-800 hover:text-green-600 font-medium">
                Products
              </Link>
              <Link href="/categories" className="text-green-800 hover:text-green-600 font-medium">
                Categories
              </Link>
              <Link href="/blog" className="text-green-800 hover:text-green-600 font-medium">
                Blog
              </Link>
              <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">
                About
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search teas..."
                  className="pl-10 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" size="sm">
                    Register
                  </Button>
                </Link>
              </div>
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search teas..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Link href="/login" className="text-green-800 hover:text-green-600 font-medium">
                  Login
                </Link>
                <Link href="/register" className="text-green-800 hover:text-green-600 font-medium">
                  Register
                </Link>
                <Link href="/" className="text-green-800 hover:text-green-600 font-medium">
                  Home
                </Link>
                <Link href="/products" className="text-green-800 hover:text-green-600 font-medium">
                  Products
                </Link>
                <Link href="/categories" className="text-green-800 hover:text-green-600 font-medium">
                  Categories
                </Link>
                <Link href="/blog" className="text-green-800 hover:text-green-600 font-medium">
                  Blog
                </Link>
                <Link href="/about" className="text-green-800 hover:text-green-600 font-medium">
                  About
                </Link>
                <Link href="/admin" className="text-green-800 hover:text-green-600 font-medium">
                  Admin Panel
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders above ₹500</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% authentic and premium quality teas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic & Natural</h3>
              <p className="text-gray-600">Sustainably sourced organic tea blends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Discover our premium tea collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our most loved tea collections</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(searchQuery ? filteredProducts : featuredProducts).map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
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
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-green-800">{product.name}</h3>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from tea lovers across India</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get the latest updates on new tea arrivals and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="bg-white text-gray-800" />
            <Button className="bg-amber-600 hover:bg-amber-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-amber-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Hyderabad Tea House</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium teas from the heart of Hyderabad, delivered to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/black-tea" className="hover:text-white">
                    Black Tea
                  </Link>
                </li>
                <li>
                  <Link href="/green-tea" className="hover:text-white">
                    Green Tea
                  </Link>
                </li>
                <li>
                  <Link href="/herbal-tea" className="hover:text-white">
                    Herbal Tea
                  </Link>
                </li>
                <li>
                  <Link href="/chai-masala" className="hover:text-white">
                    Chai Masala
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="text-gray-400 space-y-2">
                <p>📍 Hyderabad, Telangana, India</p>
                <p>📞 +91 9876543210</p>
                <p>✉️ info@hyderabadteahouse.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hyderabad Tea House. All rights reserved.</p>
          </div>
        </div>
      </footer>

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

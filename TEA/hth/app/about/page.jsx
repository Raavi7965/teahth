"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Users, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Sustainability",
      description:
        "We source our teas from sustainable farms that care for the environment and support local communities.",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Quality",
      description: "Every tea leaf is carefully selected and tested to ensure the highest quality and authentic taste.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community",
      description: "We work directly with tea growers and support fair trade practices to build stronger communities.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Passion",
      description: "Our love for tea drives everything we do, from sourcing to serving the perfect cup.",
    },
  ]

  const team = [
    {
      name: "Arjun Reddy",
      role: "Founder & Tea Master",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "With 20+ years in the tea industry, Arjun brings authentic Hyderabadi tea traditions to every blend.",
    },
    {
      name: "Priya Sharma",
      role: "Head of Quality",
      image: "/placeholder.svg?height=300&width=300",
      description: "Priya ensures every tea meets our strict quality standards through careful tasting and testing.",
    },
    {
      name: "Vikram Singh",
      role: "Sourcing Manager",
      image: "/placeholder.svg?height=300&width=300",
      description: "Vikram travels across India to source the finest tea leaves directly from trusted growers.",
    },
  ]

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
              <Link href="/products" className="text-green-800 hover:text-green-600 font-medium">
                Products
              </Link>
              <Link href="/categories" className="text-green-800 hover:text-green-600 font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-green-600 font-medium border-b-2 border-green-600">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Hyderabad Tea House</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bringing you the authentic taste of Hyderabad's finest teas since 1995. We are passionate about preserving
            traditional tea culture while embracing modern quality standards.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in the heart of Hyderabad, our tea house began as a small family business with a simple
                  mission: to share the rich tea heritage of our city with the world. What started as a local tea stall
                  has grown into a premium tea brand that serves customers across India and beyond.
                </p>
                <p>
                  Our founder, inspired by his grandmother's traditional chai recipes, spent years perfecting blends
                  that capture the essence of Hyderabadi tea culture. Each cup tells a story of tradition, quality, and
                  the warm hospitality that Hyderabad is famous for.
                </p>
                <p>
                  Today, we continue to honor these traditions while embracing sustainable practices and supporting tea
                  growers across India. Every tea we offer is a testament to our commitment to quality, authenticity,
                  and the timeless art of tea making.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tea plantation"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind our premium teas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="text-green-200">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-green-200">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-green-200">Tea Varieties</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-green-200">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Experience Our Premium Teas</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of tea lovers who trust Hyderabad Tea House for authentic, premium quality teas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Our Collection
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
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
                <p>📞 +91 9393837358</p>
                <p>✉️ hyderabadteahouse@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hyderabad Tea House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

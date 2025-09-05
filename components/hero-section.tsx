"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  // count-up states
  const [customers, setCustomers] = useState(0)
  const [products, setProducts] = useState(0)
  const [years, setYears] = useState(0)

  // simple count-up animation
  useEffect(() => {
    const animate = (setter: (val: number) => void, target: number, duration = 2000) => {
      let start = 0
      const stepTime = Math.abs(Math.floor(duration / target))
      const timer = setInterval(() => {
        start += 1
        setter(start)
        if (start >= target) clearInterval(timer)
      }, stepTime)
    }

    animate(setCustomers, 10000)
    animate(setProducts, 500)
    animate(setYears, 14)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your Space with
              <span className="text-yellow-400"> Premium Furniture</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our curated collection of modern, comfortable, and stylish furniture designed to make your house
              feel like home.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black px-8 py-4 text-lg 
                             hover:bg-yellow-500 transition-colors duration-300 !important"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white text-white bg-transparent px-8 py-4 text-lg 
                             hover:bg-white hover:text-black transition-colors duration-300 !important"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats with count-up */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400">{customers.toLocaleString()}+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{products}+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">{years}</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Modern living room furniture"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

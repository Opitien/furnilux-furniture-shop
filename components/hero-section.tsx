import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your Space with
              <span className="text-yellow-400"> Premium Furniture</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our curated collection of modern, comfortable, and stylish furniture designed to make your house
              feel like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
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

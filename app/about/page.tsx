import Image from "next/image"
import ModernHeader from "@/components/modern-header"
import ModernFooter from "@/components/modern-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Leaf, Target, Eye } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "Every piece is carefully crafted using premium materials and traditional techniques combined with modern innovation.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize customer satisfaction and strive to exceed expectations with every interaction and purchase.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "We're committed to environmental responsibility through sustainable sourcing and eco-friendly manufacturing.",
  },
  {
    icon: Users,
    title: "Family Heritage",
    description:
      "Founded as a family business, we maintain our values of integrity, trust, and personal service.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/team-sarah.jpg",
    bio: "With over 15 years in furniture design, Sarah founded Furnilux to bring premium, accessible furniture to modern homes.",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image: "/images/team-michael.jpg",
    bio: "Michael leads our design team with a passion for creating functional, beautiful pieces that stand the test of time.",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience Director",
    image: "/images/team-emily.jpg",
    bio: "Emily ensures every customer has an exceptional experience from browsing to delivery and beyond.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <ModernHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/30 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">About Furnilux</h1>
            <div className="space-y-6 text-xl lg:text-2xl text-gray-600 leading-relaxed">
              <p>
                Furnilux is more than just a furniture brand — it’s a vision for how homes and offices should feel.
                Since our founding in 2010, we’ve been on a mission to merge timeless design with everyday functionality,
                creating spaces that are as comfortable as they are inspiring.
              </p>
              <p>
                We believe that furniture is not only about aesthetics, but also about the lives lived around it.
                Every collection we introduce is guided by three principles: craftsmanship, sustainability, and innovation.
                From responsibly sourced materials to contemporary silhouettes, our products are designed to enhance
                modern lifestyles without compromise.
              </p>
              <p>
                Today, Furnilux serves thousands of homes and businesses across the country, but our commitment remains
                the same: to deliver premium furniture that blends beauty, durability, and accessibility. Whether it’s
                a cozy armchair for your living room or a collaborative table for your office, we create pieces that
                become part of your everyday story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Furnilux began as a small family workshop in 2010, born from a simple belief: everyone deserves
                  beautiful, well-made furniture in their home. What started as a passion project has grown into a
                  trusted brand serving thousands of customers nationwide.
                </p>
                <p>
                  Our founder, Sarah Johnson, noticed a gap in the market for furniture that combined premium quality
                  with modern design and reasonable pricing. She set out to create a company that would bridge this gap,
                  working directly with skilled craftspeople and sustainable suppliers.
                </p>
                <p>
                  Today, we continue to honor our founding principles while embracing innovation and growth. Every piece
                  in our collection is carefully selected or designed to meet our high standards for quality, style, and
                  value.
                </p>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <Image
                src="/images/about-workshop.jpg"
                alt="Furnilux workshop"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <ModernFooter />
    </div>
  )
}

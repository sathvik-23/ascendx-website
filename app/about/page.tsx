import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TeamMember } from "@/components/ui/team-member"
import { Timeline } from "@/components/ui/timeline"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years in tech, Alex leads our vision to empower businesses through innovative digital solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Sarah brings expertise in AI and software development, ensuring our technical solutions are cutting-edge.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      bio: "Michael combines aesthetics with functionality to create memorable digital experiences for our clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Data Science Lead",
      bio: "Priya transforms complex data into actionable insights that drive business growth for our clients.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const timelineEvents = [
    {
      year: "2018",
      title: "AscendX Founded",
      description: "Started with a vision to combine technology and creativity to help businesses grow.",
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Incorporated advanced AI analytics into our service offerings.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded our team and client base to serve businesses worldwide.",
    },
    {
      year: "2024",
      title: "Next Generation Solutions",
      description: "Launched our suite of next-gen AI-powered business solutions.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings.",
    },
    {
      title: "Customer-Centricity",
      description: "Our clients' success is our primary focus and driving force.",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About AscendX</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Founded on the belief that technology and creativity can change the game for businesses, AscendX is
                dedicated to delivering innovative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Founded on the belief that technology and creativity can change the game for businesses, AscendX is
                dedicated to delivering innovative digital solutions. We combine expertise in website and app
                development with advanced AI analytics to help our clients achieve sustainable growth.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                What started as a small team of passionate technologists has grown into a comprehensive digital
                solutions provider, helping businesses of all sizes transform their digital presence and leverage data
                for strategic growth.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
              <Timeline events={timelineEvents} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Mission & Values</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
              Our mission is to empower businesses with tools and insights that drive transformation and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-primary text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
              Our team comprises skilled developers, strategists, data analysts, and creative minds who work together to
              bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} name={member.name} role={member.role} bio={member.bio} image={member.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vision for the Future</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                As we continue to grow, our focus remains on leveraging emerging technologies to offer cutting-edge
                solutions that propel your business forward.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Join Our Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


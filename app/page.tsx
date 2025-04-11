import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { CounterSection } from '@/components/sections/counter-section'
import Image from 'next/image'

export default function Home() {
  const words = [
    { text: 'Innovate' },
    { text: 'Optimize' },
    // { text: 'Ascend' },
    { text: 'With', className: 'text-primary' },
    { text: 'AIVARA', className: 'text-primary font-bold' },
  ]

  const services = [
    {
      title: 'Website & App Building',
      description: 'Crafting responsive, user-friendly digital experiences.',
      icon: '🌐',
    },
    {
      title: 'Sales & Marketing Solutions',
      description:
        'From real-time dashboards to targeted campaigns, we provide strategies that drive growth.',
      icon: '📈',
    },
    {
      title: 'Data & Financial Analysis',
      description:
        'Automate data processing and optimize your financial strategies for maximum profitability.',
      icon: '📊',
    },
    {
      title: 'Digital Creation',
      description:
        'Leverage generative AI to create hyper-personalized content that truly resonates.',
      icon: '🎨',
    },
  ]

  const parallaxItems = [
    {
      title: 'Website Development',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
    {
      title: 'Mobile Applications',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
    {
      title: 'AI-Powered Analytics',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
    {
      title: 'Digital Marketing',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
    {
      title: 'Financial Insights',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
    {
      title: 'Content Creation',
      link: '/services',
      thumbnail: '/placeholder.svg?height=600&width=800',
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to AIVARA
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Transform your digital presence with cutting-edge website and
                app development, enhanced by AI-driven strategic insights.
              </p>
            </div>
            {/* <div className="w-full px-4 sm:px-6 md:px-8 mx-auto max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <TypewriterEffect words={words} className="py-8" />
            </div> */}
            {/* <div className="inline-flex flex-wrap items-center gap-2">
              <TypewriterEffect words={words} />
            </div> */}
            <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
              <div className="max-w-3xl w-full min-h-[80px] sm:min-h-[96px] md:min-h-[120px] flex items-center justify-center">
                <TypewriterEffect words={words} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Elevate Your Business with AI-Powered Insights
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                At AIVARA, we believe every business deserves a competitive
                edge. We combine creative design with advanced technology to
                help you grow—whether you're looking to build a sleek website, a
                robust mobile app, or gain actionable insights through
                AI-powered analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Discover how we can help your business grow and succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <Link
                    href="/services"
                    className="inline-flex items-center mt-4 text-primary hover:underline"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Work
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Explore our portfolio of successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parallaxItems.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                className="group relative rounded-lg overflow-hidden bg-background/50 border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-64 w-full relative">
                  <Image
                    src={item.thumbnail || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <CounterSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Let's collaborate to bring your digital vision to life.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white hover:bg-white hover:text-primary"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

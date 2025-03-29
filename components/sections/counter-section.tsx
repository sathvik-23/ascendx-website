"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

const Counter = ({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isInView])

  return (
    <div ref={nodeRef} className="text-4xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export function CounterSection() {
  const stats = [
    {
      title: "Projects Completed",
      value: 250,
      suffix: "+",
      icon: "🚀",
    },
    {
      title: "Happy Clients",
      value: 120,
      suffix: "+",
      icon: "😊",
    },
    {
      title: "Team Members",
      value: 30,
      suffix: "+",
      icon: "👥",
    },
    {
      title: "Years Experience",
      value: 5,
      suffix: "+",
      icon: "⏱️",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact in Numbers</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We're proud of what we've accomplished together with our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <Counter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface Product {
  title: string
  link: string
  thumbnail: string
}

export const HeroParallax = ({
  products,
}: {
  products: Product[]
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const translateY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 200 : 500])

  return (
    <div ref={ref} className="relative h-[300vh] bg-gradient-to-b from-background via-background/80 to-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 px-4">
            Our Work
          </h1>
        </div>

        <motion.div
          style={{ translateY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 max-w-7xl mx-auto relative z-0"
        >
          {products.map((product, i) => (
            <Link
              href={product.link}
              key={i}
              className="group relative rounded-lg overflow-hidden bg-background/50 border shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 w-full relative">
                <Image
                  src={product.thumbnail || "/placeholder.svg"}
                  alt={product.title}
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
                <h3 className="font-semibold text-lg">{product.title}</h3>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


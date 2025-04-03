import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ServiceCard } from '@/components/ui/service-card'

export default function ServicesPage() {
  const webAppServices = [
    {
      title: 'Website Building',
      description:
        "Custom-designed, responsive websites that capture your brand's essence. We focus on seamless user experiences and search engine optimization.",
      icon: '🌐',
    },
    {
      title: 'App Building',
      description:
        'Develop modern, intuitive mobile and web applications tailored to your business needs. Our apps are built for scalability and performance.',
      icon: '📱',
    },
  ]

  const businessServices = [
    {
      title: 'Sales Lead',
      description:
        'Gain a real-time, centralized view of your business performance. Utilize AI insights to drive strategic growth and optimize sales tactics.',
      icon: '💼',
    },
    {
      title: 'Marketing Lead',
      description:
        'Use AI-powered analytics to understand customer behavior, identify microsegments, and create campaigns that convert.',
      icon: '📣',
    },
    {
      title: 'Sales Strategist',
      description:
        'Leverage AI to optimize pricing, promotions, and product strategies based on real-time sales trends and customer insights.',
      icon: '📊',
    },
  ]

  const analyticalServices = [
    {
      title: 'Data Analyst',
      description:
        'Automate data processing and extract key insights effortlessly, eliminating the need for time-consuming manual reporting.',
      icon: '📈',
    },
    {
      title: 'Finance Lead',
      description:
        'Utilize AI-driven financial insights to forecast revenue, manage cash flow, and optimize spending for maximum profitability.',
      icon: '💰',
    },
    {
      title: 'Digital Creator',
      description:
        'Transform data insights into engaging, hyper-personalized campaigns using generative AI, ensuring your message resonates with your target audience.',
      icon: '🎨',
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
                Our Services
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                At AIVARA, we offer a comprehensive suite of services designed
                to help your business scale and succeed. Discover our core
                offerings below:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="webApp" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="webApp">Website & App Building</TabsTrigger>
              <TabsTrigger value="business">
                Strategic Business Solutions
              </TabsTrigger>
              <TabsTrigger value="analytical">
                Analytical & Creative Services
              </TabsTrigger>
            </TabsList>

            <TabsContent value="webApp" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {webAppServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {businessServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytical" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {analyticalServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to elevate your business?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Contact us today to discuss how we can tailor these solutions to
                your unique needs.
              </p>
            </div>
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden bg-gradient-to-br from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="container relative z-10 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Empowering Cross-border Innovation and Growth.
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/90">
          Bay Area Innovest (BAI) is a global platform for tech innovation and cross-border industrial investment, empowering enterprises through integrated incubation, capital, and industry services across AI, consumer products, healthtech, and global commerce.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <Link href="/contact">
                Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/portfolio">Explore Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industrial Investment",
                description: "Joint industrial investment, M&A, and IPO support",
              },
              {
                title: "Tech Innovation Acceleration",
                description: "Identifying and accelerating early-stage tech projects centered in Silicon Valley",
              },
              {
                title: "Family Office Services",
                description: "Comprehensive services for entrepreneurs: academic research, wealth management, financial training, children’s education, tax & legal planning",
              },
              {
                title: "GloBAI Go Global",
                description: "Join a thriving community of AI innovators, researchers, and entrepreneurs.",
              },
            ].map((offering, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Industry Advantages - Minimalist Style */}
     <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMjBiMmJkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxNDAiIGN5PSIxNDAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxNjAiIGN5PSIxNjAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIxODAiIHI9IjEiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjEiIHI9IjEiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjIwIiByPSIxIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iNjAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjEyMCIgY3k9IjEwMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjE0MCIgY3k9IjEyMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjE2MCIgY3k9IjE0MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjE4MCIgY3k9IjE2MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE4MCIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Industry Advantages</h2>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2 mb-10 md:mb-0">
              <span className="text-5xl font-bold text-gray-900 mb-2">Top 1</span>
              <span className="text-gray-600">Merchant Operation Services</span>
            </div>

            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2 mb-10 md:mb-0">
              <span className="text-5xl font-bold text-gray-900 mb-2">Top 1</span>
              <span className="text-gray-600">Cross-Border E-commerce Logistics</span>
            </div>

            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2">
              <span className="text-5xl font-bold text-gray-900 mb-2">24+</span>
              <span className="text-gray-600">Premium & Trendy Brand Ecosystem</span>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Investment Ecosystem - Minimalist Style */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Innovation & Investment Ecosystem</h2>

          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2 mb-10 md:mb-0">
              <span className="text-5xl font-bold text-gray-900 mb-2">40+</span>
              <span className="text-gray-600">Domestic and International VC Funds</span>
            </div>

            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2 mb-10 md:mb-0">
              <span className="text-5xl font-bold text-gray-900 mb-2">50+</span>
              <span className="text-gray-600">Global University VC Organizations</span>
            </div>

            <div className="flex flex-col items-start border-l-2 border-gray-200 pl-6 py-2">
              <span className="text-5xl font-bold text-gray-900 mb-2">20k+</span>
              <span className="text-gray-600">Innovation Community Reach & Influence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Portfolio</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We invest in visionary founders building the future of AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Company {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Startup {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Revolutionizing the way businesses leverage artificial intelligence.
                  </p>
                  <Button variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
              <Link href="/portfolio">View All Portfolio Companies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Whether you're a founder looking for investment or an AI expert interested in joining our community, we'd
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <Link href="/contact">Pitch Your Startup</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/GloBAI">Join AI Club</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

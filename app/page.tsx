import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Globe, ShoppingBag, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 overflow-hidden bg-gradient-to-br from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="container relative z-10 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Bay Area International Group
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/90">
            Bridging Innovation, Investment, and Global Commerce Through Three Strategic Platforms
          </p>

          {/* Global Locations */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-10">
            <div className="flex items-center text-white/80">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Silicon Valley</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Los Angeles</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Hong Kong</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Shenzhen</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center text-white/80">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">Japan</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <Link href="/contact">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Main Divisions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Three Strategic Divisions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bay Area Innovest */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f90bf] to-[#20b2bd] p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <TrendingUp className="h-8 w-8 text-white/70" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Bay Area Innovest</h3>
                <p className="text-white/90 mb-6">
                  Managing the BAI Fund, we invest in transformative AI and tech startups at pre-seed and seed stages,
                  empowering the next generation of global tech leaders.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  <li>• Strategic Industrial Investment</li>
                  <li>• AI & Tech Incubation</li>
                  <li>• Full-Lifecycle Support</li>
                </ul>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/innovest">Explore Fund</Link>
                </Button>
              </div>
            </div>

            {/* GloBAI */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#20b2bd] to-[#5ccdb8] p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <Globe className="h-8 w-8 text-white/70" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">GloBAI</h3>
                <p className="text-white/90 mb-6">
                  One-stop cross-border growth platform empowering Chinese brands to scale globally through end-to-end
                  infrastructure and localization services.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  <li>• Supply Chain Integration</li>
                  <li>• Cross-Border Logistics</li>
                  <li>• Global Market Expansion</li>
                </ul>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/globai">Go Global</Link>
                </Button>
              </div>
            </div>

            {/* Premium E-commerce Platform */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5ccdb8] to-[#1f90bf] p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <ShoppingBag className="h-8 w-8 text-white/70" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Premium E-commerce Platform</h3>
                <p className="text-white/90 mb-6">
                  Curated marketplace connecting premium brands with discerning consumers, featuring exclusive products
                  and personalized shopping experiences.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  <li>• Premium Brand Curation</li>
                  <li>• Personalized Shopping</li>
                  <li>• Exclusive Collections</li>
                </ul>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/ecommerce">Shop Premium</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Advantages */}
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

      {/* Innovation & Investment Ecosystem */}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Bay Area International Group
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global Expertise",
                description: "Deep understanding of both Eastern and Western markets with local expertise worldwide.",
              },
              {
                title: "Integrated Ecosystem",
                description: "Synergies across investment, commerce, and global expansion create unique value.",
              },
              {
                title: "Proven Track Record",
                description: "Successfully scaling companies and brands across multiple industries and geographies.",
              },
              {
                title: "Strategic Partnerships",
                description: "Extensive network of corporate partners, investors, and industry leaders globally.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale Globally?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-10">
            Whether you're seeking investment, looking to expand globally, or want to access premium markets, we have
            the expertise and platform to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

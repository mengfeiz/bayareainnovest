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
            Bay Area Innovest
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/90">
          Bay Area Innovest is a global catalyst for next-gen innovation, empowering visionary founders in AI, e-commerce, logistics, consumer tech, and life sciences to build brands that shape the future.


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
            <Button asChild variant="outline" size="lg" className="border-white text-[#20b2bd] hover:bg-white/10">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Main Divisions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Core Divisions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bay Area Innovest */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f90bf] to-[#20b2bd] p-8 text-white hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-4 right-4">
                <TrendingUp className="h-8 w-8 text-white/70" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Bay Area Innovest</h3>
                <p className="text-white/90 mb-6">
                BAI Fund is an early-stage venture platform investing in transformative startups across AI, e-commerce, life sciences, and consumer tech. Backed by leading corporates and incubators, we bridge innovation and industry, accelerating founders from idea to IPO through strategic capital, deep networks, and global scale.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  <li>• Strategic Industrial Investment</li>
                  <li>• AI & Tech Incubation</li>
                  <li>• Full-Lifecycle Support</li>
                </ul>
                <Button asChild variant="outline" className="border-white text-[#20b2bd] hover:bg-white/10">
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
                  One-stop cross-border growth platform empowering brands to scale globally through end-to-end
                   services.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-white/80">
                  <li>• Supply Chain Integration</li>
                  <li>• Cross-Border Logistics</li>
                  <li>• Global Market Expansion</li>
                </ul>
                <Button asChild variant="outline" className="border-white text-[#20b2bd] hover:bg-white/10">
                  <Link href="/GloBAI">Go Global</Link>
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
                <Button asChild variant="outline" className="border-white text-[#20b2bd] hover:bg-white/10">
                  <Link href="/ecommerce">Shop Premium</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Industry Advantages */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#20b2bd] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#5ccdb8] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#1f90bf] rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Advantages</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Advantage 1 */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] bg-clip-text text-transparent">
                        Top
                      </span>
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] bg-clip-text text-transparent ml-2">
                        1
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Amazon Operation Services</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Leading the industry in comprehensive merchant operations and cross-border commerce solutions
                  </p>
                </div>
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] bg-clip-text text-transparent">
                        Top
                      </span>
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] bg-clip-text text-transparent ml-2">
                        1
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    Cross-Border E-commerce Logistics
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Pioneering logistics solutions connecting global markets with seamless delivery networks
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">24</span>
                  </div>
                </div>
                <div className="pt-6">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-baseline">
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] bg-clip-text text-transparent">
                        24
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] bg-clip-text text-transparent ml-1">
                        +
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    Premium & Trendy Brand Ecosystem
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Curated network of premium brands creating an exclusive marketplace ecosystem
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Investment Ecosystem */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-28 h-28 bg-[#1f90bf] rounded-full blur-2xl animate-pulse"></div>
          <div
            className="absolute bottom-32 left-16 w-36 h-36 bg-[#20b2bd] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#5ccdb8] rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation & Investment Ecosystem</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Building bridges across the global innovation landscape through strategic partnerships and community
              engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ecosystem 1 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-[#20b2bd]/20">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8] rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-white font-bold text-xl">40</span>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-baseline justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] bg-clip-text text-transparent">
                        40
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] bg-clip-text text-transparent ml-1">
                        +
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Domestic and International VC Funds</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic partnerships with leading venture capital funds across global markets
                  </p>
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>

            {/* Ecosystem 2 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-[#20b2bd]/20">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#20b2bd] via-[#5ccdb8] to-[#1f90bf] rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-white font-bold text-xl">50</span>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-baseline justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] bg-clip-text text-transparent">
                        50
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] bg-clip-text text-transparent ml-1">
                        +
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Global University VC Organizations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Academic partnerships fostering innovation and entrepreneurship in higher education
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#20b2bd] via-[#5ccdb8] to-[#1f90bf] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>

            {/* Ecosystem 3 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-[#20b2bd]/20">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5ccdb8] via-[#1f90bf] to-[#20b2bd] rounded-2xl flex items-center justify-center shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-white font-bold text-lg">20k</span>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-baseline justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] bg-clip-text text-transparent">
                        20k
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#1f90bf] to-[#20b2bd] bg-clip-text text-transparent ml-1">
                        +
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Community Reach & Influence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Extensive network connecting innovators, entrepreneurs, and industry leaders worldwide
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5ccdb8] via-[#1f90bf] to-[#20b2bd] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Connection Lines - Decorative */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <svg className="w-full h-32 opacity-10" viewBox="0 0 800 200">
              <path
                d="M100 100 Q400 50 700 100"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M100 100 Q400 150 700 100"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1f90bf" />
                  <stop offset="50%" stopColor="#20b2bd" />
                  <stop offset="100%" stopColor="#5ccdb8" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5ccdb8" />
                  <stop offset="50%" stopColor="#20b2bd" />
                  <stop offset="100%" stopColor="#1f90bf" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Why Choose Bay Area Innovest
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Global Expertise",
                description: "Leveraging cross-border supply chain networks and brand marketing strength to accelerate global growth and build lasting market presence.",
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
            <Button asChild variant="outline" size="lg" className="border-white text-[#20b2bd] hover:bg-white/10">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl">
            We collaborate on strategic industrial investments, focusing on M&A, IPO opportunities, and the targeted incubation of early-stage tech ventures centered in Silicon Valley.
          </p>
        </div>
      </section>

       {/* Investment Philosophy */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Investment Philosophy</h2>

            <p className="text-lg text-gray-700 mb-6">
              At Bay Area Innovest (BAI), we are committed to empowering the next generation of global tech leaders
              through collaborative industrial investment and early-stage innovation. As a platform jointly initiated by
              leading industrial groups, tech incubators, and venture institutions, we focus on building a sustainable,
              globally connected innovation ecosystem.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              We invest in transformative companies at the pre-seed and seed stages, with a dual focus on:
            </p>

            <div className="mb-10 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#20b2bd]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Industrial Investment</h3>
                <p className="text-gray-700">
                  Partnering with corporates to drive co-investment, M&A, and IPO pathways, we integrate startups into
                  broader industrial value chains to accelerate scale and exit readiness.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#20b2bd]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Tech Incubation</h3>
                <p className="text-gray-700 mb-4">
                  Anchored in Silicon Valley, we actively source and incubate early-stage ventures in core verticals:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <span className="text-gray-700">Artificial Intelligence (AI)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <span className="text-gray-700">New Consumer Technologies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <span className="text-gray-700">Life and Health Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <span className="text-gray-700">E-commerce and Global Logistics</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Backed by a "Tech + Education + Capital + Industry + Park" ecosystem model, BAI provides full-lifecycle
              support—from joint R&D and technical integration to global market expansion and cross-border industrial
              collaboration.
            </p>

            <p className="text-lg text-gray-700 font-medium mb-8">
              Our mission is to bridge East and West, link upstream and downstream players, and invest in companies
              shaping the future of global innovation.
            </p>

            <div className="flex justify-center">
              <Button asChild className="bg-[#20b2bd] hover:bg-[#1f90bf]">
                <Link href="/contact">Connect With Our Investment Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Companies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
                  <span className="text-white text-xl font-bold">AI Company {index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">AI Solution {index + 1}</h3>
                  <p className="text-gray-600 mb-4">
                    {index % 2 === 0
                      ? "Building next-generation AI tools for enterprise productivity."
                      : "Revolutionizing healthcare diagnostics with advanced machine learning."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {index % 3 === 0 ? "Enterprise AI" : index % 3 === 1 ? "Healthcare" : "Developer Tools"}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {index % 2 === 0 ? "Seed" : "Series A"}
                    </span>
                  </div>
                  <Button variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 bg-gray-200 h-48 rounded-lg"></div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">AI Vision Labs</h3>
                <p className="text-gray-600 mb-4">
                  From seed investment to acquisition by a major tech company in just 3 years, AI Vision Labs
                  revolutionized computer vision technology.
                </p>
                <Button variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                  Read Story
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 bg-gray-200 h-48 rounded-lg"></div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold mb-2">NLP Innovations</h3>
                <p className="text-gray-600 mb-4">
                  Starting with a prototype and a vision, NLP Innovations grew to become a leader in natural language
                  processing solutions.
                </p>
                <Button variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                  Read Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Building the Next Big Thing?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            If you're working on innovative AI technology and looking for a partner who understands both the technical
            and business aspects, we'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
            <Link href="/contact">Pitch Your Startup</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

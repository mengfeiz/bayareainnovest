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
            We invest in visionary founders at the pre-seed and seed stages, supporting them in refining their vision
            and building the future of AI.
          </p>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Investment Philosophy</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Bay Area Innovest, we focus on early-stage AI companies with transformative potential. We invest at the
              pre-seed and seed stages, providing not just capital but also hands-on support to help founders refine
              their vision and accelerate growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">Our investment thesis centers around companies that are:</p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Building foundational AI technologies</li>
              <li>Applying AI to solve significant industry challenges</li>
              <li>Creating new markets enabled by AI capabilities</li>
              <li>Developing tools and infrastructure for the AI ecosystem</li>
            </ul>
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

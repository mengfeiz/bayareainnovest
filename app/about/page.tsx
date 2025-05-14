import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl">
          Bay Area Innovest (BAI) is a global platform supporting innovation and cross-border growth. Backed by top industry groups and investors, BAI empowers companies in AI, consumer tech, healthcare, and logistics with integrated resources—from incubation to capital and industrial partnerships—to scale globally and build a sustainable, innovation-driven future.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
            Empowering global innovators through capital, incubation, and cross-border collaboration in frontier technology sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kelly Qu</h3>
                <p className="text-[#20b2bd] font-medium mb-4">Managing Partner</p>
                <p className="text-gray-600">
                  With over 15 years of experience in AI and venture capital, Kelly leads our investment strategy and
                  founder relationships.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
                <p className="text-[#20b2bd] font-medium mb-4">Technical Partner</p>
                <p className="text-gray-600">
                  Former AI researcher at Stanford, Michael brings deep technical expertise to evaluate and support our
                  portfolio companies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-[#20b2bd] font-medium mb-4">Operations Partner</p>
                <p className="text-gray-600">
                  With a background in scaling startups, Sarah helps our portfolio companies build efficient operations
                  and go-to-market strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We believe in backing founders who are pushing the boundaries of what's possible with AI technology.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Long-term Partnership</h3>
              <p className="text-gray-600">
                We're committed to supporting our founders throughout their journey, not just during the initial
                investment.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                We actively seek out diverse founders and teams, believing that diverse perspectives lead to better
                outcomes.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ethical AI</h3>
              <p className="text-gray-600">
                We support the responsible development and deployment of AI technologies that benefit humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you're a founder looking for investment or an AI expert interested in joining our community, we'd
            love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

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
            BAI connects global Bay Area innovation and cross-border resources to empower tech innovation and brands to go global.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              To build a future-oriented global ecosystem by integrating capital, platforms, and brand strategy for high-quality international expansion.
            </p>
          </div>
        </div>
      </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We believe in backing founders who are pushing the boundaries of what's possible with AI technology.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Long-term Partnership</h3>
              <p className="text-gray-600">
                We're committed to supporting our founders throughout their journey, not just during the initial
                investment.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Diversity & Inclusion</h3>
              <p className="text-gray-600">
                We actively seek out diverse founders and teams, believing that diverse perspectives lead to better
                outcomes.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg bg-white">
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

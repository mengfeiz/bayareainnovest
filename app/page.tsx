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
            AI Pioneers Investing in <br />
            Next-Gen AI Startups
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-xl text-white/90">
            At Bay Area Innovest, top AI experts become partners to founders taking on audacious goals.
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Empowering Bay Area Talents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Partnerships with Founders",
                description: "We build meaningful partnerships with founders, providing more than just capital.",
              },
              {
                title: "Hands-On Mentorship",
                description: "Our team of experts provides hands-on guidance to help navigate challenges.",
              },
              {
                title: "Deep AI Expertise",
                description: "With backgrounds in AI research and development, we understand the technical landscape.",
              },
              {
                title: "Active Community",
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

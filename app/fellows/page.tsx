import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FellowsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Our Fellows</h1>
          <p className="text-xl max-w-3xl">
            A global community of AI experts partnering with founders to build the next generation of AI companies.
          </p>
        </div>
      </section>

      {/* About Fellows */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Community of Experts</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our fellows are distinguished professionals from leading companies like Salesforce, Atlassian, HubSpot,
              and OpenAI. They bring diverse expertise across AI research, product development, scaling startups, and
              industry-specific knowledge.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a global presence spanning California, Norway, Sweden, and Poland, our fellows provide a unique
              international perspective on AI innovation and market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Fellows */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Fellows</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Fellow Name {index + 1}</h3>
                  <p className="text-[#20b2bd] font-medium mb-4">
                    {index % 3 === 0 ? "AI Research Lead" : index % 3 === 1 ? "Product Strategy" : "Technical Advisor"}
                    {" @ "}
                    {index % 4 === 0
                      ? "OpenAI"
                      : index % 4 === 1
                        ? "Salesforce"
                        : index % 4 === 2
                          ? "Atlassian"
                          : "HubSpot"}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {index % 2 === 0
                      ? "Specializes in natural language processing and generative AI applications."
                      : "Expert in scaling AI products and go-to-market strategies."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {index % 3 === 0 ? "NLP" : index % 3 === 1 ? "Computer Vision" : "Reinforcement Learning"}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {index % 2 === 0 ? "Product Strategy" : "Technical Advisory"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Fellows Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Fellows Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Guidance</h3>
              <p className="text-gray-600">
                Our fellows provide deep technical expertise to help founders navigate complex AI challenges and make
                informed architecture decisions.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Product Strategy</h3>
              <p className="text-gray-600">
                With experience building successful AI products, our fellows help startups define their product roadmap
                and go-to-market strategy.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Network Access</h3>
              <p className="text-gray-600">
                Fellows provide introductions to potential customers, partners, and future investors to accelerate
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join as Fellow */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Fellowship</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Are you an AI expert interested in mentoring the next generation of AI startups? Join our fellowship program
            to share your knowledge and connect with innovative founders.
          </p>
          <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
            <Link href="/join">Apply to Join</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

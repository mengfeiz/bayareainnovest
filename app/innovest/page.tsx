import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InnovestPage() {
  // Portfolio company data organized by category
  const portfolioData = {
    ai: [
      {
        name: "NeuralSense",
        description: "Building next-generation AI tools for enterprise productivity and decision-making.",
        tags: ["Enterprise AI", "Seed"],
        image: "ai-company-1",
      },
      {
        name: "DeepLearn.io",
        description: "Democratizing machine learning with intuitive no-code platforms for businesses.",
        tags: ["ML Tools", "Series A"],
        image: "ai-company-2",
      },
      {
        name: "Cognify",
        description: "Developing advanced natural language processing solutions for customer service automation.",
        tags: ["NLP", "Seed"],
        image: "ai-company-3",
      },
    ],
    consumer: [
      {
        name: "MetaVerse Labs",
        description: "Creating immersive AR/VR experiences for next-generation consumer engagement.",
        tags: ["AR/VR", "Seed"],
        image: "consumer-company-1",
      },
      {
        name: "SmartHome Hub",
        description: "Unifying connected home devices with intuitive control systems and automation.",
        tags: ["IoT", "Series A"],
        image: "consumer-company-2",
      },
    ],
    health: [
      {
        name: "GenomicAI",
        description: "Revolutionizing healthcare diagnostics with advanced machine learning and genomic analysis.",
        tags: ["Healthcare", "Series A"],
        image: "health-company-1",
      },
      {
        name: "MedTech Solutions",
        description: "Developing wearable health monitoring devices with predictive analytics capabilities.",
        tags: ["MedTech", "Seed"],
        image: "health-company-2",
      },
    ],
    ecommerce: [
      {
        name: "GlobalShip",
        description: "Optimizing cross-border logistics with AI-powered routing and customs clearance.",
        tags: ["Logistics", "Series A"],
        image: "ecommerce-company-1",
      },
      {
        name: "RetailAI",
        description: "Enhancing e-commerce personalization through behavioral analysis and predictive modeling.",
        tags: ["E-commerce", "Seed"],
        image: "ecommerce-company-2",
      },
    ],
  }

  // Function to render portfolio company cards
  const renderCompanyCards = (companies) => {
    return companies.map((company, index) => (
      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="h-48 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
          <span className="text-white text-xl font-bold">{company.name}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
          <p className="text-gray-600 mb-4">{company.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {company.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <Button variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
            View Case Study
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Bay Area Innovest</h1>
          <p className="text-xl max-w-3xl">
            Managing the BAI Fund, we invest in transformative AI and tech startups at pre-seed and seed stages,
            empowering the next generation of global tech leaders.
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

            <div className="flex justify-center">
              <Button asChild className="bg-[#20b2bd] hover:bg-[#1f90bf]">
                <Link href="/contact">Connect With Our Investment Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Companies - Categorized */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Companies</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                All Companies
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                AI
              </TabsTrigger>
              <TabsTrigger value="consumer" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                Consumer Tech
              </TabsTrigger>
              <TabsTrigger value="health" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                Health Sciences
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white"
              >
                E-commerce & Logistics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-16">
                {/* AI Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    Artificial Intelligence (AI)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.ai)}
                  </div>
                </div>

                {/* Consumer Tech Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    New Consumer Technologies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.consumer)}
                  </div>
                </div>

                {/* Health Sciences Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    Life and Health Sciences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.health)}
                  </div>
                </div>

                {/* E-commerce Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">4</span>
                    </div>
                    E-commerce and Global Logistics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.ecommerce)}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Artificial Intelligence (AI)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.ai)}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consumer">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  New Consumer Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.consumer)}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="health">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Life and Health Sciences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.health)}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  E-commerce and Global Logistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.ecommerce)}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            If you're working on innovative technology and looking for a partner who understands both the technical and
            business aspects, we'd love to hear from you.
          </p>
          <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
            <Link href="/contact">Pitch Your Startup</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

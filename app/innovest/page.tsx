import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

export default function InnovestPage() {
  // Portfolio company data organized by category
  const portfolioData = {
    ecommerce: [
      {
        name: "Shenzhen Winlink Express Logistics Co., Ltd.",
        description:
          "A leading cross-border supply chain service provider in China, delivering comprehensive logistics solutions tailored for global e-commerce platforms.",
        tags: ["Cross-Border Logistics", "Supply Chain"],
        image: "winlink-logistics",
      },
      {
        name: "Uni-Frozen Group (Youxin Songfeng)",
        description:
          "A one-stop cold chain logistics company recognized as a market leader in the specialized field of temperature-controlled supply chain services.",
        tags: ["Cold Chain", "Logistics"],
        image: "uni-frozen",
      },
    ],
    ai: [
      // AI section will show "coming soon" placeholder
    ],
    health: [
      {
        name: "Tus Medical & Health",
        description:
          "China's first operator of county-level medical community service systems, advancing regional healthcare integration and operational efficiency.",
        tags: ["Healthcare Systems", "Medical Services"],
        image: "tus-medical",
      },
      {
        name: "Langgu Biotech",
        description:
          "Focused on the development and commercialization of neoantigen-based immunotherapies for cancer, with operations across China, the U.S., and Japan.",
        tags: ["Immunotherapy", "Biotech"],
        image: "langgu-biotech",
      },
      {
        name: "Haiyun Yijian HealthTech Co., Ltd.",
        description:
          "A pioneer in integrated modern sanitation and disinfection technologies. The company combines research in infectious disease prevention with advanced disinfection solutions—ranging from chemical and biological disinfectants to nanotech and photocatalytic systems.",
        tags: ["HealthTech", "Disinfection Systems"],
        image: "haiyun-yijian",
      },
    ],
    consumer: [
      {
        name: "Produce Sunshine (Tianjin)",
        description:
          "Founded in 1992, Produce Sunshine specializes in high-quality nuts, dried fruits, and organic agricultural products. Serving global baking and snack food brands, the company is known for its product quality, innovation, and export-ready capabilities.",
        tags: ["Food & Agriculture", "Consumer Products"],
        image: "produce-sunshine",
      },
    ],
  }

  // Function to render portfolio company cards
  const renderCompanyCards = (companies) => {
    return companies.map((company, index) => (
      <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="h-48 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center">
          <span className="text-white text-xl font-bold text-center px-4">{company.name}</span>
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

  // Function to render "coming soon" placeholder for AI
  const renderComingSoonCard = () => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm relative">
        <div className="h-48 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center relative">
          <span className="text-white text-xl font-bold">AI Investments</span>
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="text-gray-800 font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">AI Portfolio Companies</h3>
          <p className="text-gray-600 mb-4">
            We are actively evaluating and investing in cutting-edge AI companies. Our AI portfolio will be announced
            soon.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Artificial Intelligence</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Machine Learning</span>
          </div>
          <Button variant="outline" disabled className="text-gray-400 border-gray-300 cursor-not-allowed">
            Coming Soon
          </Button>
        </div>
      </div>
    )
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
                    <span className="text-gray-700">E-commerce and Logistics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <span className="text-gray-700">Artificial Intelligence (AI)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <span className="text-gray-700">Life Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs">4</span>
                    </div>
                    <span className="text-gray-700">Consumer Tech</span>
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
              <TabsTrigger
                value="ecommerce"
                className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white"
              >
                E-commerce & Logistics
              </TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                AI
              </TabsTrigger>
              <TabsTrigger value="health" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                Life Sciences
              </TabsTrigger>
              <TabsTrigger value="consumer" className="data-[state=active]:bg-[#20b2bd] data-[state=active]:text-white">
                Consumer Tech
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-16">
                {/* E-commerce & Logistics Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">📦</span>
                    </div>
                    E-commerce & Logistics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.ecommerce)}
                  </div>
                </div>

                {/* AI Section - Coming Soon */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🤖</span>
                    </div>
                    Artificial Intelligence (AI)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{renderComingSoonCard()}</div>
                </div>

                {/* Life Sciences Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🧬</span>
                    </div>
                    Life Sciences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.health)}
                  </div>
                </div>

                {/* Consumer Tech Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">🛒</span>
                    </div>
                    Consumer Tech
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderCompanyCards(portfolioData.consumer)}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">📦</span>
                  </div>
                  E-commerce & Logistics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.ecommerce)}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🤖</span>
                  </div>
                  Artificial Intelligence (AI)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{renderComingSoonCard()}</div>
              </div>
            </TabsContent>

            <TabsContent value="health">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🧬</span>
                  </div>
                  Life Sciences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.health)}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consumer">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mr-3">
                    <span className="text-white font-bold">🛒</span>
                  </div>
                  Consumer Tech
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {renderCompanyCards(portfolioData.consumer)}
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

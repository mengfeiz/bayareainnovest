import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Truck, ShoppingBag, BarChart, FileCheck, Package, Award } from "lucide-react"

export default function GloBAIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] via-[#20b2bd] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">GloBAI Go Global Service</h1>
          <p className="text-xl max-w-3xl">One-Stop Cross-Border Growth Platform for Chinese Brands</p>
        </div>
      </section>

      {/* About GloBAI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Go Global with Confidence</h2>
            <p className="text-lg text-gray-700 mb-6">
              At GloBAI, we empower Chinese brands to scale globally through an end-to-end cross-border infrastructure.
              From supply chain integration to last-mile delivery and brand localization, we help you Go Global with
              Confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain Integration</h3>
              <p className="text-gray-600">
                Leverage our base network and integrated sourcing capabilities to build a robust foundation for global
                growth.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Omnichannel Operations</h3>
              <p className="text-gray-600">
                Tailored online (Amazon, TikTok, TEMU, etc.) and offline strategies to boost brand visibility in diverse
                overseas markets.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Overseas Marketing</h3>
              <p className="text-gray-600">
                Community marketing, influencer collaboration, PR campaigns, and expert consulting — all designed to
                amplify your global voice.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Border Logistics</h3>
              <p className="text-gray-600">
                Full-chain logistics support with owned warehouses in Hong Kong and North America, ensuring smooth
                delivery worldwide.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Customs Clearance</h3>
              <p className="text-gray-600">
                Intelligent clearance solutions with compliant tax refunds and foreign exchange settlement.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Last-Mile Delivery</h3>
              <p className="text-gray-600">
                Top-tier delivery service providers in North America ensuring reliable final-mile distribution,
                including Amazon's top partners.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 md:col-start-2 lg:col-start-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Empowerment</h3>
              <p className="text-gray-600">
                Access international brand resources and financing tools to elevate brand equity and global
                competitiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Reach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">North America</h3>
              <p className="text-gray-600">
                Established logistics network and warehousing facilities across the United States and Canada, with
                strong partnerships with major retailers.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Europe</h3>
              <p className="text-gray-600">
                Strategic presence in key European markets with localized marketing and distribution channels tailored
                to regional preferences.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Asia Pacific</h3>
              <p className="text-gray-600">
                Headquarters in Hong Kong with extensive networks throughout Southeast Asia, Australia, and emerging
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 h-12 w-12 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] rounded-md flex items-center justify-center">
                <span className="text-white font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">TechGear China</h3>
              <p className="text-gray-600 mb-4">
                Expanded from a local electronics brand to achieving $10M in annual sales across North American markets
                within 18 months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4 h-12 w-12 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] rounded-md flex items-center justify-center">
                <span className="text-white font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">HomeStyle</h3>
              <p className="text-gray-600 mb-4">
                Home decor brand that leveraged our omnichannel strategy to establish presence in 5 European countries
                with 200% YoY growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Global?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Take your brand to international markets with our comprehensive cross-border growth solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

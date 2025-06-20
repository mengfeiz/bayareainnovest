import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Globe,
  Truck,
  ShoppingBag,
  BarChart,
  FileCheck,
  Package,
  Award,
  Palette,
  TrendingUp,
  Target,
  DollarSign,
} from "lucide-react"

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

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Empowerment & Design</h3>
              <p className="text-gray-600">
                Comprehensive rebranding and design services alongside access to international brand resources and
                financing tools to elevate brand equity and global competitiveness.
              </p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 md:col-start-2 lg:col-start-auto">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Market Access</h3>
              <p className="text-gray-600">
                Strategic partnerships and exclusive access to premium retail channels and high-end consumer markets
                globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Cases</h2>

          <div className="space-y-12">
            {/* Success Story 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">U.S. Brand with Chinese Manufacturing Partner</h3>
                    <p className="text-[#20b2bd] font-semibold">Kitchenware & Home Goods</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Challenge
                    </h4>
                    <p className="text-gray-700">
                      A U.S.-based e-commerce brand working with a Chinese OEM factory had high return rates on Amazon
                      and no off-Amazon marketing, limiting sales and increasing costs.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Our Process
                    </h4>
                    <p className="text-gray-700">
                      Starting in 2018 with one kitchenware store, we expanded to manage their home goods store by 2020.
                      Our dedicated account manager conducted in-depth buyer research with daily team reviews, involving
                      product managers and operations leads. We coordinated with the factory to refine product design
                      and quality.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Improvements
                    </h4>
                    <p className="text-gray-700">
                      Return rates dropped significantly, cash flow stabilized, and product costs were reduced. We
                      introduced 40+ Amazon promotions, 20+ PPC ad strategies, plus Google Ads and social media
                      marketing.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-[#20b2bd]" />
                    Results Achieved
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#1f90bf]/10 to-[#5ccdb8]/10 rounded-lg">
                      <span className="text-gray-700">Annual Revenue (2024)</span>
                      <span className="font-bold text-2xl text-[#1f90bf]">$100M+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#20b2bd]/10 to-[#5ccdb8]/10 rounded-lg">
                      <span className="text-gray-700">ACOS</span>
                      <span className="font-bold text-xl text-[#20b2bd]">10.47%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#5ccdb8]/10 to-[#1f90bf]/10 rounded-lg">
                      <span className="text-gray-700">TACOS</span>
                      <span className="font-bold text-xl text-[#5ccdb8]">~3%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#20b2bd] to-[#5ccdb8] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Shenzhen Electronics Manufacturer</h3>
                    <p className="text-[#20b2bd] font-semibold">Consumer Electronics</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Challenge
                    </h4>
                    <p className="text-gray-700">
                      When we took over in 2021, this Shenzhen-based factory's Amazon store had $25M in sales but a poor
                      payout rate of just 21%, due to intense product and advertising competition.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Our Process
                    </h4>
                    <p className="text-gray-700">
                      We conducted international market research and identified that their product was well-suited for
                      B2B. We supported their entry into Amazon Business and optimized pricing and marketing strategies
                      accordingly.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Improvements
                    </h4>
                    <p className="text-gray-700">
                      Although the to-C payout only slightly improved in the first year (to 25%), the client renewed the
                      partnership for two more years, trusting our strategic direction and long-term vision.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-[#20b2bd]" />
                    Results Achieved
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#20b2bd]/10 to-[#5ccdb8]/10 rounded-lg">
                      <span className="text-gray-700">2024 Sales</span>
                      <span className="font-bold text-2xl text-[#20b2bd]">$72.8M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#5ccdb8]/10 to-[#1f90bf]/10 rounded-lg">
                      <span className="text-gray-700">Payout Rate</span>
                      <span className="font-bold text-xl text-[#5ccdb8]">34%</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-[#1f90bf]/10 to-[#20b2bd]/10 rounded-lg">
                      <span className="text-gray-700 text-sm">
                        Achieved steady growth while peers saw significant declines
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Domestic Factory New to Cross-Border E-commerce
                    </h3>
                    <p className="text-[#20b2bd] font-semibold">New Seller Enablement</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Challenge
                    </h4>
                    <p className="text-gray-700">
                      A traditional domestic manufacturer with no previous experience in cross-border e-commerce lacked
                      expertise in store setup, compliance, and marketing, facing uncertainty in launching an
                      international e-commerce presence.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Our Process
                    </h4>
                    <p className="text-gray-700">
                      We guided the client through account and trademark registration, product selection, inventory
                      planning, and logistics setup. Our team provided ongoing sales reports and performance reviews to
                      refine strategy in real time.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-[#20b2bd]" />
                      Improvements
                    </h4>
                    <p className="text-gray-700">
                      We quickly helped the store build up reviews and organic traffic. Our PPC specialists ensured ad
                      budgets were spent efficiently, supporting both short-term conversion and long-term brand
                      building.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-[#20b2bd]" />
                    Results Achieved
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#5ccdb8]/10 to-[#1f90bf]/10 rounded-lg">
                      <span className="text-gray-700">2024 Sales</span>
                      <span className="font-bold text-2xl text-[#5ccdb8]">$87.7M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#1f90bf]/10 to-[#20b2bd]/10 rounded-lg">
                      <span className="text-gray-700">ACOS</span>
                      <span className="font-bold text-xl text-[#1f90bf]">17.53%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[#20b2bd]/10 to-[#5ccdb8]/10 rounded-lg">
                      <span className="text-gray-700">TACOS</span>
                      <span className="font-bold text-xl text-[#20b2bd]">3%</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-[#5ccdb8]/10 to-[#1f90bf]/10 rounded-lg">
                      <span className="text-gray-700 text-sm">Achieved sustainable and scalable advertising model</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Reach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">North America</h3>
              <p className="text-gray-600">
                Established logistics network and warehousing facilities across the United States and Canada, with
                strong partnerships with major retailers.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Europe</h3>
              <p className="text-gray-600">
                Strategic presence in key European markets with localized marketing and distribution channels tailored
                to regional preferences.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Asia Pacific</h3>
              <p className="text-gray-600">
                Headquarters in Hong Kong with extensive networks throughout Southeast Asia, Australia, and emerging
                markets.
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

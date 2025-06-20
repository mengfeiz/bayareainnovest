import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star, Shield, Truck, Award, Clock } from "lucide-react"

export default function EcommercePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Premium E-commerce Platform</h1>
          <p className="text-xl max-w-3xl">
            Curated marketplace connecting premium brands with discerning consumers, featuring exclusive products and
            personalized shopping experiences.
          </p>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Shopping Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
              <p className="text-gray-600">
                Hand-picked premium brands and exclusive products that meet our highest quality standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity Guaranteed</h3>
              <p className="text-gray-600">
                Every product is verified for authenticity with comprehensive quality assurance processes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] flex items-center justify-center">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Delivery</h3>
              <p className="text-gray-600">
                White-glove delivery service with premium packaging and personalized customer care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exclusive Access</h3>
              <p className="text-gray-600">
                First access to limited editions, pre-launches, and exclusive collaborations with top brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Fashion",
                description: "Designer clothing, accessories, and footwear from world-renowned fashion houses.",
                image: "luxury-fashion",
              },
              {
                title: "Premium Beauty",
                description: "High-end skincare, cosmetics, and fragrances from exclusive beauty brands.",
                image: "premium-beauty",
              },
              {
                title: "Tech & Innovation",
                description: "Cutting-edge gadgets, smart home devices, and innovative tech accessories.",
                image: "tech-innovation",
              },
              {
                title: "Home & Living",
                description: "Designer furniture, home decor, and premium lifestyle products.",
                image: "home-living",
              },
              {
                title: "Wellness & Health",
                description: "Premium wellness products, fitness equipment, and health supplements.",
                image: "wellness-health",
              },
              {
                title: "Exclusive Collections",
                description: "Limited edition items and exclusive collaborations available only on our platform.",
                image: "exclusive-collections",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="h-48 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] flex items-center justify-center relative">
                  <span className="text-white text-xl font-bold">{category.title}</span>
                  {/* Coming Soon Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-800 font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" disabled className="text-gray-400 border-gray-300 cursor-not-allowed">
                    Coming Soon
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Development Status */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Platform in Development</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're currently building the ultimate premium e-commerce experience. Our platform will launch with
              carefully curated brands and exclusive partnerships to deliver unparalleled luxury shopping.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What to Expect:</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Exclusive partnerships with luxury brands worldwide</li>
                <li>• AI-powered personalized shopping recommendations</li>
                <li>• White-glove concierge services</li>
                <li>• Members-only access to limited editions</li>
                <li>• Global shipping with premium packaging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#5ccdb8] to-[#1f90bf] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Be the First to Know</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our exclusive waitlist to get early access to our premium marketplace and special launch offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <Link href="/contact">Join Waitlist</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

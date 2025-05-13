import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">AI Insights & Updates</h1>
          <p className="text-xl max-w-3xl">
            Explore our latest thoughts on AI technology, venture capital, and the startup ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col">
              <div className="h-64 bg-gray-200 rounded-t-lg"></div>
              <div className="p-6 border border-t-0 border-gray-100 rounded-b-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>May 10, 2025</span>
                  <span>•</span>
                  <span>AI Technology</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">The Future of Generative AI in E-Commerce</h3>
                <p className="text-gray-600 mb-4">
                  How generative AI is transforming the online shopping experience and creating new opportunities for
                  retailers and consumers alike.
                </p>
                <Button asChild variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                  <Link href="/blog/generative-ai-ecommerce">Read Article</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="h-64 bg-gray-200 rounded-t-lg"></div>
              <div className="p-6 border border-t-0 border-gray-100 rounded-b-lg">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>May 5, 2025</span>
                  <span>•</span>
                  <span>Venture Capital</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Building the Modern AI Stack: Investment Opportunities</h3>
                <p className="text-gray-600 mb-4">
                  An analysis of the emerging AI infrastructure landscape and where we see the most promising investment
                  opportunities.
                </p>
                <Button asChild variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                  <Link href="/blog/modern-ai-stack">Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>May {1 + index}, 2025</span>
                    <span>•</span>
                    <span>
                      {index % 3 === 0 ? "AI Technology" : index % 3 === 1 ? "Startup Advice" : "Industry Trends"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {index % 3 === 0
                      ? "Advancements in Natural Language Processing"
                      : index % 3 === 1
                        ? "How to Build a Strong AI Team"
                        : "AI Transformation in Healthcare"}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index % 2 === 0
                      ? "Exploring the latest developments and applications in the rapidly evolving AI landscape."
                      : "Practical insights for founders navigating the challenges of building AI-powered startups."}
                  </p>
                  <Button asChild variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
                    <Link href={`/blog/post-${index + 1}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="text-[#20b2bd] border-[#20b2bd] hover:bg-[#20b2bd]/10">
              <Link href="/blog/archive">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with our latest insights, events, and funding announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
              />
              <Button className="bg-[#20b2bd] hover:bg-[#1f90bf]">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

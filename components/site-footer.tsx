import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 mr-2 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">BAI</span>
              </div>
              <span className="text-xl font-bold">Bay Area Innovest</span>
            </Link>
            <p className="mt-4 text-gray-400">Global catalyst for next-gen innovation, empowering visionary founders in AI, e-commerce, logistics, consumer tech, and life sciences to build brands that shape the future.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/innovest" className="text-gray-400 hover:text-white transition-colors">
                  Bay Area Innovest
                </Link>
              </li>
              <li>
                <Link href="/GloBAI" className="text-gray-400 hover:text-white transition-colors">
                  GloBAI
                </Link>
              </li>
              <li>
                <Link href="/ecommerce" className="text-gray-400 hover:text-white transition-colors">
                  Premium E-commerce
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">San Jose, CA</li>
              <li>
                <a href="mailto:info@bayareaintl.com" className="text-gray-400 hover:text-white transition-colors">
                  info@bayareainnovest.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and opportunities.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-[#20b2bd] hover:bg-[#1f90bf]">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bay Area Innovest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

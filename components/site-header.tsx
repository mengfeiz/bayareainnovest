import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">BAI</span>
            </div>
            <span className="text-xl font-bold">Bay Area Innovest</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#20b2bd]">
            Fund
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#20b2bd]">
            About
          </Link>
          <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-[#20b2bd]">
            Portfolio
          </Link>
          <Link href="/GloBAI" className="text-sm font-medium transition-colors hover:text-[#20b2bd]">
            GloBAI
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-[#20b2bd]">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
        <Link href="/contact" className="hidden md:block text-sm font-medium transition-colors hover:text-[#20b2bd]">
            Contact Us
          </Link>
          <Button asChild className="bg-[#20b2bd] hover:bg-[#1f90bf]">
            <Link href="/join">Join Innovests</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

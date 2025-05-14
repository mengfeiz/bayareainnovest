"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="block px-2 py-1 text-lg font-medium" onClick={() => setOpen(false)}>
            Fund
          </Link>
          <Link href="/about" className="block px-2 py-1 text-lg font-medium" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/portfolio" className="block px-2 py-1 text-lg font-medium" onClick={() => setOpen(false)}>
            Portfolio
          </Link>
          <Link href="/GloBAI" className="block px-2 py-1 text-lg font-medium" onClick={() => setOpen(false)}>
            GloBAI
          </Link>
          <Link href="/blog" className="block px-2 py-1 text-lg font-medium" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <div className="mt-4">
            <Button asChild className="w-full bg-[#20b2bd] hover:bg-[#1f90bf]" onClick={() => setOpen(false)}>
              <Link href="/join">Join Innovests</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

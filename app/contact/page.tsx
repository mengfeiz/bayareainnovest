import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl">
            Whether you're a founder looking for investment, an AI expert interested in joining our community, or just
            want to learn more about Bay Area Innovest, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company Name
                </label>
                <Input id="company" placeholder="Enter your company name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">
                  Reason for Contact
                </label>
                <Select>
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pitch">Pitch a Startup</SelectItem>
                    <SelectItem value="join">Join as a Fellow</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="press">Press Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell us more about your inquiry" rows={6} />
              </div>

              <Button type="submit" className="w-full bg-[#20b2bd] hover:bg-[#1f90bf]">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Other Ways to Connect</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border border-gray-100 rounded-lg bg-white text-center">
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">For general inquiries, reach out to our team directly.</p>
                <a href="mailto:info@bayareainnovest.com" className="text-[#20b2bd] hover:underline">
                  info@bayareainnovest.com
                </a>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-white text-center">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our office is located in the heart of San Francisco.</p>
                <p className="text-[#20b2bd]">
                  123 Innovation Street
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>

              <div className="p-6 border border-gray-100 rounded-lg bg-white text-center">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">Stay updated with our latest news and events on social media.</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-[#20b2bd] hover:text-[#1f90bf]">
                    Twitter
                  </a>
                  <a href="#" className="text-[#20b2bd] hover:text-[#1f90bf]">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 bg-gradient-to-r from-[#1f90bf] to-[#5ccdb8] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Connect with fellow AI enthusiasts, founders, and investors in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#20b2bd] hover:bg-white/90">
              <a href="#">Join AI Club</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-[#20b2bd] hover:bg-white/10">
              <a href="#">LP Portal</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

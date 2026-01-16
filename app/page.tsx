import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { SpecialistCover } from "@/components/sections/specialist-cover"
import { SpecialistBenefits } from "@/components/sections/specialist-benefits"
import { Benefits } from "@/components/sections/benefits"
import { Testimonials } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-200">
      <Hero />
      <Services />
      <SpecialistCover />
      <SpecialistBenefits />
      <Benefits />
      <Testimonials />
    </main>
  )
}

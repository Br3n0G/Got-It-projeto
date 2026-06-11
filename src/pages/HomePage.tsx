import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from '../components/AndreasFooter'

import { Hero } from '../sections/Home/Hero'
import { Benefits } from '../sections/Home/Benefits'
import { HowItWorks } from '../sections/Home/HowItWorks'
import { Gallery } from '../sections/Home/Gallery'
import { Testimonials } from '../sections/Home/Testimonials'
import { CallToAction } from '../sections/Home/CallToAction'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <AndreasNavbar />

      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>

      <AndreasFooter />
    </div>
  )
}
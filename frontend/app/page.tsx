'use client'

import Hero from '@/sections/hero/hero'
import Services from '@/sections/services/services'
import Process from '@/sections/process/process'
import WhyUs from '@/sections/why-us/why-us'
import Testimonials from '@/sections/testimonials/testimonials'
import ContactCTA from '@/sections/contact/contact-cta'
import NewsletterSection from '@/components/newsletter/newsletter-section'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Testimonials />
      <ContactCTA />
      <NewsletterSection />
    </main>
  )
}

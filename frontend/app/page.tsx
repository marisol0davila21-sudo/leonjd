'use client'

import { useState } from 'react'
import Navbar from '@/components/navigation/navbar'
import Hero from '@/sections/hero/hero'
import Services from '@/sections/services/services'
import Process from '@/sections/process/process'
import WhyUs from '@/sections/why-us/why-us'
import Testimonials, { TestimonialType } from '@/sections/testimonials/testimonials'
import ContactCTA from '@/sections/contact/contact-cta'
import NewsletterSection from '@/components/newsletter/newsletter-section'
import Footer from '@/components/layout/footer'
import FeedbackForm from '@/components/feedback/feedback-form'

export default function Home() {
  const [newTestimonials, setNewTestimonials] = useState<TestimonialType[]>([])

  const handleAddTestimonial = (testimonial: TestimonialType) => {
    setNewTestimonials(prev => [...prev, testimonial])
  }

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Floating Feedback Form - Vertical Design */}
        <FeedbackForm onAddTestimonial={handleAddTestimonial} />
        
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials externalTestimonials={newTestimonials} />
        <ContactCTA />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

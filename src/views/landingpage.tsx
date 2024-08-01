import Analytics from '@/components/landingpage/analytics'
import Faqs from '@/components/landingpage/faqs'
import Footer from '@/components/reusables/footer'
import HeroSection from '@/components/landingpage/hero-section'
import Navbar from '@/components/reusables/navbar'
import OurDifference from '@/components/landingpage/our-difference'
import Partners from '@/components/landingpage/partners'
import Testimonials from '@/components/landingpage/testimonials'
import React from 'react'
import StartVoting from '@/components/landingpage/start-voting'
import Subscribe from '@/components/landingpage/subscribe'

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Analytics />
      <OurDifference />
      <Partners />
      <Testimonials />
      <Faqs />
      <StartVoting />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Landingpage

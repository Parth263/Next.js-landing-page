import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Screen from './Components/Screen'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import FAQ from './Components/FAQ'

function page() {
  return (
    <div className=''>
    <Navbar />
    <Hero />
    <Screen />
    <Features />
    <Workflow />
    <Pricing />
    <Testimonials />
    <FAQ />
    </div>
  )
}

export default page

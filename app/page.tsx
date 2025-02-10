import InfoAccordion from '@/components/layout/Accordion/InfoAccordion'
import Footer from '@/components/layout/Footer/Footer'
import CallAction from '@/components/layout/Sections/CallAction'
import Experiencie from '@/components/layout/Sections/Experiencie'
import HeroSection from '@/components/layout/Sections/HeroSection'
import React from 'react'

export default function Page() {
  return (
    <main className="w-full">
      <HeroSection />
      <Experiencie />
      <CallAction />
      <InfoAccordion/>
      <Footer/>
    </main>
  )
}

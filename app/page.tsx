import CardHero from '@/components/layout/Cards/CardHero'
import AuthTabs from '@/components/layout/Tabs/AuthTabs'
import React from 'react'

export default function Page() {
  return (
    <main className="w-full min-h-screen flex justify-center items-start lg:items-center  p-4 lg:p-8">
      <div className="container max-w-7xl flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:items-center lg:justify-center">
        <CardHero />
        <AuthTabs />
      </div>
    </main>
  )
}

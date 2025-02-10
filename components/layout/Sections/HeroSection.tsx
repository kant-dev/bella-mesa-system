import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <>
    <section className="w-full px-4 py-12">
      <div className="container mx-auto max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src="/img-base.jpg?height=600&width=800"
            alt="Interior do Restaurante Bella Mesa"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-semibold">Gastronomia italiana com um toque contemporâneo</h1>
          <p className="text-gray-600 text-lg">
            No coração de São Paulo, o <strong>Bella Mesa</strong> oferece uma experiência gastronômica única, combinando receitas
            tradicionais italianas com técnicas modernas. Nossa casa proporciona um ambiente acolhedor e elegante,
            perfeito para momentos especiais.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button variant="secondary">Ver Cardápio</Button>
            <Button>Fazer Reserva</Button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

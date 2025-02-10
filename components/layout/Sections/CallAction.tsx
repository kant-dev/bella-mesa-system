import { Button } from '@/components/ui/button'
import React from 'react'

export default function CallAction() {
  return (
    <>
      <section className='w-full flex justify-center my-4 '>
        <div className="container py-12 bg-gray-100"> 
          <div className="p-12 text-center rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold mb-4">Planeje sua experiência gastronômica</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Quer garantir a melhor mesa para sua ocasião especial? Nossa equipe está pronta para ajudar você a planejar
              um momento inesquecível, seja um jantar romântico, uma celebração em família ou um encontro de negócios.
            </p>
            <Button size="lg">Fazer Reserva</Button>
          </div>
        </div>
      </section>
    </>
  )
}

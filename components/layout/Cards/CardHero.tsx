import { UtensilsCrossedIcon } from 'lucide-react'
import React from 'react'

export default function CardHero() {
  return (
    <div className=" hidden lg:flex flex-col gap-6 shadow-lg p-6 rounded-md">
    <div className="flex items-center gap-2 text-primary">
      <UtensilsCrossedIcon className="h-8 w-8" />
      <h2 className="text-2xl font-bold">Bem-vindo ao Bella Mesa</h2>
    </div>

    <div className="relative aspect-video overflow-hidden rounded-lg w-full bg-slate-300">
    </div>

    <div className="space-y-4">
      <p className="text-xl text-muted-foreground">
        Descubra uma experiência gastronômica única no coração da cidade.
      </p>
      <ul className="grid gap-2 text-muted-foreground">
        <li>✓ Culinária italiana autêntica</li>
        <li>✓ Ambiente acolhedor e elegante</li>
        <li>✓ Reservas online simplificadas</li>
        <li>✓ Cardápio sazonal exclusivo</li>
      </ul>
    </div>
  </div>
  )
}

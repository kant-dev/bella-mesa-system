import { UserIcon, UtensilsCrossedIcon, UtensilsIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header() {

  return (
    <>
      <header className='bg-[#191622] text-white flex justify-center p-2 overflow-x-hidden'>
        <div className='container flex justify-between items-center p-2'>
          <h2 className='text-2xl font-bold'>Bella Mesa</h2>
          <div className='flex items-center gap-10'>
            <nav className='lg:flex items-center gap-6 text-xl hidden'>
              <Link href={'/'}>Reservas</Link>
              <Link href={'/'}>Cardápio</Link>
            </nav>
            <div className='flex items-center gap-2'>
              <Link href={'/'}><UserIcon/></Link>
              <Link href={'/'}><UtensilsIcon/></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

import Image from 'next/image'
import React from 'react'


const contentExp = [
  { title: 'Massas Artesanais', desc: 'Nossas massas são preparadas diariamente, seguindo receitas tradicionais italianas.' },
  { title: 'Carta de Vinhos', desc: 'Uma seleção cuidadosa de vinhos italianos e internacionais para harmonizar com seu prato.' },
  { title: 'Ambiente Sofisticado', desc: 'Um espaço elegante e acolhedor, ideal para jantares românticos e celebrações especiais.' },
]
export default function Experiencie() {
  return (
    <>
      <section className="w-full flex justify-center my-4" >
        <div className="container  bg-neutral-100 py-12">
          <h2 className="text-4xl font-semibold mb-8 text-center">Nossa Experiência</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {contentExp.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className=" flex justify-center items-center">
                  <Image src="/img-base.jpg" alt={item.title} width={300} height={300} className='object-cover rounded-lg '/>
                </div>
                <h3 className="text-2xl font-bold text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

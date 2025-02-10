import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

export default function InfoAccordion() {
  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-8">Informações e Funcionamento</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-bold">
                Como funciona o sistema de reservas?
              </AccordionTrigger>
              <AccordionContent className="text-lg font-reguler space-y-2">
                <p>
                  Nosso sistema de reservas foi pensado para garantir a melhor experiência para você. As reservas podem ser feitas diretamente pelo nosso site, onde é possível selecionar o dia, horário e quantidade de pessoas. Caso prefira, também aceitamos reservas por telefone ou WhatsApp, onde nossa equipe poderá auxiliar com qualquer dúvida.
                </p>
                <p>
                  Para garantir sua mesa nos horários de maior movimento, como jantares de sexta e sábado, recomendamos que a reserva seja feita com pelo menos 24 horas de antecedência.
                </p>

                <p>
                  Para grupos acima de 6 pessoas, sugerimos que entre em contato diretamente conosco para organizarmos um espaço confortável e garantir que todos tenham uma experiência agradável. Se estiver planejando um evento especial, temos pacotes personalizados que podem incluir menus exclusivos e decoração diferenciada.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-bold">
                Qual é o horário de funcionamento?
              </AccordionTrigger>
              <AccordionContent className="text-lg font-reguler space-y-2">
                <h2>Nosso restaurante está aberto nos seguintes horários:</h2>
                <ul className="list-disc pl-5 mt-2">
                  <li><strong>Almoço:</strong> Terça a domingo, das 12h às 15h</li>
                  <li><strong>Jantar:</strong> Terça a domingo, das 19h às 23h</li>
                </ul>

                <p>
                  Às segundas-feiras, permanecemos fechados para manutenção, limpeza e reabastecimento de nossos ingredientes, garantindo sempre um ambiente impecável e pratos preparados com insumos frescos.
                </p>

                <p>
                  Em datas comemorativas e feriados, nossos horários podem ser estendidos ou ajustados. Para essas ocasiões, recomendamos que consulte nossas redes sociais ou entre em contato diretamente conosco para obter informações atualizadas.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-bold">
                Vocês atendem a restrições alimentares?
              </AccordionTrigger>
              <AccordionContent className="text-lg font-reguler space-y-2">
                <p>
                  Sim, nosso restaurante tem opções para atender diferentes restrições alimentares e garantir que todos possam desfrutar de uma experiência gastronômica completa.
                </p>

                <p>
                  Nosso cardápio inclui pratos vegetarianos, veganos e sem glúten, cuidadosamente preparados para preservar sabor e qualidade. Caso tenha alguma alergia alimentar ou necessidade específica, nossa equipe está preparada para adaptar pratos conforme necessário.
                </p>

                <p>
                  Se estiver fazendo uma reserva, informe-nos sobre qualquer restrição para que possamos garantir que sua experiência seja segura e agradável. Além disso, nossos atendentes estão sempre à disposição para sugerir os melhores pratos de acordo com suas preferências.
                </p>

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-bold">
                O restaurante aceita eventos privados?
              </AccordionTrigger>
              <AccordionContent className="text-lg font-reguler space-y-2">
                <p>
                  Sim, oferecemos um espaço exclusivo para eventos privados, ideal para celebrações especiais como aniversários, casamentos, reuniões corporativas e confraternizações.
                </p>

                <p>
                  Nossa sala privativa acomoda até 40 pessoas e pode ser personalizada conforme a necessidade do evento. Oferecemos pacotes especiais que incluem menus exclusivos elaborados pelo nosso chef, harmonização de vinhos selecionados e decoração personalizada.

                </p>
                <p>
                  Para eventos mais intimistas, também disponibilizamos a possibilidade de reservar um ambiente mais reservado dentro do salão principal. Entre em contato com nossa equipe para conhecer todas as opções disponíveis e garantir uma experiência única para seus convidados.
                </p>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>
    </>
  )
}

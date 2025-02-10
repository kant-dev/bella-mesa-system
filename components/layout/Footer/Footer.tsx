import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 py-12 mt-12 w-full flex justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Endereço</h3>
              <p className="text-gray-600">
                Rua das Flores, 123
                <br />
                Jardins, São Paulo - SP
                <br />
                CEP: 01234-567
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <p className="text-gray-600">
                Tel: (11) 1234-5678
                <br />
                WhatsApp: (11) 98765-4321
                <br />
                Email: contato@bellamesa.com.br
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Horário de Funcionamento</h3>
              <p className="text-gray-600">
                Terça a Domingo
                <br />
                Almoço: 12h às 15h
                <br />
                Jantar: 19h às 23h
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Bella Mesa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

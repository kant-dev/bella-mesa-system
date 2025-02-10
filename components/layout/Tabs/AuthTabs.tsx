import { Card, CardContent} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import FormLogin from '../Forms/FormLogin'
import FormRegister from '../Forms/FormRegister'
import { UtensilsCrossedIcon } from 'lucide-react'

export default function AuthTabs() {
  return (
    <>
      <div className='flex-grow '>
        <div className="lg:hidden space-y-4 my-8 px-4">
          <div className="flex justify-center items-center text-primary my-6 gap-2">
            <UtensilsCrossedIcon className="h-8 w-8" aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-center">Bem-vindo ao Bella Mesa</h2>
          </div>

          <p className="text-sm md:text-md text-center text-muted-foreground max-w-lg mx-auto">
            Descubra uma experiência gastronômica única no coração da cidade.
          </p>

          <ul className="grid gap-4 text-muted-foreground text-sm md:text-md text-center max-w-md mx-auto">
            <li>✓ Culinária italiana autêntica</li>
            <li>✓ Ambiente acolhedor e elegante</li>
            <li>✓ Reservas online simplificadas</li>
            <li>✓ Cardápio sazonal exclusivo</li>
          </ul>

          <p className="text-sm md:text-md text-center text-muted-foreground max-w-lg mx-auto">
            Entre agora, ou cadastre-se se é novo por aqui e venha desfrutar de uma experiência gastronômica única no Bella Mesa.
          </p>
        </div>

        <Tabs defaultValue='login' className=''>
          <TabsList className='flex max-w-full mb-6'>
            <TabsTrigger value='login' className='flex-1'>Login</TabsTrigger>
            <TabsTrigger value='register' className='flex-1'>Cadastro</TabsTrigger>
          </TabsList>
          <TabsContent value='login'>
            <Card className='rounded-md'>
              <CardContent>
                <FormLogin />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='register'>
            <Card>
              <CardContent>
                <FormRegister />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

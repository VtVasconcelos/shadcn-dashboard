import Cards from '@/components/pages/home/cards';
import { Overview } from '@/components/pages/home/overview'
import { Recents } from '@/components/pages/home/recents';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-full min-w-full">
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Inicio</h1>
      <Cards />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2'>
        <Card>
          <Overview />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              Vendas recentes
            </CardTitle>
            <CardDescription>
              no total foram <b className='underline underline-offset-2'>15</b> vendas esse mês.
            </CardDescription>
          </CardHeader>
          <Recents />
        </Card>
      </div>

    </main>
  )
}

export const metadata = {
  title: "Home",
  description: 'teste'
};
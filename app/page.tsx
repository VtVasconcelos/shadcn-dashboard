import Cards from '@/components/pages/home/cards';
import { Overview } from '@/components/pages/home/overview'
import { Recents } from '@/components/pages/home/recents';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Menu from '@/components/navigation/index'
import ThemeToggle from '@/components/theme-toggle/index';
import CardWithGraph from '@/components/pages/home/cardWithGraph';

export default function Home() {
  return (
    <main className="min-h-full min-w-full container py-6">
      <div className='flex items-center justify-between'>
        <div className='flex space-x-6'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>/Dashboard</h1>
        <Menu className={`max-md:hidden`} />
        </div>
        <ThemeToggle />
      </div>
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4 items-center">
        <CardWithGraph />
        <CardWithGraph />
        <CardWithGraph />
        <CardWithGraph />
      </div>
    </main>
  )
}

export const metadata = {
  title: "Home",
  description: 'teste'
};
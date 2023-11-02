import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/Table'
import Homepage from './homepage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Homepage/>
    </main>
  )
}

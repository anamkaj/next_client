import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Интернет магазин видеонаблюдения г.Краснодар',
  description:
    'В нашем магазине вы можете выбрать из более чем 10000 камер и видеорегистраторов для видеонаблюдения.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body className=' container mx-auto'>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

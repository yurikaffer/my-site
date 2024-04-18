import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import NavbarComponent from '@/components/Navbar'
import BgLayoutRoot from '@/components/BgLayoutRoot/BgLayoutRoot'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className} >
          <Providers>
            <BgLayoutRoot>
              <NavbarComponent />
              <div className='z-10'>
                {children}
              </div>
              <Footer/>
            </BgLayoutRoot>
          </Providers>
      </body>
    </html>
  )
}
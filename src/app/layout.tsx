import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import NavbarComponent from '@/components/Layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuri Kaffer | Fullstack Developer - TS, Next, React, Node',
  description: 'Sou um desenvolvedor de software autodidata, apaixonado por tecnologia e em busca de um novo desafio.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
  },
  openGraph: {
    images: ['user.jpeg'],
    authors: ['Yuri Kaffer']
  },
  robots: {
    follow: true,
    index: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className={`${inter.className}`} >
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  )
}
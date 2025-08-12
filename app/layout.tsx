import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grupo Folclórico Alemão Heimatland',
  description: 'Fundado em 1987 em Cerro Largo, RS. Preservando a cultura alemã através da dança folclórica.',
  keywords: 'grupo folclórico, alemão, heimatland, cerro largo, rs, cultura alemã, dança folclórica',
  authors: [{ name: 'Grupo Folclórico Alemão Heimatland' }],
  openGraph: {
    title: 'Grupo Folclórico Alemão Heimatland',
    description: 'Fundado em 1987 em Cerro Largo, RS. Preservando a cultura alemã através da dança folclórica.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

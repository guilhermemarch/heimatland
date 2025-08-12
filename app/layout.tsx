import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Importar a fonte gótica alemã
const unifrakturCook = Inter({ 
  subsets: ['latin'],
  variable: '--font-gothic'
})

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

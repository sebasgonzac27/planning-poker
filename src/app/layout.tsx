import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/global.scss'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Planning Poker - Pragma',
  description: 'Una aplicación que utiliza Pragma para estimar el costo de algunas tareas.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Toaster
          richColors
          position="top-right"
          expand
          closeButton
          className={poppins.className}
        />
        {children}
        <div id="modal"></div>
        </body>
    </html>
  )
}

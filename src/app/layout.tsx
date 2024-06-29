'use client'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import { Open_Sans } from "next/font/google"


const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

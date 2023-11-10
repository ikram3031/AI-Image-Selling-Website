import type { Metadata } from 'next'
import { Inter, Montserrat } from "next/font/google";
import './globals.css';
import Provider from './(Provider)/NextUIProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'AI Generated Image Selling',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monserrat.variable}`}>
        <Provider>
          {children}
        </Provider>        
      </body>
    </html>
  )
}

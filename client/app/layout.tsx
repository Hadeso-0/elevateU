import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ElevateU',
  description: 'AI mock Interview',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          > */}
        <body className={inter.className}>
          {children}
        </body>
      {/* </ThemeProvider> */}
    </html>
  )
}

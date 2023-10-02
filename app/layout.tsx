"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const inter = Inter({ subsets: ['latin'] })

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          disableTransitionOnChange
        >
          <div className='flex-1'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

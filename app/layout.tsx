import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bonivibe Links',
  description: 'Discover trendy fashion links and connect with us',
  // logo bonivibe
  icons: {
    icon: '/logo-bonivibe.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

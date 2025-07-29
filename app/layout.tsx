import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shihab Yousuf - Portfolio',
  description: 'Computer Science Student & AI Enthusiast - Personal Portfolio',
  generator: 'Next.js',
  icons: {
    icon: '/alogo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/alogo.jpg" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Schoolbell&family=Fingerpaint&display=swap" rel="stylesheet" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-schoolbell: 'Schoolbell', cursive;
  --font-fingerpaint: 'Fingerpaint', cursive;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

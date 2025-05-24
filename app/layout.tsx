import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Madhav Mishra',
  description: 'Passionate about creating innovative web solutions and leveraging data science to solve real-world problems.',
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

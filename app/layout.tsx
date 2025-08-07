import type { Metadata } from 'next'
import { Inter, Poppins, Fira_Code } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Akash Kushwaha - NEET Mentor & Medical Content Creator',
  description: 'Helping 10,000+ students crack NEET with smart strategies. Expert NEET mentoring, MCQ mastery workshops, and crash courses. Technical management by Shivam Pandey.',
  keywords: 'NEET mentor, medical entrance, NEET preparation, MCQ techniques, medical content creator, Akash Kushwaha',
  authors: [{ name: 'Shivam Pandey', url: 'mailto:shivampandeyyuyu@gmail.com' }],
  creator: 'Shivam Pandey',
  publisher: 'Shivam Pandey',
  openGraph: {
    title: 'Akash Kushwaha - NEET Mentor & Medical Content Creator',
    description: 'Helping 10,000+ students crack NEET with smart strategies since 2023',
    url: 'https://akash-neet-mentor.vercel.app',
    siteName: 'Akash Kushwaha NEET Mentor',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${firaCode.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  )
}

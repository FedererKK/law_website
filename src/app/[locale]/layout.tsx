import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Inter, Rubik, Space_Grotesk } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'
import { Footer } from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
})
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik'
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
// Metadata configuration
export const metadata: Metadata = {
  title: 'Hogan Winston Boies LLP - Global Legal Experts',
  description:
    'Hogan Winston Boies LLP specializes in cross-country deals, litigation, and high-value financial transactions, offering world-class legal services globally.',
  keywords: [
    'law firm',
    'global legal services',
    'litigation experts',
    'financial transactions',
    'cross-border deals',
    'Hogan Winston Boies LLP'
  ].join(', '),
  openGraph: {
    title: 'Hogan Winston Boies LLP - Global Legal Experts',
    description:
      'Specialists in cross-country deals, litigation, and financial transactions.',
    url: 'https://www.hoganwinstonboies.com',
    siteName: 'Hogan Winston Boies LLP',
    images: [
      {
        url: '/og-image.jpg', // Replace with your actual OpenGraph image URL
        width: 1200,
        height: 630,
        alt: 'Hogan Winston Boies LLP logo'
      }
    ],
    type: 'website'
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir={locale === 'ar' || locale == 'fa' ? 'rtl' : 'ltr'}
      className={`${space_grotesk.variable} ${rubik.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light',
            'dark',
            'instagram',
            'facebook',
            'discord',
            'netflix',
            'twilight',
            'reddit'
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='max-w-screen-3xl mx-auto'>{children}</main>
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

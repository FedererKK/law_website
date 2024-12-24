import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

interface FooterProps {
  locale: string
}

export const Footer = ({ locale }: FooterProps) => {
  return (
    <footer className='bg-slate-900 text-slate-300'>
      <div className='mx-auto max-w-screen-2xl px-8 pt-16'>
        <div className='grid grid-cols-3 gap-8 pb-16 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {/* Company Info */}
          <div className='space-y-6'>
            <h3 className='text-lg font-semibold text-white'>
              Hogan Winston Boies LLP
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <MapPin className='h-5 w-5 text-blue-400' />
                <p>One Financial Center, New York, NY 10004</p>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='h-5 w-5 text-blue-400' />
                <p>+1 (212) 555-0123</p>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='h-5 w-5 text-blue-400' />
                <p>contact@globallawpartners.com</p>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className='mb-6 text-lg font-semibold text-white'>
              Practice Areas
            </h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  href={`/${locale}/expertise/transactions`}
                  className='hover:text-blue-400'
                >
                  Cross-Border Transactions
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/expertise/litigation`}
                  className='hover:text-blue-400'
                >
                  High-Stakes Litigation
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/expertise/financial`}
                  className='hover:text-blue-400'
                >
                  Financial Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-6 text-lg font-semibold text-white'>
              Quick Links
            </h3>
            <ul className='space-y-4'>
              <li>
                <Link href={`/${locale}/about`} className='hover:text-blue-400'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/insights`}
                  className='hover:text-blue-400'
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/careers`}
                  className='hover:text-blue-400'
                >
                  Careers
                </Link>
              </li>
              {/* <li>
                <Link
                  href={`/${locale}/locations`}
                  className='hover:text-blue-400'
                >
                  Global Offices
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-slate-800 py-8 text-sm'>
          <div className='flex flex-wrap justify-between gap-4'>
            <p>© 2024 Hogan Winston Boies LLP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { ChevronDown } from 'lucide-react'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm'>
      <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-8 py-4'>
        {/* Firm Logo and Name */}
        <Link href={`/${locale}`}>
          <div className='flex flex-row items-center'>
            {/* Optional Logo */}
            {/* <div className="h-12 w-12">
              <LogoIcon />
            </div> */}
            <div className='ml-3 flex flex-col'>
              <strong className='text-2xl font-semibold text-slate-900'>
                {t('firm_name')}
              </strong>
              {/* <span className='text-sm text-slate-600'>
                {t('firm_tagline')}
              </span> */}
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className='flex flex-row items-center gap-8'>
          <nav className='hidden items-center gap-8 lg:flex'>
            <div className='group relative'>
              <button className='flex items-center gap-1 text-slate-700 hover:text-blue-800'>
                {t('expertise')}
                <ChevronDown className='h-4 w-4' />
              </button>
              <div className='invisible absolute left-0 top-full w-64 rounded-lg bg-white p-4 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100'>
                <Link
                  href={`/${locale}/expertise/transactions`}
                  className='block py-2 text-slate-700 hover:text-blue-800'
                >
                  {t('cross_border_transactions')}
                </Link>
                <Link
                  href={`/${locale}/expertise/litigation`}
                  className='block py-2 text-slate-700 hover:text-blue-800'
                >
                  {t('high_stakes_litigation')}
                </Link>
                <Link
                  href={`/${locale}/expertise/financial`}
                  className='block py-2 text-slate-700 hover:text-blue-800'
                >
                  {t('financial_solutions')}
                </Link>
              </div>
            </div>

            <Link
              href={`/${locale}/about`}
              className='text-slate-700 hover:text-blue-800'
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/insights`}
              className='text-slate-700 hover:text-blue-800'
            >
              {t('insights')}
            </Link>
            <Link
              href={`/${locale}/careers`}
              className='text-slate-700 hover:text-blue-800'
            >
              {t('careers')}
            </Link>
          </nav>

          {/* Language Switcher and Contact Us */}
          <div className='flex items-center gap-6'>
            {/* <LangSwitcher /> */}
            <Link
              href={`/${locale}/contact`}
              className='hidden rounded-full bg-blue-800 px-6 py-2 text-sm font-medium text-white hover:bg-blue-900 lg:block'
            >
              {t('contact_us')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

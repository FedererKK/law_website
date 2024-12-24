'use client'
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const routes = {
  home: '/',
  about: '/about',
  insights: '/insights',
  careers: '/careers',
  contact: '/contact',
  locations: '/locations',
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
  expertise: {
    transactions: '/expertise/transactions',
    litigation: '/expertise/litigation',
    financial: '/expertise/financial',
    regulatory: '/expertise/regulatory',
    governance: '/expertise/governance'
  }
} as const

export const pathnames = {
  '/': '/',
  '/about': '/about'
} satisfies Pathnames<typeof locales>

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames: routes
  })

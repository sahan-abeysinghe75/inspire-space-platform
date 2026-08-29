import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'si'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/programs': '/programs',
    '/initiatives/astro': '/initiatives/astro',
    '/initiatives/science': '/initiatives/science',
    '/initiatives/tech': '/initiatives/tech',
    '/knowledge': '/knowledge',
    '/knowledge/articles': '/knowledge/articles',
    '/knowledge/sky-guide': '/knowledge/sky-guide',
    '/knowledge/downloads': '/knowledge/downloads',
    '/knowledge/faqs': '/knowledge/faqs',
    '/gallery': '/gallery',
    '/events/request': '/events/request',
    '/contact': '/contact',
  },
})

export type Locale = (typeof routing.locales)[number]

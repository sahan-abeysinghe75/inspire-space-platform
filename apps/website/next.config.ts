import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      'next-intl/config': './src/i18n/request.ts',
    },
  },
  transpilePackages: [
    '@astro/ui',
    '@astro/database',
    '@astro/auth',
    '@astro/knowledge',
    '@astro/gallery',
    '@astro/event-request',
    '@astro/site-content',
    '@astro/mail',
    '@astro/storage',
    '@astro/permissions',
    '@astro/config',
    '@astro/validation',
    '@astro/logger',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudflare.com',
      },
    ],
  },
}

export default withNextIntl(nextConfig)

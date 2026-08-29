import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { getToken } from 'next-auth/jwt'

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Admin route protection
  if (pathname.startsWith('/admin')) {
    // Allow login page
    if (pathname === '/admin/login') {
      return NextResponse.next()
    }

    const token = await getToken({
      req: request,
      secret: process.env.AUTH_SECRET,
    })

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Check role
    const role = token.role as string
    if (!['ADMIN', 'SUPER_ADMIN'].includes(role)) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    return NextResponse.next()
  }

  // Apply intl middleware for all other routes
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
    '/',
  ],
}

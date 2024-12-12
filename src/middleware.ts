import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isSignin = path === '/signup' || path === '/login' || path.startsWith('/verify');
  const token = request.cookies.get('token')?.value || '';

  if (isSignin && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (path.startsWith('/profile') && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/profile/:path*',
    '/login',
    '/signup',
    '/verify'
  ]
}

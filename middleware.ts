import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware runs for every request; we only modify Cache-Control for HTML
// responses (pages). We skip requests for static assets, images, and API.

const shouldSkip = (pathname: string) => {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.') // files with extensions (assets)
  );
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  if (shouldSkip(pathname)) {
    return NextResponse.next();
  }

  // For pages, force no-store so HTML is always fresh.
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'no-store, must-revalidate');
  return res;
}

export const config = {
  // run on all paths; we early-exit for assets/api in the handler
  matcher: '/:path*',
};

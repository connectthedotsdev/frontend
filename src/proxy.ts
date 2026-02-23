import type { NextRequest } from 'next/server'

export function proxy(_request: NextRequest) {
  // No-op proxy — routes are handled by Next.js App Router
}

export const config = {
  matcher: [],
}
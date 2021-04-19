export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  'http://localhost:3000'

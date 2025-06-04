import { Outfit, Space_Mono } from "next/font/google";

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-outfit",  
})

export const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-spaceMono",
  weight: ['400', '700'],
})
'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === '/home'

  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground h-16 flex items-center justify-center bg-background">
      {/* Back Arrow & Text */}
      <AnimatePresence>
        {!isHome && (
          <motion.div
            key="back"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-4 flex items-center"
          >
            <Link href="/" className="flex items-center group">
              <svg
                className="w-5 h-5 text-black group-hover:text-gray-600 transition"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="ml-2 font-medium text-2xl">Back</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Title */}
      <motion.h1
        initial={false}
        animate={
          isHome
            ? { left: "calc(50%-158px)", x: 0, right: "auto" }
            : { left: "auto", x: 0, right: "1.25rem" }
        }
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={
          "text-3xl lg:text-5xl font-bold absolute top-1/2 -translate-y-1/2 whitespace-nowrap px-5 py-0 leading-0"
        }
      >
        Unison Crew
      </motion.h1>
    </header>
  )
}
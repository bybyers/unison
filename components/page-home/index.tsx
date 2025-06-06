'use client'

import { useEffect, useState } from "react"
import { groq } from "next-sanity"
import { client } from "@/sanity/lib/client"
import { navQuery } from "@/sanity/queries/components/page-nav-query"
import { Button } from "@/components/ui/button"
import Route from "@/components/route"
import Link from "next/link"

export default function HomePage() {
  const [nav, setNav] = useState<any>(null)

  useEffect(() => {
    client.fetch(navQuery).then(setNav)
  }, [])

  return (
    <>
      <main className="flex flex-col min-h-[calc(80vh)] justify-between items-center py-12 lg:py-24 2xl:pt-48">
        <section className='controller-block w-full px-5 flex justify-center'>
          <div className='w-full max-w-xl flex flex-col items-center gap-y-8'>
            {nav?.items?.length ? (
              <div className="flex flex-col gap-y-2 w-full">
                {nav.items.map((item: any, idx: number) => (
                  <Route data={item} className="flex" key={item._key || idx}>
                    <Button className="w-full justify-center text-lg transition-transform duration-150 ease-in-out hover:scale-105 active:scale-95">
                      {item.title || "Needs title"}
                    </Button>
                  </Route>
                ))}
              </div>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </section>
        <div className="w-full text-center text-xs text-muted-foreground mt-8 mb-4">
          Made with ❤️ by Jacob Byers &rarr;{" "}
          <Link href="https://www.ohmni.tech" className="underline hover:text-primary transition">
            www.ohmni.tech
          </Link>
        </div>
      </main>
    </>
  )
}
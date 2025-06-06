import type { Metadata } from "next";
import { spaceMono, outfit } from "./fonts";
import { cn } from "@/lib/utils"
import "./globals.css";
import Template from "./template"
import Script from 'next/script';
import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/disable-draftmode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Unison Crew",
  description: "A collaborative, heart-led festival crew rooted in connection, care, and creativity. We’re a constellation of dancers, dreamers, and community builders preparing for Unison Festival to co-create a shared camp, support each other, and turn our gathering into a soulful village. ✨",
  openGraph: {
    images: ['https://cdn.sanity.io/images/lwfykyvn/production/a0f37e1b9a9505df8c3acadb8f09fe35520a4d0f-1026x514.jpg'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-spaceMono", spaceMono.variable, "font-outfit", outfit.variable)}>
      <body className="min-h-screen antialiased">
        <Header />
        <Template>
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
          <Script
            defer
            data-domain="unison-crew.vercel.app"
            src="https://plausible.io/js/script.hash.outbound-links.js"
            strategy="afterInteractive"
          />
          {/* Plausible initialization script for custom events */}
          <Script id="plausible-init" strategy="afterInteractive">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>
        </Template>
      </body>
    </html>
  );
}

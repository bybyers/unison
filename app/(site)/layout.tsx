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
  title: "Ohmni Web Technologies",
  description: "A web development company that specializes in building custom web applications for business and marketing teams.",
  openGraph: {
    images: ['https://cdn.sanity.io/images/wq2mbvrt/production/e9827ee6bccd36318a9e09b113024f281b234966-1026x514.jpg'],
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
            data-domain="ohmni.tech"
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

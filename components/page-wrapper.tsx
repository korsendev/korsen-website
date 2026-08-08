"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface PageWrapperProps {
  children: React.ReactNode
  showBgEffects?: boolean
}

export function PageWrapper({ children, showBgEffects = true }: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Reusable Header */}
      <Header />
      
      {showBgEffects && (
        <>
          {/* Global technical background layout */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(198,253,14,0.06),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(198,253,14,0.04),transparent_35%)] pointer-events-none z-0" />
          <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none z-0" />
        </>
      )}
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Reusable Footer */}
      <Footer />

      {/* Persistent WhatsApp Button */}
      <WhatsAppButton />
    </main>
  )
}

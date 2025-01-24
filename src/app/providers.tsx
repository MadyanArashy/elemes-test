'use client'

import React from 'react'
import { ReactNode } from 'react'
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>
}
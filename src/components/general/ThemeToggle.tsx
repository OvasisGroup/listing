"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-transparent border-1 text-accent-foreground hover:bg-transparent cursor-pointer">
      {theme === "dark" ? <Sun/> : <Moon/>}
    </Button>
    </>
  )
}

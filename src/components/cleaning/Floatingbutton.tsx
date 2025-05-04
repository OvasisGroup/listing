'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function FloatingButton() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
    >
      <Link href="/cleaning/estimate">
        <Button
          variant="default"
          className="group flex items-center gap-2 rounded-full shadow-lg px-4 cursor-pointer text-white"
        >
          <ArrowRight className="h-4 w-4" />
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:w-auto group-hover:opacity-100"
          >
            Get An Estimate
          </motion.span>
        </Button>
      </Link>
    </motion.div>
  )
}

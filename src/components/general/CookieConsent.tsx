'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { CookieIcon } from 'lucide-react'

export function CookiesConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookies-consent', 'accepted')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 z-50 max-w-sm w-full"
        >
          <Card className="p-4 shadow-xl border rounded-xl bg-white dark:bg-gray-900">
            <div className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <CookieIcon/>
                <p className='text-xl font-bold text-primary'>This Website Uses Cookies</p>
              We use cookies to improve your experience. By using our site, you agree to our use of cookies.{' '}
              <Link href="/legal/cm8yfhw5k000hmt6adat9xi3r" className="text-primary hover:text-green-800 font-bold">
                Cookies Policy
              </Link>
            </div>
            <div className="flex justify-end">
              <Button size="sm" onClick={handleAccept} className='w-full bg-primary text-white hover:bg-green-800'>
                Accept
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

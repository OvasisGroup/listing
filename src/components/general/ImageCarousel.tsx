
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const images = [
    '/images/autogarage.jpeg',
    '/images/cleaninghome.png',
    '/images/cleaningman.jpg',
]

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function ImageCarousel() {
  const [[index, direction], setIndex] = useState([0, 0])

  // Auto-play: advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(interval)
  }, [index])

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + images.length) % images.length
      return [newIndex, newDirection]
    })
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden h-[400px] rounded-xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Image
            src={images[index]}
            alt={`Slide ${index + 1}`}
            width={800}
            height={400}
            className="w-full h-full object-cover rounded-xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
        <button
          onClick={() => paginate(-1)}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ‹
        </button>
        <button
          onClick={() => paginate(1)}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
        >
          ›
        </button>
      </div>
    </div>
  )
}

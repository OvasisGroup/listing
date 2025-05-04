'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 md:gap-12 gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold md:text-4xl text-2xl mb-2">
            Reclaim your time with{' '}
            <span className="text-primary">Mr. Kim</span> <br />
            Cleaning Team
          </h1>
          <p>
            Hustling, bustling, hurried, and worried—does this sound like you? With free time
            feeling like a luxury and a never-ending to-do list, finding moments to focus on what
            truly matters can be a challenge.
          </p>
          <p className="mt-4">
            Let Mr.KIM house cleaning team take care of your housework, so you can reclaim your
            time. Whether it means spending more time with family (or furry friends), enjoying a
            hobby, advancing your career, or simply slowing down a bit, we’re here to help you find
            that balance.
          </p>
          <p className="mt-4">
            With several locations spread out throughout the country and around East Africa, Mr. KIM
            has professionally trained team members, and more than thousands of hours dedicated to
            cleaning annually—Mr. KIM is your expert in exceptional home cleaning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/images/cleaninghome.png'}
            alt={'Mr_Kim_Logo'}
            width={500}
            height={400}
            className="w-full rounded-lg mt-4"
          />
        </motion.div>
      </div>
    </div>
  )
}

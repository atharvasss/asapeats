'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-secondary/80"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'Cano, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          ASAP EATS
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: 'SF-PRO, sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
        >
          Aussie-Indian fusion with a dash of spice
        </motion.p>
        <motion.button
          className="btn btn-secondary text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: 'SF-PRO, sans-serif' }}
        >
          Explore Menu
        </motion.button>
      </div>
    </section>
  )
}


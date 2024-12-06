'use client'

import { motion } from 'framer-motion'
import MenuBook from '../components/MenuBook'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-warm-beige py-20">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-deep-red"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ASAP EATS Catering Menu
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12 text-menu-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore our diverse selection of traditional Indian dishes and exciting fusion creations.
        </motion.p>
        <MenuBook />
      </motion.div>
    </div>
  )
}


'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="ASAP EATS restaurant interior"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          ASAP EATS
        </motion.h1>
        <motion.p 
          className="text-2xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
        >
          Traditional Indian flavours with a global twist
        </motion.p>
      </motion.div>
    </section>
  )
}


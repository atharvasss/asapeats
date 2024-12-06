'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export default function CtaSection() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section className="py-20 bg-orange-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-8">
            Join Us for an Unforgettable Culinary Journey
          </h2>
          <p className="text-xl">
            Experience the magic of ASAP EATS in North Sydney today!
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            href="/reservation"
            className="bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-100 transition duration-300 inline-block"
          >
            Make a Reservation
          </Link>
        </motion.div>
        <motion.div 
          style={{ rotate }}
          className="absolute -top-16 -left-16 w-32 h-32 bg-orange-500 rounded-full opacity-20"
        />
        <motion.div 
          style={{ rotate }}
          className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-500 rounded-full opacity-20"
        />
      </div>
    </section>
  )
}


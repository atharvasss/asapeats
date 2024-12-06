'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function DescriptionSection() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <motion.div 
        style={{ scale, opacity }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg leading-relaxed mb-6"
          >
            At ASAP EATS, we serve traditional Indian flavours with a global twist. Every dish is crafted with love, gratitude, and a deep passion for food. We pour our hearts into every bite, creating flavors that tell a story — a beautiful blend of tradition and global inspiration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg leading-relaxed"
          >
            It's not just a meal, it's an experience meant to nourish both the body and soul. We invite you to join us in North Sydney, where warmth and creativity come together on every plate, and where you're not just a guest, but a part of our family.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}


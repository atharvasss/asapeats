'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <section id="about" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="md:w-1/2 mb-8 md:mb-0" style={{ scale }}>
            <Image
              src="/placeholder.svg?height=600&width=800&text=Our+Culinary+Journey"
              alt="About ASAP EATS"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="section-heading text-left mb-6 text-shadow">Our Story</h2>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At ASAP EATS, we serve traditional Indian flavours with a global twist. Every dish is crafted with love, gratitude, and a deep passion for food. We pour our hearts into every bite, creating flavors that tell a story — a beautiful blend of tradition and global inspiration.
            </motion.p>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              It's not just a meal, it's an experience meant to nourish both the body and soul. We invite you to join us in North Sydney, where warmth and creativity come together on every plate, and where you're not just a guest, but a part of our family.
            </motion.p>
            <motion.button
              className="btn btn-secondary text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


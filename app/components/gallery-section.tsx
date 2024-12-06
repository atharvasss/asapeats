'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const dishes = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'Colorful curry dish' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Spicy tandoori chicken' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Vegetarian thali' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Fusion dessert' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function GallerySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Signature Dishes</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={dish.src}
                alt={dish.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


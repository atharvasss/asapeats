'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  { name: 'Butter Chicken', description: 'Creamy tomato sauce with tender chicken', image: '/placeholder.svg?height=300&width=400&text=Butter+Chicken' },
  { name: 'Vegetable Biryani', description: 'Aromatic rice dish with mixed vegetables', image: '/placeholder.svg?height=300&width=400&text=Vegetable+Biryani' },
  { name: 'Tandoori Prawns', description: 'Spiced prawns cooked in a tandoor', image: '/placeholder.svg?height=300&width=400&text=Tandoori+Prawns' },
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

export default function MenuPreview() {
  return (
    <section className="py-20 bg-orange-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-dark-brown"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          Our Signature Dishes
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dark-brown">{item.name}</h3>
                <p className="text-aubergine">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


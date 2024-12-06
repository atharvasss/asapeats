'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuSectionProps {
  title: string
  items: string[]
  index: number
}

export default function MenuSection({ title, items, index }: MenuSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden"
    >
      <div className="bg-orange-primary text-white p-6">
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, itemIndex) => (
          <motion.div
            key={item}
            className="bg-menu-bg rounded-2xl p-6 hover:shadow-lg transition duration-300 fade-in-up"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <Image
                src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(item)}`}
                alt={item}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <h4 className="text-2xl font-semibold mb-2 text-text-darker">{item}</h4>
            <p className="text-orange-primary cursive text-lg pulse-animation">A fusion of flavors in every bite!</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


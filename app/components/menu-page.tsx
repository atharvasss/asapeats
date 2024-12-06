'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuPageProps {
  item: {
    name: string
    description: string
    price: string
  }
  isEven: boolean
}

export default function MenuPage({ item, isEven }: MenuPageProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-xl overflow-hidden"
      initial={{ rotateY: isEven ? 90 : -90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: isEven ? 0.2 : 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-48">
        <Image
          src={`/placeholder.svg?height=300&width=400&text=${item.name}`}
          alt={item.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-sm mb-4">{item.description}</p>
        <p className="text-lg font-bold">{item.price}</p>
      </div>
    </motion.div>
  )
}


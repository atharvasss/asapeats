'use client'

import { motion } from 'framer-motion'

const spices = [
  { name: 'Turmeric', color: '#FFC300' },
  { name: 'Paprika', color: '#FF5733' },
  { name: 'Cardamom', color: '#C70039' },
  { name: 'Cumin', color: '#900C3F' },
  { name: 'Coriander', color: '#581845' },
]

export default function FooterDecoration() {
  return (
    <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
      <div className="flex justify-between items-center h-full">
        {spices.map((spice, index) => (
          <motion.div
            key={spice.name}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: spice.color }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}


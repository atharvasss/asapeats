'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  { id: 1, name: 'Butter Chicken', price: 14.99, image: '/placeholder.svg?height=300&width=400&text=Butter+Chicken' },
  { id: 2, name: 'Vegetable Biryani', price: 12.99, image: '/placeholder.svg?height=300&width=400&text=Vegetable+Biryani' },
  { id: 3, name: 'Palak Paneer', price: 13.99, image: '/placeholder.svg?height=300&width=400&text=Palak+Paneer' },
  { id: 4, name: 'Chicken Tikka Masala', price: 15.99, image: '/placeholder.svg?height=300&width=400&text=Chicken+Tikka+Masala' },
  { id: 5, name: 'Vegetable Samosas', price: 6.99, image: '/placeholder.svg?height=300&width=400&text=Vegetable+Samosas' },
  { id: 6, name: 'Garlic Naan', price: 3.99, image: '/placeholder.svg?height=300&width=400&text=Garlic+Naan' },
  { id: 7, name: 'Lamb Rogan Josh', price: 16.99, image: '/placeholder.svg?height=300&width=400&text=Lamb+Rogan+Josh' },
  { id: 8, name: 'Malai Kofta', price: 13.99, image: '/placeholder.svg?height=300&width=400&text=Malai+Kofta' },
]

const OrderMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer relative"
          whileHover={{ scale: 1.05, rotateY: 15 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedItem(item)}
        >
          <div className="relative h-48">
            <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-heading-color">{item.name}</h3>
            <p className="text-lg text-indian-green font-medium">${item.price?.toFixed(2) || 'N/A'}</p>
          </div>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-saffron bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-white text-2xl font-semibold">View Details</span>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 90 }}
              transition={{ type: 'spring', damping: 15 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 mb-6">
                <Image src={selectedItem.image} alt={selectedItem.name} layout="fill" objectFit="cover" className="rounded-xl" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-heading-color">{selectedItem.name}</h3>
              <p className="text-xl text-indian-green font-medium mb-4">${selectedItem.price?.toFixed(2) || 'N/A'}</p>
              <p className="text-text-color mb-6">Savor the authentic flavors of India with our perfectly spiced and expertly prepared {selectedItem.name.toLowerCase()}.</p>
              <motion.button 
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OrderMenu


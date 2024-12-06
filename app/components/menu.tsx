'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const menuItems = [
  { name: 'Aussie Butter Chicken', description: 'Tender chicken in a creamy tomato sauce with a touch of native lemon myrtle', price: '$22.99', image: '/aussie-butter-chicken.jpg' },
  { name: 'Kangaroo Biryani', description: 'Fragrant rice dish with lean kangaroo meat and bush spices', price: '$24.99', image: '/kangaroo-biryani.jpg' },
  { name: 'Barramundi Curry', description: 'Australian barramundi in a coconut curry with finger lime', price: '$26.99', image: '/barramundi-curry.jpg' },
  { name: 'Wattleseed Naan', description: 'Traditional naan bread infused with nutty wattleseed', price: '$5.99', image: '/wattleseed-naan.jpg' },
  { name: 'Emu Tikka Masala', description: 'Grilled emu in a rich, spiced tomato cream sauce', price: '$28.99', image: '/emu-tikka-masala.jpg' },
  { name: 'Macadamia Samosas', description: 'Crispy pastries filled with spiced vegetables and macadamia nuts', price: '$10.99', image: '/macadamia-samosas.jpg' },
]

const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      className="menu-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="menu-card-inner">
        <div className="menu-card-front">
          <Image
            src={item.image}
            alt={item.name}
            width={400}
            height={300}
            className="menu-image"
          />
          <h3 className="menu-title text-primary mt-4">{item.name}</h3>
          <p className="menu-price text-accent">{item.price}</p>
        </div>
        <div className="menu-card-back bg-primary">
          <h3 className="menu-title text-white mb-4">{item.name}</h3>
          <p className="menu-description text-white">{item.description}</p>
          <p className="menu-price text-accent mt-4">{item.price}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-primary mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          Our Menu
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {menuItems.map((item, index) => (
            <MenuItem key={item.name} item={item} index={index} />
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="btn btn-primary text-xl">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
}


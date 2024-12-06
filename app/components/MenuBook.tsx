'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const menuCategories = [
  {
    name: "Traditional Indian",
    items: ["All Curries Veg/ Non veg", "All Entrée Veg/Non Veg", "All Breads", "All Sides"]
  },
  {
    name: "Tandoori Naan Wraps",
    items: ["Tandoori Paneer Wrap", "Tandoori chicken wrap", "Seekh Kebab wrap", "Tandoori Mushroom Wrap", "Smashed Samosa Wrap"]
  },
  {
    name: "Fusion Italian",
    items: ["Butter Chicken Lasagna", "Lentil Bologanese Lasagna/ Pasta", "Vindaloo Puttanesca", "Fresh Gnocchi with fusion Sauces", "Stuffed Ravioli with Fusion Sauces"]
  },
  {
    name: "Fusion Mexican",
    items: ["Mixed Fritter Taco", "Chicken Tikka Taco", "Pav Bhaji Quesadilla", "Kheema Bhuna Quesadilla", "Paneer Tikka Nachos", "Butter Chicken Nachos", "Tandoori Mushroom Burrito", "Seekh Kebab Burrito"]
  },
  {
    name: "Fusion Asian",
    items: ["Triple Schezwan Rice/ Noodle (Chicken Optional)", "Chicken 65/ Paneer 65", "Manchurian / Gobi Manchurian", "Chilli Chicken / Chilli Paneer", "Chicken Tikka Bao/ Tofu Tikka bao", "Vada Bao/ Onion Bhaji bao", "Paneer Tikka Bao/ Seekh Kebab Bao", "Chicken 65 Bao/ Paneer 65 Bao", "Korean Fried Chicken with 3 Choices of Sauces"]
  },
  {
    name: "Chaat",
    items: ["Samosa chaat", "Sev Poori", "Pani Poori", "Bombay Sev Poori", "Aloo Tikki Chaat"]
  },
  {
    name: "Dessert",
    items: ["ChaiMisu", "Tiramisu", "Gulab Jamun", "Gajar Halwa", "Moong Daal Halwa"]
  }
]

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentPage((prevPage) => (prevPage + 1) % menuCategories.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextPage = () => {
    setDirection(1)
    setCurrentPage((prev) => (prev + 1) % menuCategories.length)
  }

  const prevPage = () => {
    setDirection(-1)
    setCurrentPage((prev) => (prev - 1 + menuCategories.length) % menuCategories.length)
  }

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 90 : -90,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -90 : 90,
    }),
  }

  const pageTransition = {
    type: 'tween',
    duration: 0.5,
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.div 
      className="relative w-full max-w-4xl mx-auto bg-orange-200 rounded-lg shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex items-center justify-between p-8 bg-orange-500 text-white"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-4xl font-bold font-serif">ASAP EATS Catering Menu</h2>
        <div className="flex items-center space-x-4">
          <motion.button 
            onClick={prevPage} 
            className="p-2 rounded-full bg-white text-orange-600 hover:bg-orange-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button 
            onClick={nextPage} 
            className="p-2 rounded-full bg-white text-orange-600 hover:bg-orange-100 transition-colors"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </motion.div>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="p-8"
        >
          <motion.h3 
            className="text-4xl font-bold text-orange-800 mb-6 font-serif"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {menuCategories[currentPage].name}
          </motion.h3>
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuCategories[currentPage].items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md text-orange-800"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 0px 12px rgba(0,0,0,0.1)",
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

export default MenuBook


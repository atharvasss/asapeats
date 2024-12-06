'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const menuCategories = [
  {
    title: "Traditional Indian",
    items: ["All Curries Veg/ Non veg", "All Entrée Veg/Non Veg", "All Breads", "All Sides"],
    image: "/placeholder.svg?height=400&width=600&text=Traditional+Indian",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Tandoori Naan Wraps",
    items: ["Tandoori Paneer Wrap", "Tandoori chicken wrap", "Seekh Kebab wrap", "Tandoori Mushroom Wrap", "Smashed Samosa Wrap"],
    image: "/placeholder.svg?height=400&width=600&text=Tandoori+Naan+Wraps",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Fusion Italian",
    items: ["Butter Chicken Lasagna", "Lentil Bologanese Lasagna/ Pasta", "Vindaloo Puttanesca", "Fresh Gnocchi with fusion Sauces", "Stuffed Ravioli with Fusion Sauces"],
    image: "/placeholder.svg?height=400&width=600&text=Fusion+Italian",
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Fusion Mexican",
    items: ["Mixed Fritter Taco", "Chicken Tikka Taco", "Pav Bhaji Quesadilla", "Kheema Bhuna Quesadilla", "Paneer Tikka Nachos", "Butter Chicken Nachos", "Tandoori Mushroom Burrito", "Seekh Kebab Burrito"],
    image: "/placeholder.svg?height=400&width=600&text=Fusion+Mexican",
    color: "from-yellow-500 to-red-500"
  },
  {
    title: "Fusion Asian",
    items: ["Triple Schezwan Rice/ Noodle (Chicken Optional)", "Chicken 65/ Paneer 65", "Manchurian / Gobi Manchurian", "Chilli Chicken / Chilli Paneer", "Chicken Tikka Bao/ Tofu Tikka bao", "Vada Bao/ Onion Bhaji bao", "Paneer Tikka Bao/ Seekh Kebab Bao", "Chicken 65 Bao/ Paneer 65 Bao", "Korean Fried Chicken with 3 Choices of Sauces"],
    image: "/placeholder.svg?height=400&width=600&text=Fusion+Asian",
    color: "from-red-500 to-yellow-500"
  },
  {
    title: "Chaat",
    items: ["Samosa chaat", "Sev Poori", "Pani Poori", "Bombay Sev Poori", "Aloo Tikki Chaat"],
    image: "/placeholder.svg?height=400&width=600&text=Chaat",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Dessert",
    items: ["ChaiMisu", "Tiramisu", "Gulab Jamun", "Gajar Halwa", "Moong Daal Halwa"],
    image: "/placeholder.svg?height=400&width=600&text=Dessert",
    color: "from-pink-500 to-purple-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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
      stiffness: 100,
      damping: 10
    }
  }
}

export default function CateringMenu() {
  const [currentCategory, setCurrentCategory] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % menuCategories.length)
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">ASAP EATS Catering Menu</h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="md:w-1/2 sticky top-24">
                <motion.div
                  className="relative w-full h-64 md:h-[calc(100vh-12rem)] rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={menuCategories[currentCategory].image}
                    alt={menuCategories[currentCategory].title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${menuCategories[currentCategory].color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-4xl font-bold text-white text-center">{menuCategories[currentCategory].title}</h3>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.ul 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {menuCategories[currentCategory].items.map((item, index) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      className="bg-secondary/10 p-4 rounded-lg shadow-md flex items-center space-x-3"
                    >
                      <span className="w-3 h-3 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm md:text-base text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}


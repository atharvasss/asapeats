'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function CateringMenu() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {menuCategories.map((category, index) => (
        <motion.div
          key={category.name}
          variants={itemVariants}
          className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={`/placeholder.svg?height=300&width=400&text=${category.name}`}
            alt={category.name}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 gradient-bg text-white">
            <h2 className="text-2xl font-bold mb-4 text-shadow">{category.name}</h2>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="flex items-center"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}


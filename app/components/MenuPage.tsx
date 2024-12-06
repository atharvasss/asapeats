'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface MenuItem {
 name: string
 description: string
 price: string
 category: string
}

interface MenuPageProps {
 title: string
 menuItems: MenuItem[]
}

const MenuPage: React.FC<MenuPageProps> = ({ title, menuItems }) => {
 const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

 const categories = Array.from(new Set(menuItems.map(item => item.category)))

 const filteredItems = selectedCategory
   ? menuItems.filter(item => item.category === selectedCategory)
   : menuItems

 return (
   <div className="min-h-screen bg-background py-20">
     <div className="container mx-auto px-4">
       <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-primary">{title}</h1>
       
       <div className="flex justify-center mb-8">
         <div className="flex flex-wrap justify-center gap-4">
           <Button
             variant={selectedCategory === null ? "default" : "outline"}
             onClick={() => setSelectedCategory(null)}
           >
             All
           </Button>
           {categories.map(category => (
             <Button
               key={category}
               variant={selectedCategory === category ? "default" : "outline"}
               onClick={() => setSelectedCategory(category)}
             >
               {category}
             </Button>
           ))}
         </div>
       </div>

       <AnimatePresence>
         <motion.div
           key={selectedCategory}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.3 }}
           className="grid grid-cols-1 md:grid-cols-2 gap-8"
         >
           {filteredItems.map((item, index) => (
             <motion.div
               key={item.name}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.3, delay: index * 0.1 }}
               className="bg-card p-6 rounded-lg shadow-md"
             >
               <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
               <p className="text-muted-foreground mb-2">{item.description}</p>
               <p className="text-secondary font-bold">{item.price}</p>
             </motion.div>
           ))}
         </motion.div>
       </AnimatePresence>
     </div>
   </div>
 )
}

export default MenuPage


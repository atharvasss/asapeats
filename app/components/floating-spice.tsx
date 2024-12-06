'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FloatingSpiceProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function FloatingSpice({ src, alt, width, height, className }: FloatingSpiceProps) {
  return (
    <motion.div 
      className={className}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      }}
    >
      <Image src={`/placeholder.svg?height=${height}&width=${width}`} alt={alt} width={width} height={height} />
    </motion.div>
  )
}


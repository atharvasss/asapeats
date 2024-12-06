import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Utensils } from 'lucide-react'

export default function HeroSection() {
 return (
   <section className="relative h-screen">
     <Image
       src="/placeholder.svg?height=1080&width=1920&text=Delicious+Indian+Cuisine"
       alt="ASAP EATS Hero"
       layout="fill"
       objectFit="cover"
       quality={100}
       priority
     />
     <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
       <div className="text-center text-white max-w-3xl mx-auto px-4">
         <h1 className="text-5xl md:text-7xl font-bold mb-6">ASAP EATS</h1>
         <p className="text-xl md:text-2xl mb-8">Experience the Perfect Blend of Indian Flavors and Aussie Style</p>
         <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
           <Utensils className="mr-2 h-5 w-5" /> Explore Our Menu
         </Button>
       </div>
     </div>
     <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
   </section>
 )
}


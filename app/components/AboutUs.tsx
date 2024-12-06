import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
 return (
   <section className="py-20 bg-muted/50 food-pattern">
     <div className="container mx-auto px-4">
       <Card className="overflow-hidden shadow-lg">
         <CardContent className="p-0">
           <div className="flex flex-col md:flex-row">
             <div className="md:w-1/2 relative h-64 md:h-auto">
               <Image
                 src="/placeholder.svg?height=600&width=800&text=Authentic+Indian+Cuisine"
                 alt="About ASAP EATS"
                 layout="fill"
                 objectFit="cover"
               />
             </div>
             <div className="md:w-1/2 p-8">
               <h2 className="text-3xl font-bold mb-6 text-primary">Our Culinary Journey</h2>
               <p className="text-lg mb-6 text-muted-foreground">
                 At ASAP EATS, we blend traditional Indian flavors with modern Australian flair. Every dish is a labor of love, crafted to perfection by our expert chefs.
               </p>
               <p className="text-lg text-muted-foreground">
                 From aromatic curries to sizzling tandoori delights, we bring the vibrant tastes of India to the heart of Australia. Join us for a culinary adventure that celebrates the best of both worlds.
               </p>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </section>
 )
}


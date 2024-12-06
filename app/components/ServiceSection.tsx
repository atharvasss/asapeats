import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface ServiceSectionProps {
 title: string
 description: string
 imageSrc: string
 linkHref: string
 imageLeft?: boolean
}

export default function ServiceSection({ title, description, imageSrc, linkHref, imageLeft = true }: ServiceSectionProps) {
 return (
   <section className="py-20 bg-background">
     <div className="container mx-auto px-4">
       <Card className="overflow-hidden shadow-lg">
         <CardContent className="p-0">
           <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
             <div className="md:w-1/2 relative h-64 md:h-auto">
               <Image
                 src={imageSrc}
                 alt={title}
                 layout="fill"
                 objectFit="cover"
               />
             </div>
             <div className="md:w-1/2 p-8 flex flex-col justify-center">
               <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>
               <p className="text-lg mb-6 text-muted-foreground">{description}</p>
               <Button asChild variant="outline" className="self-start">
                 <Link href={linkHref}>
                   Learn More <ArrowRight className="ml-2 h-4 w-4" />
                 </Link>
               </Button>
             </div>
           </div>
         </CardContent>
       </Card>
     </div>
   </section>
 )
}


import { Metadata } from 'next'
import CateringMenu from '../components/CateringMenu'

export const metadata: Metadata = {
 title: 'Catering Menu - ASAP EATS',
 description: 'Explore our diverse catering menu featuring traditional Indian cuisine and exciting fusion dishes.',
}

export default function CateringPage() {
 return (
   <main className="pt-24 pb-16 bg-background">
     <div className="container mx-auto px-4">
       <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8">Catering Menu</h1>
       <p className="text-xl text-center text-muted-foreground mb-12">
         Discover our exquisite blend of traditional Indian flavors and innovative fusion cuisine
       </p>
       <CateringMenu />
     </div>
   </main>
 )
}


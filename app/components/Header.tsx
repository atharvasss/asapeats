'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
 Sheet,
 SheetContent,
 SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
 const [isScrolled, setIsScrolled] = useState(false)

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 0)
   }
   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 const menuItems = [
   { name: 'Home', href: '/' },
   { name: 'Restaurant Menu', href: '/restaurant-menu' },
   { name: 'Catering Menu', href: '/catering-menu' },
   { name: 'Meal Service', href: '/meal-service' },
 ];

 return (
   <header className={`fixed w-full z-50 transition-colors duration-300 ${
     isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'
   }`}>
     <div className="container mx-auto px-4 py-4">
       <div className="flex justify-between items-center">
         <Link href="/" className="text-2xl font-bold text-primary">ASAP EATS</Link>
         <nav className="hidden md:flex space-x-1">
           {menuItems.map((item) => (
             <Button key={item.name} variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-primary/10">
               <Link href={item.href}>{item.name}</Link>
             </Button>
           ))}
         </nav>
         <Sheet>
           <SheetTrigger asChild>
             <Button variant="outline" size="icon" className="md:hidden">
               <Menu className="h-6 w-6" />
               <span className="sr-only">Toggle menu</span>
             </Button>
           </SheetTrigger>
           <SheetContent>
             <nav className="flex flex-col space-y-4">
               {menuItems.map((item) => (
                 <Button key={item.name} variant="ghost" asChild className="justify-start">
                   <Link href={item.href}>{item.name}</Link>
                 </Button>
               ))}
             </nav>
           </SheetContent>
         </Sheet>
       </div>
     </div>
   </header>
 )
}


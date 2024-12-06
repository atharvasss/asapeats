import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
 return (
   <footer className="bg-muted text-muted-foreground">
     <div className="container mx-auto px-4 py-16">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div>
           <h3 className="text-2xl font-bold mb-4 text-primary">ASAP EATS</h3>
           <p className="mb-4">Indian flavors, Aussie style</p>
           <div className="flex space-x-4">
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
               <Facebook size={24} />
             </a>
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
               <Instagram size={24} />
             </a>
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
               <Twitter size={24} />
             </a>
           </div>
         </div>
         <div>
           <h4 className="text-xl font-semibold mb-4 text-secondary">Contact Us</h4>
           <p>123 Curry Lane, Sydney, NSW 2000</p>
           <p>Phone: (02) 9876 5432</p>
           <p>Email: info@asapeats.com.au</p>
         </div>
         <div>
           <h4 className="text-xl font-semibold mb-4 text-secondary">Opening Hours</h4>
           <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
           <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
         </div>
         <div>
           <h4 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h4>
           <ul className="space-y-2">
             <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
             <li><Link href="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
             <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
             <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
             <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
           </ul>
         </div>
       </div>
       <div className="mt-12 pt-8 border-t border-muted-foreground/10 text-center">
         <p>&copy; 2023 ASAP EATS. All rights reserved.</p>
       </div>
     </div>
   </footer>
 )
}


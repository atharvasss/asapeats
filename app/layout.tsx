import './globals.css'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
 title: 'ASAP EATS - Indian Cuisine with an Aussie Twist',
 description: 'Experience the fusion of Indian and Australian flavors with our restaurant, catering, and meal service options.',
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
   <html lang="en">
     <body className="flex flex-col min-h-screen bg-background text-foreground">
       <Header />
       <main className="flex-grow pt-24">{children}</main>
       <Footer />
     </body>
   </html>
 )
}


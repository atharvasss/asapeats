import { Metadata } from 'next'
import CateringMenu from '../components/catering-menu'

export const metadata: Metadata = {
  title: 'Catering Menu - ASAP EATS',
  description: 'Explore our diverse catering menu featuring traditional Indian cuisine and exciting fusion dishes.',
}

export default function CateringPage() {
  return (
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">Catering Menu</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover our exquisite blend of traditional Indian flavors and innovative fusion cuisine
        </p>
        <CateringMenu />
      </div>
    </main>
  )
}


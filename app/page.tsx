import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import ServiceSection from './components/ServiceSection'
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Separator className="bg-primary/20" />
      <AboutUs />
      <Separator className="bg-primary/20" />
      <ServiceSection
        title="Restaurant Menu"
        description="Indulge in our diverse range of authentic Indian dishes with an Aussie twist. From classic curries to innovative fusion creations, there's something for every palate."
        imageSrc="/placeholder.svg?height=600&width=800&text=Exquisite+Restaurant+Menu"
        linkHref="/restaurant-menu"
      />
      <Separator className="bg-primary/20" />
      <ServiceSection
        title="Catering Services"
        description="Make your event unforgettable with our bespoke catering options. We offer a wide range of dishes perfect for any occasion, from intimate gatherings to large celebrations."
        imageSrc="/placeholder.svg?height=600&width=800&text=Premium+Catering+Services"
        linkHref="/catering-menu"
        imageLeft={false}
      />
      <Separator className="bg-primary/20" />
      <ServiceSection
        title="Meal Service"
        description="Enjoy our convenient meal service for your weekly Indian cuisine fix. Fresh, delicious, and delivered right to your doorstep - perfect for busy professionals and food enthusiasts alike."
        imageSrc="/placeholder.svg?height=600&width=800&text=Convenient+Meal+Service"
        linkHref="/meal-service"
      />
    </main>
  )
}


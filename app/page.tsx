import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}

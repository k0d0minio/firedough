// Off-season: only the holding page is rendered. To restore the full landing page,
// re-mount Header, HeroSection, AboutSection, MenuSection, CommunitySection and Footer
// from components/ (they are unchanged).
import { UnderConstruction } from "@/components/under-construction"

export default function Home() {
  return (
    <main className="min-h-screen">
      <UnderConstruction />
    </main>
  )
}

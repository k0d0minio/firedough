import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/pizza-truck-parked-on-scenic-irish-coastal-cliff-o.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance">
          Authentic Italian Pizza
          <span className="block text-accent">with a Taste of the West Coast</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
          Family recipes from Strandhill, served fresh from our truck on Ireland's stunning west coast. Where tradition meets
          the wild Atlantic way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            View Our Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            Find Us Today
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">🍕</span>
          </div>
          <span className="font-bold text-xl text-primary">Firedough Pizza</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#menu" className="text-sm font-medium hover:text-primary transition-colors">
            Menu
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#community" className="text-sm font-medium hover:text-primary transition-colors">
            Events
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
      </div>
    </header>
  )
}

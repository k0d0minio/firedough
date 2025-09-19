import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🍕</span>
              </div>
              <span className="font-bold text-xl text-primary">Firedough Pizza</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Authentic Italian pizza served fresh from our mobile kitchen on Ireland's stunning west coast.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Find Us</h4>
            <div className="space-y-2 text-background/80">
              <p>📍 Strandhill, Sligo</p>
              <p>📞 +353 87 123 4567</p>
              <p>✉️ hello@coastalcrust.ie</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Our Journey</h4>
            <div className="space-y-2 text-background/80">
              <p>📱 @firedoughstrandhill</p>
              <p>📘 Facebook</p>
              <p>📸 Instagram</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-background/80 mb-4 text-sm">Get notified when we're in your area!</p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© 2025 Firedough Pizza. Made with ❤️ on the Wild Atlantic Way.</p>
        </div>
      </div>
    </footer>
  )
}
